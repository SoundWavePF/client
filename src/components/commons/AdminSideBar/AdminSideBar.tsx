import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-nbg.png';
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
        <img src={trend} alt="Home" className={document.querySelector('#appSW')?.classList[0]==='light-mode'?styles.img:styles.imgDark}/>
        {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
        </svg> */}
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