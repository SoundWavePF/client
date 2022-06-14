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
  const { last, genres, chart } = useSelector((state: any) => state.home);

  useEffect(() => {
    getGenres();
    getLastSongs();
    getChart();
  }, []);

  return (
    <div className={styles.container}>
      { last.length > 0 &&
        <div className={styles.section}>
          <h1>Recently played</h1>
          <CardContainer content={last.slice(0, 5)} />
        </div>
      }
      { genres.length > 0 &&
        <div className={styles.section}>
          <h1>Genres</h1>
          <CardContainer content={genres} />
        </div>
      }
      { chart.length > 0 &&
        <div className={styles.section}>
          <h1>Most popular</h1>
          <CardContainer content={chart.slice(0, 5)} />
        </div>
      }
    </div>
  );
};
export default HomeContent;
