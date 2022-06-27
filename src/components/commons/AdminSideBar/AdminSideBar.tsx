import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import trend from '../../../assets/trend.png';
import music from '../../../assets/music.png';
import styles from './AdminSideBar.module.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_admin'

export default function AdminSideBar(){
  const dispatch = useDispatch()
  const {changeAdminOption} = bindActionCreators(actionCreator,dispatch)

  const onChange = (e:any)=>{
    let value = e.target.value
    if(value==='home')changeAdminOption({home:true,user:false})
    if(value==='users')changeAdminOption({home:false,user:true})
    if(value==='artist')changeAdminOption({home:false,user:false})
  }
  return(
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link className={styles.link} to='/home'><img src={logo} alt='SoundWave logo' className={styles.logo}/></Link>
        SoundWave
      </div>
      <button value="home" onClick={(e)=>onChange(e)} className={styles.button}>
        <img src={trend} alt="Home" className={styles.img}/>
        Statistics
      </button>
      <button value='users' onClick={(e)=>onChange(e)} className={styles.button}>
        <img src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' alt="users" className={styles.img}/>
        Users List
      </button>
      <button value='artist' onClick={(e)=>onChange(e)} className={styles.button}>
        <img src={music} alt="artist" className={styles.img}/>
        Artist List
      </button>
    </div>
  )
}