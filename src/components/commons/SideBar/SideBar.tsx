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
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

export default function SideBar() {
  const { isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const { setQuery } = bindActionCreators(actionCreator, dispatch)
  const userAdmin = useSelector((state: any) => state.userAdmin)
  function handleClick() {
    setQuery('')
  }
  return (
    <div className={styles.container}>
        <Link to='/home' className={styles.linkLogo}>
          <div className={styles.logoContainer}>
            <img src={logo} alt='SoundWave logo' className={styles.logo} />
            <span>SoundWave</span>
          </div>
        </Link>
      <div className={styles.btnContainer}>
        {
          userAdmin &&
          <Link to='/admin' className={styles.link}>
            <div className={styles.button} onClick={handleClick}>
              {/* <img src={admin} alt="Home" className={styles.img} /> */}
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
              </svg>
              Admin Panel
            </div>
          </Link>}
        <Link to='/home' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            {/* <img src={home} alt="Home" className={styles.img} /> */}
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M4,10V21h6V15h4v6h6V10L12,3Z" ></path></g></svg>
            Home
          </div>
        </Link>
        <Link to='/top' className={styles.link}>
          <div className={styles.button} onClick={handleClick}>
            {/* <img src={fire} alt="top10" className={styles.img} /> */}
            <svg viewBox="0 0 17 26"><path d="M4 3c2.95 1 6.84 8.93 6.84 8.93a8.361 8.361 0 0 0 1-5.43A15.928 15.928 0 0 1 17 18c-.12 7-8.85 8.05-8.85 8.05a4.63 4.63 0 0 0 1.76-2.87c.29-1.8-2.58-3.8-2.58-3.8-2.48 4.15-1.07 6.67-1.07 6.67S0 23.1 0 19.24c0-3.86 4.22-7.75 4.62-10.79A12.25 12.25 0 0 0 4 3zm2.58 5.51h-.02v.17A13.89 13.89 0 0 1 4.23 14C3.13 15.77 2 17.65 2 19.25c0 1 .88 2.07 2 3a12.38 12.38 0 0 1 1.62-3.9l1.1-1.84 1.84 1.2c.59.45 3.29 2.48 3.44 5a5.47 5.47 0 0 0 3-4.78 12.81 12.81 0 0 0-1.73-6.37c-.19.5-.426.98-.7 1.44l-1.89 3.1-1.62-3.29a39.714 39.714 0 0 0-2.48-4.3z"></path></svg>
            Top 10
          </div>
        </Link>
        <Link to={isAuthenticated ? '/playlists' : ''} className={styles.link}>
          <div className={isAuthenticated ?  styles.button : styles.buttonDis} onClick={handleClick}>
            {/* <img src={play} alt="Play" className={styles.img} /> */}
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z" ></path></g></svg>
            Playlists
          </div>
        </Link>
        <Link to={isAuthenticated ? '/favorites' : ''} className={styles.link}>
          <div className={isAuthenticated ?  styles.button : styles.buttonDis} onClick={handleClick}>
            {/* <img src={music} alt="Music" className={styles.img} /> */}
            <svg focusable="false" height="24" role="img" width="24" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M21 2 8 4v12.9c-.635-.555-1.52-.9-2.5-.9C3.567 16 2 17.343 2 19s1.567 3 3.5 3S9 20.657 9 19V8.846l11-1.692V14.9c-.635-.555-1.52-.9-2.5-.9-1.933 0-3.5 1.343-3.5 3s1.567 3 3.5 3 3.5-1.343 3.5-3V2z"></path></svg>
            My favorites
          </div>
        </Link>
        {!isLoading && !isAuthenticated && <p className={styles.signUp}>Sign up on Soundwave to enjoy all the features</p>}
      </div>
    </div>
  )
}