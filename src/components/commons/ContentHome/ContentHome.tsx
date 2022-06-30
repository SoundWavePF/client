import styles from "./ContentHome.module.css";
import CardContainer from "../CardContainer/CardContainer";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";
import { useAuth0 } from "@auth0/auth0-react";

const ContentHome = () => {
  const { user } = useAuth0();
  const email = user?.email;
  const dispatch = useDispatch();
  const { getGenres, getLastSongs, getChart, getTop, getDiscoverSongs } = bindActionCreators(actionCreator,dispatch);
  const { last, genres, chart, discover, isLoading } = useSelector((state: any) => state.home);
  const top = useSelector((state: any) => state.top);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)
  
  useEffect(() => {
    if(discover.length<1) getDiscoverSongs()
    if(genres.length<1) getGenres();
    if(chart.length<1) getChart();
    if(top.length<1) getTop();

    window.addEventListener('resize', ()=>{
      setWindowSize(window.innerWidth);
    })
  }, []);

  useEffect(() => {
    if(email !== undefined) {
      getLastSongs(email);
      console.log('ss');
    };
  }, [email]);

  useEffect(()=>{
    if(email !== undefined){
      getLastSongs(email);
    }
    return
  },[])
  
  return (
    (email && isLoading) || !discover.length? <LoadingSpinner/> : 
    <div className={styles.container}>
      { discover.length > 0 &&
        <div className={styles.section}>
          <h1>Discover</h1>
          <CardContainer content={discover.slice()}  slides={true}/>
        </div>
      }
      { genres.length > 0 &&
        <div className={styles.section}>
          <h1>Genres</h1>
          <CardContainer content={genres.slice(0,11).filter((genre:any)=>genre.name!=='Bolero')} slides={windowSize <= 390}/>
        </div>
      }
      { chart.length > 0 &&
        <div className={styles.section}>
          <h1>Most popular</h1>
          <CardContainer content={chart.slice(11)} slides={true}/>
        </div>
      }
      { last?.length > 0 && last[0] &&
        <div className={styles.section}>
          <h1>Recently played</h1>
          <CardContainer content={last} slides={true}/>
        </div>
      }
    </div>
  );
};
export default ContentHome;
