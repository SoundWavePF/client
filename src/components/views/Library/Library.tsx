import styles from "../Home/Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import { ContainerLibrary } from "../../commons/ContainerLibrary/ContainerLibrary";
//import { useLocation } from "react-router";

const Library = () => {
  //const location =useLocation()
  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      <ContainerLibrary/>
    </div>
  );
};
export default Library;
