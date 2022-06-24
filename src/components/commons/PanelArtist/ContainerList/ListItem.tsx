import React, { useEffect, useState } from "react";
import styles from "./ListItem.module.css";
import time from "../../../../../src/assets/time.png";
import edit from "../../../../../src/assets/edit.png";
import * as actionCreator from "../../../../redux/actions/action_player";
import * as actionCreatorArtist from "../../../../redux/actions/action_artist";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Swal from "sweetalert2";


interface myProps {
  item: any;
  nb?: number;
  album?: boolean;
}

const ItemListPanelArtist: React.FC<myProps> = (props: myProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(props.item.name);
  const [album, setAlbum] = useState<string>(props.item.album?.name);
  const {albums, id} = useSelector((state: any) => state.artist);
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch);
  const { updateSong, getArtist, launchPopUp } = bindActionCreators(actionCreatorArtist, dispatch);

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
  const toggleEdit = () => {
    editing ? setEditing(false) : setEditing(true);
  }
  const approveEdit = () => {
    updateSong({
      email: 'no importa',
      songId: props.item.id,
      songName: name,
      albumId: albums.filter((e: any) => e.name === album)[0]?.id,
    });
    getArtist(id);
    Swal.fire("Song updated!");
    setEditing(false);
  }
  const cancelEdit = () => {
    setName(props.item.name);
    setAlbum(props.item.album?.name);
    setEditing(false);
  }
  useEffect(() => {

  }, [])

  return (
    <div className={editing ? `${styles.container} ${styles.editing}` : styles.container}>
      <div>
        <img src={props.item.image_small} alt={'cover'} onClick={()=>playSong(props.item)}/>
        {
          !editing ? 
          <span >{props.nb ? `${props.nb}. ${name}`: name}</span>
          :
          <input type='text' value={props.nb ? `${props.nb}. ${name}`: name} onChange={e=>setName(e.target.value)}/>
        }
      </div>
      {/* <span>{props.item.artist}</span> */}
      {
        !editing ?
        <span>{album}</span>
      :
        <select value={album} onChange={e=>setAlbum(e.target.value)}>
          {
            albums?.map((e:any, i:number) => (
              props.item.album?.name === e.name ?
              <option selected key={i} value={e.name}>{e.name}</option>
              :
              <option key={i} value={e.name}>{e.name}</option>
            ))
          }
        </select>
      }
      <div>
        {
          !editing ?
          <img src={edit} onClick={()=>launchPopUp('EditSong')} className={styles.editBtn}/>
          :
          <div>
            <button onClick={approveEdit}>✅</button>
            <button onClick={cancelEdit}>❌</button>
          </div>
        }
        <span>{formatDuration(props.item.duration)}</span>
        <img src={time} alt="time icon" />
      </div>
    </div>
  )
};
export default ItemListPanelArtist;
