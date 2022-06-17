import styles from "../Home/Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import { ContainerLibrary } from "../../commons/ContainerLibrary/ContainerLibrary";


const Library = () => {

  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />
      <ContainerLibrary />
    </div>
  );
};
export default Library;
