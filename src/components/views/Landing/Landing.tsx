import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

export default function(){
  return(
    <div className={styles.containerBig}>
      <div className={styles.container}>
        <h1>SoundWave</h1>
        <p>Register now on the best platform to play your favorite music</p>
        <div className={styles.button}><Link to='/player' className={styles.button}>Open Player</Link></div>
      </div>
    </div>
  )
}
