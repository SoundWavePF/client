import styles from "./ContentAlbumPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useParams, useLocation } from "react-router";
import * as actionCreator from "../../../redux/actions/action_player";
import ListItemContainer from "../ListItemContainer/ListItemContainer";
import Swal from "sweetalert2";
import imgPlaylist from '../../../assets/coverPl.jpg'

const ContentAlbumPlaylist = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { getAlbumPlaylist, updatePlaylist, playAll } = bindActionCreators(actionCreator, dispatch);
  const item = useSelector((state: any) => state.album_playlist);
  const newPlaylist = useSelector((state: any) => state.playlist_update);
  const { id } = useParams();
  const path = useLocation().pathname;
  const isPlaylist = path.includes("playlist");
  useEffect(() => {
    isPlaylist
      ? getAlbumPlaylist(id, "playlist")
      : getAlbumPlaylist(id, "album");
      return () => {
        getAlbumPlaylist('clean', '');
      };
  }, []);
  const toggleEdit = () => {
    if (edit) {
      if (newPlaylist.length === 0){
        Swal.fire("No changes!");
        setEdit(false);
        return
      } else {
        //newPlaylist al back
        updatePlaylist([]);
        Swal.fire("Playlist updated!");
        setEdit(false);
      }
    } else {
      setEdit(true);
    }
  };
  return (
    Object.keys(item).length > 0 ?
      <div className={styles.container}>
        <div className={styles.details}>
          <img src={isPlaylist ? imgPlaylist : item.image_medium} alt={item.name} />
          <span>{item.name}</span>
          {item.artists && <a href={`/artist/${item.artists[0].id}`}>{item.artists[0].name}</a>}
          {/* <span>{item.artists && item.artists[0].name}</span> */}
          <button onClick={() => playAll(item.songs)} className={styles.btn}>Play all</button>
          {isPlaylist && (
            <button
              className={edit ? `${styles.edit} ${styles.save}` : styles.edit}
              onClick={toggleEdit}
            >
              {edit ? "Save" : "Edit"}
            </button>
          )}
        </div>
        {item.songs && (
          <ListItemContainer
            content={item.songs}
            header={true}
            nb={true}
            sort={edit}
          />
        )}
      </div>
    :
    <div className={`spinner-border ${styles.loading}`}  role="status"></div>
  );
};
export default ContentAlbumPlaylist;
