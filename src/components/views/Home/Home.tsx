import styles from "./Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import ContentHome from "../../commons/ContentHome/ContentHome";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";
import FloatButton from "../../commons/FloatButton/FloatButton";

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
      <FloatButton/>
      
    </div>
  );
};
export default Home;
