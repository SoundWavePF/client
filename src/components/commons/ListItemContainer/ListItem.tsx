import React, { useEffect, useState } from "react";
import s from "./ListItem.module.css";
import like from "../../../assets/like.png";
import likefull from "../../../../src/assets/likefull.png";
import time from "../../../../src/assets/time.png";
import DropDownButton from "../DropDownButton/DropDownButton";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionCreatorUser from "../../../redux/actions/action_user";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useAuth0 } from '@auth0/auth0-react';


interface myProps {
  item: any;
  nb?: number;
}

const ItemList: React.FC<myProps> = (props: myProps) => {
  const state = useSelector((state: any) => state);
  const [estado, setEstado] = useState<any>();
  const [buttonLike, setButtonLike] = useState<any>(false);
  const { user } = useAuth0();
  const email: string | undefined = user?.email;
  const dispatch = useDispatch();
  const { playSong, likeSong, dislikeSong } = bindActionCreators(actionCreator, dispatch);
  const { getLibrary } = bindActionCreators(actionCreatorUser, dispatch);
  const formatDuration = (duration: string): string => {
    let num = parseInt(duration);
    let minutes: number = Math.floor(num / 60);
    let seconds: number = num - minutes * 60;
    let minStr: string = minutes.toString();
    let secStr: string = seconds.toString();
    return `${minStr.length == 1 ? "0" + minStr : minStr}:${
      secStr.length == 1 ? "0" + secStr : secStr
    }`;
  };
  useEffect(() => {
    if(email !== undefined) getLibrary(email);
    state.library_artist.list.liked_songs && setEstado(state.library_artist.list.liked_songs.map((e: any) => e.id));
  }, [])
  let tipo = props.item.type;

  switch (tipo) {
    case "track":
      return (
        <div className={s.container}>
          <div>
            <img src={props.item.image_small} alt={'cover'} onClick={()=>playSong(props.item)}/>
            <span onClick={()=>playSong(props.item)}>{props.nb ? `${props.nb}. ${props.item.name}`: props.item.name}</span>
          </div>
          <span>{props.item.artist}</span>
          {/* <p>{props.item.album}</p> */}
          <div>
          {email && <button
            className={s.likeBtn}
            onClick={() => estado?.includes(props.item.id) ? dislikeSong(props.item.id, email) : likeSong(props.item.id, email)}
          >
            <img
              src={likefull} alt='like button' onClick={() => {setButtonLike(!buttonLike);}}className={estado?.includes(props.item.id) | buttonLike ? s.likeImgInclude : s.likeImg}/>
          </button>}
            {
              // props.item &&
              // <DropDownButton item={props.item}/>
            }
            <span>{formatDuration(props.item.duration)}</span>
            <img src={time} alt="time icon" />
          </div>
        </div>
      );
    case "album":
      return (
        <div className={s.itemListContainer}>
          <Link className={s.links} to={"/album/:id"}>
            <div className={s.imageAndNameContainer}>
              <div>
                <div>
                  <img
                    className={s.image}
                    src={props.item.image_small}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className={s.songName}>{props.item.name}</div>
              </div>
            </div>
          </Link>

          <div className={s.controllerContainer}>
            <div className={s.dbTracks}>{props.item.nb_tracks}</div>
          </div>
        </div>
      );
    case "artist":
      return (
        <div className={s.itemListContainer}>
          <Link className={s.links} to={"/artist/:id"}>
            <div className={s.imageAndNameContainer}>
              <div>
                <div>
                  <img
                    className={s.image}
                    src={props.item.image_small}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className={s.songName}>{props.item.name}</div>
              </div>
            </div>
          </Link>
          <div className={s.controllerContainer}></div>
        </div>
      );

    default:
      return <>nada</>;
  }
};
export default ItemList;
