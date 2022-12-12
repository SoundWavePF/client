import React, { useEffect, useState } from "react";
import styles from "./ListItem.module.css";
import time from "../../../../../src/assets/time.png";
import edit from "../../../../../src/assets/edit.png";
import * as actionCreator from "../../../../redux/actions/action_player";
import * as actionCreatorArtist from "../../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import useAuth from '../../../../utils/useAuth';

interface myProps {
  item: any;
  nb?: number;
  album?: boolean;
}

const ItemListPanelArtist: React.FC<myProps> = (props: myProps) => {
  const { user } = useAuth();
  const email = user?.email;
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch);
  const { launchPopUp } = bindActionCreators(actionCreatorArtist, dispatch);

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
  
  return (
    <div className={false ? `${styles.container} ${styles.editing}` : styles.container}>
      <div>
        <img src={props.item.image_small} alt={'cover'} onClick={()=>playSong(props.item, email)}/>
        {
          true ? 
          <span >{props.nb ? `${props.nb}. ${props.item.name}`: props.item.name}</span>
          :
          <input type='text' value={props.nb ? `${props.nb}.`: ''}/>
        }
      </div>
      {
        true ?
        <span>{props.album?props.item.album?.name:''}</span>
      :
        <select value={''}>
        </select>
      }
      <div>
        {
          true ?
          <img src={edit} onClick={()=>launchPopUp('EditSong', props.item)} className={styles.editBtn}/>
          :
          <div>
          </div>
        }
        <span>{formatDuration(props.item.duration)}</span>
        <img src={time} alt="time icon" />
      </div>
    </div>
  )
};
export default ItemListPanelArtist;
