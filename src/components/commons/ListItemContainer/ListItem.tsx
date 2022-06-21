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

// import React, { useEffect, useState } from "react";
// import s from "./ItemList.module.css";
// import likefull from "../../../../assets/likefull.png";
// import time from "../../../../assets/time.png";
// import DropDownButton from "../../DropDownButton/DropDownButton";
// import { Link } from "react-router-dom";
// import play from "../../../../assets/play.png";
// import * as actionCreator from "../../../../redux/actions/action_player";
// import * as actionCreatorUser from "../../../../redux/actions/action_user";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useSelector } from "react-redux";


interface myProps {
  item: any;
  nb?: number;
}

const ListItem: React.FC<myProps> = (props: myProps) => {
    const formatDuration = (duration: string): string => {
    let num = parseInt(duration);
    let minutes: number = Math.floor(num / 60);
    let seconds: number = num - minutes * 60;
    let minStr: string = minutes.toString();
    let secStr: string = seconds.toString();
    return `${minStr.length == 1 ? "0" + minStr : minStr}:${secStr.length == 1 ? "0" + secStr : secStr
      }`;
  };
  const dispatch = useDispatch();
  const [fav, setFav] = useState(0)
  const { playSong, updateLike, likeSong, dislikeSong } = bindActionCreators(actionCreator, dispatch);
  const { user } = useAuth0();
  const email: string | undefined = user?.email;
  let type = props.item.type;
  const likeSongUser = useSelector((state: any) => state.library_artist.list.liked_songs);
  function like(item: any) {
    if (email) likeSong(item.id, email)
    let likeSongArr = likeSongUser
    likeSongArr.push(item)
    updateLike(likeSongArr)
    setFav(likeSongArr.length)
  }
  function dislike(id: string) {
    if (email) dislikeSong(id, email)
    let likeSongArr = likeSongUser.filter((e: any) => e.id !== id)
    updateLike(likeSongArr)
    setFav(likeSongArr.length)
  }
  // const state = useSelector((state: any) => state);
  // const [estado, setEstado] = useState<any>();
  // const [buttonLike, setButtonLike] = useState<any>(false);
  // const { user } = useAuth0();
  // const email: string | undefined = user?.email;
  // const dispatch = useDispatch();
  // const { playSong, likeSong, dislikeSong } = bindActionCreators(actionCreator, dispatch);
  // const { getLibrary } = bindActionCreators(actionCreatorUser, dispatch);
  // const formatDuration = (duration: string): string => {
  //   let num = parseInt(duration);
  //   let minutes: number = Math.floor(num / 60);
  //   let seconds: number = num - minutes * 60;
  //   let minStr: string = minutes.toString();
  //   let secStr: string = seconds.toString();
  //   return `${minStr.length == 1 ? "0" + minStr : minStr}:${
  //     secStr.length == 1 ? "0" + secStr : secStr
  //   }`;
  // };
  // useEffect(() => {
  //   if(email !== undefined) getLibrary(email);
  //   state.library_artist.list.liked_songs && setEstado(state.library_artist.list.liked_songs.map((e: any) => e.id));
  // }, [])
  // let tipo = props.item.type;

  switch (type) {
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
            {email && (
              <button
                className={s.likeBtn}
                onClick={() => likeSongUser?.find((e: any) => e.id === props.item.id) ? dislike(props.item.id) : like(props.item)}
              >
                {likeSongUser?.find((e: any) => e.id === props.item.id) ? <img className={s.likeImgInclude} src={likefull} alt='like button' /> :
                  <img className={s.likeImg} src={likefull} alt='like button' />}
              </button>
            )}
            <DropDownButton item={props.item} />
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
export default ListItem;
