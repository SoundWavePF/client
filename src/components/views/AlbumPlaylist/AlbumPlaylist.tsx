import styles from "../Home/Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import ContentAlbumPlaylist from "../../commons/ContentAlbumPlaylist/ContentAlbumPlaylist";

const AlbumPlaylist = () => {
  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      <ContentAlbumPlaylist/>
    </div>
  );
};
export default AlbumPlaylist;
