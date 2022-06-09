import styles from "./HomeContent.module.css";
import CardContainer from "../CardContainer/CardContainer";
//import genres from './genres.json'
import albums from './albums.json'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions'

const HomeContent = () => {
  const dispatch = useDispatch();
  const  { getMusic } = bindActionCreators(actionCreator,dispatch);
  const stateGenres = useSelector((state: any) => state.genres);

  useEffect(()=>{
    //getMusic();
  },[])

  const stateTest = () => {
    getMusic();
  }
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Recently played</h1>
      </div>
      <div className={styles.section}>
        <h1>Your favourites</h1>
        <CardContainer content={albums.data}/>
      </div>
      <div className={styles.section}>
        <h1>Genres</h1>
        {
          stateGenres.length > 0 && <CardContainer content={stateGenres}/>
        }
      </div>
      <button onClick={stateTest}>test state</button>
    </div>
  );
};
export default HomeContent;
