import styles from "./HomeContent.module.css";
import CardContainer from "../CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";

const HomeContent = () => {
  const dispatch = useDispatch();
  const { getGenres, getLastSongs, getChart } = bindActionCreators(
    actionCreator,
    dispatch
  );
  const stateGenres = useSelector((state: any) => state.home.genres);
  const stateChart = useSelector((state: any) => state.home.chart);
  const stateLast = useSelector((state: any) => state.home.last);

  useEffect(() => {
    getGenres();
    getLastSongs();
    getChart();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Recently played</h1>
        <CardContainer content={stateLast.slice(0, 5)} />
      </div>
      <div className={styles.section}>
        <h1>Genres</h1>
        <CardContainer content={stateGenres} />
      </div>
      <div className={styles.section}>
        <h1>Most popular</h1>
        <CardContainer content={stateChart.slice(0, 5)} />
      </div>
    </div>
  );
};
export default HomeContent;
