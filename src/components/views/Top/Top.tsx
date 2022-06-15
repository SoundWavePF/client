import styles from "./Top.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import Player from "../../commons/Player/Player";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";
import GenrePage from '../../commons/GenrePage/GenrePage';
import TopPage from "../../commons/TopPage/TopPage";

const Top = () => {
  const searchString = useSelector((state: any) => state.query)

  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      {
        !searchString ?
        <TopPage />
        :
        <SearchResults/>
      }
      <Player />
    </div>
  );
};
export default Top;
