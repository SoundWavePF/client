import styles from "../Artist/Artist.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import ContentHome from "../../commons/ContentHome/ContentHome";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";
import useAuth from "../../../utils/useAuth";

const Home = () => {
  const searchString = useSelector((state: any) => state.query);
  const {isAuthenticated} = useAuth();
  
  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />
      {!searchString ? <ContentHome /> : <SearchResults />}
    </div>
  );
};
export default Home;
