import styles from "../Artist/Artist.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import ContentAlbumPlaylist from "../../commons/ContentAlbumPlaylist/ContentAlbumPlaylist";
import { useSelector } from "react-redux";
import SearchResults from "../SearchResults/SearchResults";

const AlbumPlaylist = () => {
  const searchString = useSelector((state: any) => state.query)
  
  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      {
        !searchString ?
          <ContentAlbumPlaylist/>
          :
          <SearchResults />
      }
    </div>
  );
};
export default AlbumPlaylist;
