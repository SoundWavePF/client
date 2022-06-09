import styles from "./Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import HomeContent from "../../commons/HomeContent/HomeContent";
// import Player from "./components/";

const Home = () => {
  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      <HomeContent/>
      <div>player</div>
    </div>
  );
};
export default Home;
