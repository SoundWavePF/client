import styles from "./Genre.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import HomeContent from "../../commons/HomeContent/HomeContent";
import Player from "../../commons/Player/Player";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";
import GenrePage from '../../commons/GenrePage/GenrePage';

const Genre = () => {
  const searchString = useSelector((state: any) => state.query)

  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      {
        !searchString ?
        <GenrePage />
        :
        <SearchResults/>
      }
      <Player />
    </div>
  );
};
export default Genre;
