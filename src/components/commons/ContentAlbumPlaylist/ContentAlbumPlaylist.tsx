import styles from "./ContentAlbumPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_player'
//import ItemList from "../CardsComponents/ItemList/ItemList";
import { useParams } from "react-router";
import ItemList from "../CardsComponents/ItemList/ItemList";

const ContentAlbumPlaylist = () => {
  const dispatch = useDispatch();
//  const  { getContent } = bindActionCreators(actionCreator,dispatch);
  const { library_artist } = useSelector((state: any) => state);
  const { id } = useParams();
  
  useEffect(()=>{
    //getContent();
  },[])
  let image = 'https://e-cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/250x250-000000-80-0-0.jpg'
  return (
    <div className={styles.ContainerLibrary}>
      <div className={styles.ContainerInfo}>
      <img src={library_artist.card.image_medium} alt="album" />
        <h1>{`Album ${library_artist.card.name}`}</h1>

      </div>


      <div>
      <div className={styles.Column}>
          <h4>Name</h4>
          <h4>Duration</h4>

          </div>

        <div className={styles.list}>

      {library_artist.card.Songs && library_artist.card.Songs.map((s:any)=>(  <div  className={styles.ContainerFavorite}>  <ItemList item={s}></ItemList></div>    ) )}

          
        </div>
      </div>
    </div>
  );
};
export default ContentAlbumPlaylist;
