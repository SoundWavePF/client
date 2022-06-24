import styles from "./ContentHome.module.css";
import CardContainer from "../CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";

const ContentHome = () => {
  const dispatch = useDispatch();
  const { getGenres, getLastSongs, getChart, getTop } = bindActionCreators(actionCreator,dispatch);
  const { last, genres, chart } = useSelector((state: any) => state.home);
  const top = useSelector((state: any) => state.top);
  
  useEffect(() => {
    if(last.length<1) getLastSongs();
    if(genres.length<1) getGenres();
    if(chart.length<1) getChart();
    if(top.length<1) getTop();
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
          <CardContainer content={genres.slice(0,11).filter((genre:any)=>genre.name!=='Bolero')} />
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
export default ContentHome;
