import styles from "./Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import ContentHome from "../../commons/ContentHome/ContentHome";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actionCreator from "../../../redux/actions/action_player";
import { bindActionCreators } from "redux";

const Home = () => {
  const searchString = useSelector((state: any) => state.query)
  const dispatch = useDispatch();
  const { setQuery } = bindActionCreators(actionCreator, dispatch)
  useEffect(() => {
    setQuery('')
  }, [])
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
    </div>
  );
};
export default Home;
