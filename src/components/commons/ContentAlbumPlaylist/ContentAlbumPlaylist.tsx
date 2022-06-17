import styles from "./ContentAlbumPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useParams, useLocation } from "react-router";
import * as actionCreator from '../../../redux/actions/action_player'
import ListItemContainer from "../ListItemContainer/ListItemContainer";

const ContentAlbumPlaylist = () => {
  const dispatch = useDispatch();
  const  { getAlbumPlaylist, playAll } = bindActionCreators(actionCreator,dispatch);
  const item = useSelector((state: any) => state.album_playlist);
  const { id } = useParams();
  const path = useLocation().pathname;
  const isPlaylist = path.includes('playlist');
  useEffect(()=>{
    isPlaylist ?
    getAlbumPlaylist(id, 'playlist'):
    getAlbumPlaylist(id, 'album')
  },[]);
  return (
    item &&
      <div className={styles.container}>
        <div className={styles.details}>
          <img src={item.image_medium} alt={item.name} />
          <span>{item.name}</span>
          <span>{item.artists && item.artists[0].name}</span>
          <button onClick={() => playAll(item.songs)}>Play all</button>
        </div>
        {
          item.songs && 
          <ListItemContainer content={item.songs} header={true} nb={true} playlist={isPlaylist?true:false}/>
        }
      </div>
  );
};
export default ContentAlbumPlaylist;
