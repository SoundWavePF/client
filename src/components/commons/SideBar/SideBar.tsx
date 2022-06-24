import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import home from '../../../assets/home.png';
import play from '../../../assets/play.png';
import music from '../../../assets/music.png';
import fire from '../../../assets/fire.png'
import admin from '../../../assets/admin.png'
import styles from './SideBar.module.css';
import * as actionCreator from '../../../redux/actions/action_player';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function SideBar() {
  const dispatch = useDispatch();
  const { setQuery } = bindActionCreators(actionCreator, dispatch)
  const userAdmin = useSelector((state: any) => state.userAdmin)
  function handleClick() {
    setQuery('')
  }
  return (
    <div className={styles.container}>
      <Link to='/home' className={styles.link}>
        <div className={styles.logoContainer}>
          <img src={logo} alt='SoundWave logo' className={styles.logo} />
          <span>SoundWave</span>
        </div>
      </Link>
      <div className={styles.btnContainer}>
        {userAdmin &&
          <Link to='/admin' className={styles.link}>
            <div className={styles.button} onClick={handleClick}>
              <img src={admin} alt="Home" className={styles.img} />
              <span>Admin Panel</span>
            </div>
          </Link>}
        <Link to='/home' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            <img src={home} alt="Home" className={styles.img} />
            <span>Home</span>
          </div>
        </Link>
        <Link to='/top' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            <img src={fire} alt="top10" className={styles.img} />
            <span>Top 10</span>
          </div>
        </Link>
        <Link to='/playlists' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            <img src={play} alt="Play" className={styles.img} />
            <span>Playlists</span>
          </div>
        </Link>
        <Link to='/favorites' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            <img src={music} alt="Music" className={styles.img} />
            <span>My favorites</span>
          </div>
        </Link>
      </div>
    </div>
  )
}