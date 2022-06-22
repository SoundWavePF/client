import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import NavBar from '../../commons/NavBar/NavBar';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'

export default function Landing() {

  const { user, isAuthenticated } = useAuth0()

  function userLogin() {
    axios.post("https://www.javierochoa.me/login/userRegister", {
      name: user?.name,
      username: user?.nickname,
      email: user?.email,
      image: user?.picture,
    })
  }



  return (
    <div className={styles.containerBig}>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.title}>SoundWave</h1>
        {
          user?.nickname?
          <div>
            <p className={styles.p}>{'Welcome again '+user?.nickname}</p>
          </div>
          :
          <p className={styles.p}>Sign up now on the best platform to play and share your favorite music</p>
        }
        <div className={styles.button}>
          {isAuthenticated ? <Link to='/home' className={styles.button} onClick={() => userLogin()}>Open Player</Link> :
            <Link to='/home' className={styles.button}>Open Player</Link>}
        </div>
      </div>
    </div>
  )
}
