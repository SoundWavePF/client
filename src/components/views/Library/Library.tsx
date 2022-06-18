import styles from "../Home/Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import { ContainerLibrary } from "../../commons/ContainerLibrary/ContainerLibrary";
import { useSelector, useDispatch } from "react-redux";
import SearchResults from "../SearchResults/SearchResults";



const Library = () => {
  const searchString = useSelector((state: any) => state.query)

  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />
      {
        !searchString ?
          <ContainerLibrary />
          :
          <SearchResults />
      }
    </div>
  );
};
export default Library;
