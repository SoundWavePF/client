import React, { useState } from "react";
import s from "./ListItem.module.css";
import like from "../../../assets/like.png";
import likefull from "../../../../src/assets/likefull.png";
import time from "../../../../src/assets/time.png";
import DropDownButton from "../DropDownButton/DropDownButton";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

interface myProps {
  item: any;
  nb?: number;
}

const ItemList: React.FC<myProps> = (props: myProps) => {
  const [fav, setFav] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch);
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
            <img className={!fav ? s.noFav : ''} src={likefull} alt="like icon" onClick={fav?()=>setFav(false):()=>setFav(true)}/>
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
