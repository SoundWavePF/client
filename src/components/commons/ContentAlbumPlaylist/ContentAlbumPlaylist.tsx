import styles from "./ContentAlbumPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_player'
//import ItemList from "../CardsComponents/ItemList/ItemList";
import content from './album.json';
import { useParams } from "react-router";

const ContentAlbumPlaylist = () => {
  const dispatch = useDispatch();
//  const  { getContent } = bindActionCreators(actionCreator,dispatch);
  const { content } = useSelector((state: any) => state);
  const { id } = useParams();
  
  useEffect(()=>{
    //getContent();
  },[])
  let image = 'https://e-cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/250x250-000000-80-0-0.jpg'
  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="album" />
        <h1>{`Album ${id}`}</h1>
      </div>
      <div>
        <div className={styles.header}>
          <p>Name</p>
          <p>Album</p>
          <p>Artist</p>
          <p>Duration</p>
        </div>
        <div className={styles.list}>
          {
            // content.map((e, i: number) => {
            //   return (
            //     <ItemList key={i} Item={e}/>
            //   )
            // })
          }
        </div>
      </div>
    </div>
  );
};
export default ContentAlbumPlaylist;
