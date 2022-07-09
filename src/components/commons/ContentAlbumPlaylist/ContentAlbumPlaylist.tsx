import styles from "./ContentAlbumPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useParams, useLocation } from "react-router";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionCreator2 from "../../../redux/actions/action_user";
import ListItemContainer from "../ListItemContainer/ListItemContainer";
import Swal from "sweetalert2";
import imgPlaylist from "../../../assets/playlistFran2.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../../../redux/actions/hc_data";

const ContentAlbumPlaylist = () => {
  const { email } = useSelector((state: any) => state.user_info);
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getAlbumPlaylist, updatePlaylist, playAll } = bindActionCreators(
    actionCreator,
    dispatch
  );
  const { deletePlaylist } = bindActionCreators(actionCreator2, dispatch);
  const item = useSelector((state: any) => state.album_playlist);
  const newPlaylist = useSelector((state: any) => state.playlist_update);
  const { id } = useParams();
  const path = useLocation().pathname;
  const isPlaylist = path.includes("playlist");
  const [showEdit, setShowEdit] = useState<boolean>(false);
  useEffect(() => {
    isPlaylist
      ? getAlbumPlaylist(id, "playlist")
      : getAlbumPlaylist(id, "album");
     
    return () => {
      getAlbumPlaylist("clean", "");
    };
  }, []);
  
  const toggleEdit = async () => {
    if (edit) {
      if (newPlaylist.length === 0) {
        Swal.fire("No changes!");
        setEdit(false);
        return;
      } else {
        let newSongOrder = newPlaylist.map((song: any) => song.id);
        await axios.post("https://api-production-b004.up.railway.app/playlist/update", {
          playlistId: id,
          newSongOrder,
          field: "songOrder",
          email,
        });
        updatePlaylist([]);
        Swal.fire("Playlist updated!");
        setEdit(false);
      }
    } else {
      setEdit(true);
    }
  };

  function borrar(p: any){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#ffee32',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed){
        deletePlaylist(p)
        Swal.fire(
          'Deleted!',
          'The playlist has been deleted.',
          'success'
        )
     navigate("/playlists")
      }
    })
  }
  
  useEffect(() => {
    if(item.user){
      if(item.user.email !== email){
        setShowEdit(false);
      } else {
        setShowEdit(true);
      }
    }
  }, [item]);

  return Object.keys(item).length > 0 ? (
    <div className={styles.container}>
      <div className={styles.details}>
        <img
          src={isPlaylist ? imgPlaylist : item.image_medium}
          alt={item.name}
        />
        <span>{item.name}</span>
        {item.artists && (
          <Link to={`/artist/${item.artists[item.artists.length - 1].id}`}>
            {item.artists[item.artists.length - 1].name}
          </Link>
        )}
        {/* <span>{item.artists && item.artists[0].name}</span> */}
        <div className={styles.btnContainer}>
          <button onClick={() => playAll(item.songs)} className={styles.btn}>
            Play all
          </button>
          {
            isPlaylist && showEdit && 
              <button
                onClick={() => email && id && borrar(id)}
                className={styles.btn}
              >
                Delete Playlist
              </button>
          }
        </div>
        {isPlaylist && showEdit && (
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
  ) : (
    <div className={`spinner-border ${styles.loading}`} role="status"></div>
  );
};
export default ContentAlbumPlaylist;
