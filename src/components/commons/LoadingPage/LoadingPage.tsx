import styles from './LoadingPage.module.css'
import { useMatch  } from 'react-router-dom';
import useAuth from '../../../utils/useAuth';

function LoadingPage() {
  const {googleCallback} = useAuth();
  const match = useMatch('/OAUTH/:token')
  if(match){
    googleCallback(match?.params.token!)
  }

  return (
    <div className={styles.page}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
    </div>
  )
}

export default LoadingPage