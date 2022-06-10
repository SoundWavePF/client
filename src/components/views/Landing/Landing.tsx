import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import NavBar from '../../commons/NavBar/NavBar';

export default function Landing(){
  return(
    <div className={styles.containerBig}>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.title}>SoundWave</h1>
        <p className={styles.p}>Sign up now on the best platform to play and share your favorite music</p>
        <div className={styles.button}>
          <Link to='/home' className={styles.button} >Open Player</Link>
        </div>
      </div>
    </div>
  )
}
