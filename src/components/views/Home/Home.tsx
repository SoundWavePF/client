import styles from "./Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import HomeContent from "../../commons/HomeContent/HomeContent";
import Player from "../../commons/Player/Player";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const searchString = useSelector((state: any) => state.query)
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated){
    console.log(user)
  }
  return (
    <div className={styles.container}>
      <SearchBar/>
      <SideBar/>
      {
        !searchString ?
        <HomeContent/>
        :
        <SearchResults/>
      }
      <Player />
    </div>
  );
};
export default Home;
