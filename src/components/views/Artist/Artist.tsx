import styles from "../Home/Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import { ArtistPage } from "../../commons/ArtistPage/ArtistPage";
import { useSelector } from "react-redux";
import SearchResults from "../SearchResults/SearchResults";


const Artist = () => {
  const searchString = useSelector((state: any) => state.query)
  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      {
        !searchString ?
        <ArtistPage/>
        :
        <SearchResults/>
      }
    </div>
  );
};
export default Artist;