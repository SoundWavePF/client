import styles from "./AlbumPlaylist.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import ContentAlbumPlaylist from "../../commons/ContentAlbumPlaylist/ContentAlbumPlaylist";
import Player from "../../commons/Player/Player";

const AlbumPlaylist = () => {
  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      <ContentAlbumPlaylist/>
      <Player />
    </div>
  );
};
export default AlbumPlaylist;
