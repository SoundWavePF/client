import React, { useEffect, useState } from "react";
import styles from "./ListItem.module.css";
import time from "../../../../../src/assets/time.png";
import * as actionCreator from "../../../../redux/actions/action_player";
import * as actionCreatorUser from "../../../../redux/actions/action_user";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";


interface myProps {
  item: any;
  nb?: number;
  album?: boolean;
}

const ItemListPanelArtist: React.FC<myProps> = (props: myProps) => {
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch);
  const {  } = bindActionCreators(actionCreatorUser, dispatch);

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

  }, [])

  return (
    <div className={styles.container}>
      <div>
        <img src={props.item.image_small} alt={'cover'} onClick={()=>playSong(props.item)}/>
        <span onClick={()=>playSong(props.item)}>{props.nb ? `${props.nb}. ${props.item.name}`: props.item.name}</span>
      </div>
      {/* <span>{props.item.artist}</span> */}
      <span>{props.album ? props.item.album : ''}</span>
      {/* Hace falta el nombre del album de con la cancion */}
      <div>
        <button>editar</button>
        <span>{formatDuration(props.item.duration)}</span>
        <img src={time} alt="time icon" />
      </div>
    </div>
  )
};
export default ItemListPanelArtist;
