import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import home from '../../../assets/home.png';
import play from '../../../assets/play.png';
import music from '../../../assets/music.png';
import fire from '../../../assets/fire.png'
import styles from './SideBar.module.css';
import * as actionCreator from '../../../redux/actions/action_player';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export default function SideBar(){
  const dispatch = useDispatch();
  const { setQuery } = bindActionCreators(actionCreator, dispatch)
  function handleClick(){
    setQuery('')
  }
  return(
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='SoundWave logo' className={styles.logo}/>
        <span>SoundWave</span>
      </div>
      <div className={styles.btnContainer}>
        <Link to='/home' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            <img src={home} alt="Home" className={styles.img} />
            Home
          </div>
        </Link>
        <Link to='/top' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            <img src={fire} alt="top10" className={styles.img}/>
            Top 10
          </div>
        </Link>
        <Link to='/playlists' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            <img src={play} alt="Play" className={styles.img}/>
            Playlists
          </div>
        </Link>
        <Link to='/favorites' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            <img src={music} alt="Music" className={styles.img}/>
            My favorites
          </div>
        </Link>
      </div>
    </div>
  )
}