import styles from "../Artist/Artist.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";
import TopPage from "../../commons/TopPage/TopPage";

const Top = () => {
  const searchString = useSelector((state: any) => state.query)

  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />
      {
        !searchString ?
          <TopPage />
          :
          <SearchResults />
      }
    </div>
  );
};
export default Top;
