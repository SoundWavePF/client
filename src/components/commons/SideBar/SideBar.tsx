import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import home from '../../../assets/home.png';
import play from '../../../assets/play.png';
import music from '../../../assets/music.png';
import styles from './SideBar.module.css';

export default function SideBar(){
  return(
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='SoundWave logo' className={styles.logo}/>
        <span>SoundWave</span>
      </div>
      <div className={styles.btnContainer}>
        <Link to='/home' className={styles.link}>
          <div className={styles.button}>
            <img src={home} alt="Home" className={styles.img}/>
            Home
          </div>
        </Link>
        <Link to='/playlists' className={styles.link}>
          <div className={styles.button}>
            <img src={play} alt="Play" className={styles.img}/>
            Playlists
          </div>
        </Link>
        <Link to='/favorites' className={styles.link}>
          <div className={styles.button}>
            <img src={music} alt="Music" className={styles.img}/>
            My favorites
          </div>
        </Link>
      </div>
    </div>
  )
}