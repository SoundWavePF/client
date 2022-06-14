import styles from "./ContentAlbumPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_user'
//import ItemList from "../CardsComponents/ItemList/ItemList";
import { useParams } from "react-router";
import ItemList from "../CardsComponents/ItemList/ItemList";
import DefaultBackground from "../../../assets/backgroundDefaultPlaylist.png";


const ContentAlbumPlaylist = () => {
  const dispatch = useDispatch();
 const  { getPlaylist } = bindActionCreators(actionCreator,dispatch);
  const  {album_playlist}  = useSelector((state: any) => state);
  const { id } = useParams();
  
  useEffect(()=>{

    getPlaylist(id);

  },[])
  return (
    <div className={styles.ContainerLibrary}>
      <div className={styles.ContainerInfo}>
      <img src={album_playlist.image_playlist?album_playlist.image_playlist:DefaultBackground} alt="album" />
        <h1>{`Playlist: ${album_playlist.name}`}</h1>

      </div>


      <div>
      <div className={styles.Column}>
          <h4>Name</h4>
          <h4>Duration</h4>

          </div>

        <div className={styles.list}>

      {album_playlist.Songs && album_playlist.Songs.map((s:any)=>(  <div  className={styles.ContainerFavorite}>  <ItemList item={s}></ItemList></div>    ) )}

        </div>
      </div>
    </div>
  );
};
export default ContentAlbumPlaylist;
