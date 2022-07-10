import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import NavBar from '../../commons/NavBar/NavBar';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import { useEffect } from 'react';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_player'
import { useDispatch, useSelector } from 'react-redux';

function Wave(){
  return (
    <div className={styles.ocean}>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
    </div>
  )
}

export default function Landing() {
  const { user, isAuthenticated } = useAuth0();
  const email = user?.email;
  const dispatch = useDispatch()
  const { getGenres, getLastSongs, getChart, getTop, getDiscoverSongs } = bindActionCreators(actionCreator,dispatch);
  const { last, genres, chart, discover } = useSelector((state: any) => state.home);
  const top = useSelector((state: any) => state.top);
  
  function userLogin() {
    axios.post("https://api-production-b004.up.railway.app/login/userRegister", {
      name: user?.name,
      username: user?.nickname,
      email: user?.email,
      image: user?.picture,
    })
  }
  useEffect(()=>{
    if(discover.length<1) getDiscoverSongs()
    if(genres.length<1) getGenres();
    if(chart.length<1) getChart();
    if(top.length<1) getTop();
    // if(last.length<1) getLastSongs(email);
  },[])
  if(email !== undefined){
    if(last.length<1) getLastSongs(email);
  }

  return (
    <div className={styles.containerBig}>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.title}>SoundWave</h1>
        {
          user?.nickname?
          <div>
            <p className={styles.p}>{'Welcome to the best wave again '+user?.nickname}</p>
          </div>
          :
          <p className={styles.p}>Sign up now on the best platform the music and let the wave take you to your favorite music</p>
        }
        {/* <div className={styles.button}>
          </div> */}
          {isAuthenticated ? <Link to='/home' className={styles.button} onClick={() => userLogin()}>Open Player</Link> :
            <Link to='/home' className={styles.button}>Open Player</Link>}
      </div>
      <Wave/>
    </div>
  )
}
