import React from "react";
import s from "./ItemList.module.css";
import time from "../../../../assets/time.png";
import DropDownButton from "../../DropDownButton/DropDownButton";
import { Link } from "react-router-dom";
import play from "../../../../assets/play.png";
import * as actionCreator from "../../../../redux/actions/action_player";
import { bindActionCreators } from "redux";
import FavoriteIcon from "../../FavoriteIcon/FavoriteIcon";
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';

interface myProps {
  item: any;
}

const ItemList: React.FC<myProps> = (props: myProps) => {
  const { user } = useAuth0();
  const email = user?.email;
  const formatDuration = (duration: string): string => {
    const num = parseInt(duration);
    const minutes: number = Math.floor(num / 60);
    const seconds: number = num - minutes * 60;
    const minStr: string = minutes.toString();
    const secStr: string = seconds.toString();
    return `${minStr.length == 1 ? "0" + minStr : minStr}:${
      secStr.length == 1 ? "0" + secStr : secStr
    }`;
  };
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch);
  const type = props.item.type;

  switch (type) {
    case "track":
      return (
        <div className={s.itemListContainer}>
          <div className={s.imageAndNameContainer}>
            <div>
              <div>
                <img className={s.image} src={props.item.image_small} alt="" />
                <img src={play} className={s.Play} onClick={() => playSong(props.item, email)}/>{" "}
              </div>
            </div>
            <div className={s.songNameContainer}>
              <div onClick={() => playSong(props.item, email)} className={s.songName}>
                {props.item.name}
              </div>
              <Link
                className={s.spanArtistName}
                to={"/artist/" + props.item.artists[0].id}
              >
                <span>{props.item.artists[0].name}</span>
              </Link>
            </div>
          </div>
          <div className={s.controllerContainer}>
            <FavoriteIcon item={props.item} />
            <div>
              <DropDownButton item={props.item} />
            </div>
            <div>
              <div className={s.duration}>
                {formatDuration(props.item.duration)}
              </div>
            </div>
            <div>
              <img className={s.timeImg} src={time} alt="time icon" />
            </div>
          </div>
        </div>
      );
    case "album":
      return (
        <div className={s.itemListContainer}>
          <Link className={s.links} to={"/album/" + props.item.id}>
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
          <Link className={s.links} to={"/artist/" + props.item.id}>
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
