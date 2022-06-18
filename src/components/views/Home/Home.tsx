import styles from "./Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import ContentHome from "../../commons/ContentHome/ContentHome";
import SearchResults from "../SearchResults/SearchResults";


import FloatButton from "../../commons/FloatButton/FloatButton";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionCreator2 from "../../../redux/actions/action_user";
import { bindActionCreators } from "redux";
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {
  const searchString = useSelector((state: any) => state.query)
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();
  const email: string | undefined = user?.email;
  const { setQuery } = bindActionCreators(actionCreator, dispatch)
  const { getLibrary } = bindActionCreators(actionCreator2, dispatch)
  useEffect(() => {
    if (email) getLibrary(email)
  }, [isLoading])
  useEffect(() => {
    setQuery('')
  }, [])
  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />
      {
        !searchString ?
          <ContentHome />
          :
          <SearchResults />
      }
      <FloatButton />

    </div>
  );
};
export default Home;
