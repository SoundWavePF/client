import React from "react";
import s from "./ListItem.module.css";
import time from "../../../../src/assets/time.png";
import DropDownButton from "../DropDownButton/DropDownButton";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
import { bindActionCreators } from "redux";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';

interface myProps {
  item: any;
  nb?: number;
}

const ListItem: React.FC<myProps> = (props: myProps) => {
  const { user } = useAuth0();
  const email = user?.email;
  const formatDuration = (duration: string): string => {
    const num = parseInt(duration);
    const minutes: number = Math.floor(num / 60);
    const seconds: number = num - minutes * 60;
    const minStr: string = minutes.toString();
    const secStr: string = seconds.toString();
    return `${minStr.length == 1 ? "0" + minStr : minStr}:${secStr.length == 1 ? "0" + secStr : secStr
      }`;
  };

  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch);
  const type = props.item.type;

  switch (type) {
    case "track":
      return (
        <div className={s.container}>
          <div>
            <img
              src={props.item.image_small}
              alt={"cover"}
              onClick={() => playSong(props.item, email)}
            />
            <span className={s.textItem} onClick={() => playSong(props.item, email)}>
              {props.nb ? `${props.nb}. ${props.item.name}` : props.item.name}
            </span>
          </div>
          <span>{props.item.artist}</span>
          <div className={s.favAndDrop}>
            <FavoriteIcon item={props.item} />
            <DropDownButton item={props.item} />
            <span className={s.duration}> {formatDuration(props.item.duration)}</span>
            <img className={s.timeIcon} src={time} alt="time icon" />
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
    case "donation":
      return (
        <div className={s.itemListContainer}>
          {/* <Link className={s.links} to={"/artist/:id"}> */}
          <div className={s.imageAndNameContainer}>
            <div>
              <div>
                <img
                  className={s.image}
                  src={props.item.user.image_avatar}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={s.songName}>{props.item.user.username} donated ${props.item.amount}</div>
            </div>
          </div>
          {/* </Link> */}
          <div className={s.controllerContainer}></div>
        </div>
      );

    default:
      return <>nada</>;
  }
};
export default ListItem;
