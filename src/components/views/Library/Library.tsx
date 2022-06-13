import styles from "../Home/Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import { ContainerLibrary } from "../../commons/ContainerLibrary/ContainerLibrary";
import Player from "../../commons/Player/Player";
import { useLocation } from "react-router";
// import Player from "./components/";


const Library = () => {
  const location =useLocation()
  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      <ContainerLibrary/>
      <Player />
    </div>
  );
};
export default Library;
