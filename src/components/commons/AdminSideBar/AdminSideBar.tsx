import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import home from '../../../assets/home.png';
import music from '../../../assets/music.png';
import styles from './AdminSideBar.module.css';
import { useDispatch } from 'react-redux';
import { changeAdminOption } from '../../../redux/actions';

export default function AdminSideBar(){
  const dispatch = useDispatch()
  const onChange = (e:any)=>{ //React.MouseEvent<HTMLButtonElement, MouseEvent>
    let value = e.target.value
    if(value==='home'){
    //  dispatch(changeAdminOption({home:true,user:false}))
    }
    if(value==='users'){
    //  dispatch(changeAdminOption({home:false,user:true}))
    }
    if(value==='artist'){
    //  dispatch(changeAdminOption({home:false,user:false}))
    }
  }
  return(
    <div className={styles.container}>
      <div className={styles.logoContainer}>
      <Link className={styles.link} to='/home'><img src={logo} alt='SoundWave logo' className={styles.logo}/></Link>
        <span>SoundWave</span>
      </div>
      <div className={styles.btnContainer}>
        <button value="home" onClick={(e)=>onChange(e)} className={styles.button}>
          <img src={home} alt="Home" className={styles.img}/>
          Home
        </button>
        <button value='users' onClick={(e)=>onChange(e)} className={styles.button}>
          <img src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' alt="users" className={styles.img}/>
          Users
        </button>
        <button value='artist' onClick={(e)=>onChange(e)} className={styles.button}>
          <img src={music} alt="artist" className={styles.img}/>
          Artist
        </button>
      </div>
    </div>
  )
}