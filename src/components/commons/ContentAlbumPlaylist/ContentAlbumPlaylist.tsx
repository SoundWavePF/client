import styles from "./ContentAlbumPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useParams, useLocation } from "react-router";
import * as actionCreator from "../../../redux/actions/action_player";
import ListItemContainer from "../ListItemContainer/ListItemContainer";
import Swal from "sweetalert2";

const ContentAlbumPlaylist = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { getAlbumPlaylist, updatePlaylist } = bindActionCreators(actionCreator, dispatch);
  const item = useSelector((state: any) => state.album_playlist);
  const newPlaylist = useSelector((state: any) => state.playlist_update);
  const { id } = useParams();
  const path = useLocation().pathname;
  const isPlaylist = path.includes("playlist");
  useEffect(() => {
    isPlaylist
      ? getAlbumPlaylist(id, "playlist")
      : getAlbumPlaylist(id, "album");
  }, []);
  const toggleEdit = () => {
    if (edit) {
      if (newPlaylist.length === 0){
        Swal.fire("No changes!");
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
    item && (
      <div className={styles.container}>
        <div className={styles.details}>
          <img src={item.image_medium} alt={item.name} />
          <span>{item.name}</span>
          <span>{item.artists && item.artists[0].name}</span>
          <button className={styles.btn}>Play all</button>
          {!isPlaylist && (
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
    )
  );
};
export default ContentAlbumPlaylist;
