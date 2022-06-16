import styles from "./ContentAlbumPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useParams, useLocation } from "react-router";
import * as actionCreator from '../../../redux/actions/action_player'
import ListItemContainer from "../ListItemContainer/ListItemContainer";

const ContentAlbumPlaylist = () => {
  const dispatch = useDispatch();
  const  { getAlbumPlaylist } = bindActionCreators(actionCreator,dispatch);
  const item = useSelector((state: any) => state.album_playlist);
  const { id } = useParams();
  const path = useLocation().pathname;
  useEffect(()=>{
    path.includes('album') ?
    getAlbumPlaylist(id, 'album'):
    getAlbumPlaylist(id, 'playlist')
  },[]);
  return (
    item &&
      <div className={styles.container}>
        <div className={styles.details}>
          <img src={item.image_medium} alt={item.name} />
          <span>{item.name}</span>
          <span>{item.artists && item.artists[0].name}</span>
          <button >Play all</button>
        </div>
        <ListItemContainer content={item.songs} header={true} cover={item.image_medium} nb={true}/>
      </div>
  );
};
export default ContentAlbumPlaylist;
