import styles from "./Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import ContentHome from "../../commons/ContentHome/ContentHome";
import Player from "../../commons/Player/Player";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";

const Home = () => {
  const searchString = useSelector((state: any) => state.query)

  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      {
        !searchString ?
        <ContentHome/>
        :
        <SearchResults/>
      }
      <Player />
    </div>
  );
};
export default Home;
