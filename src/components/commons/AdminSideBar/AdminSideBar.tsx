import { Link } from 'react-router-dom';
import logo from '../../../assets/SW.svg';
import trend from '../../../assets/trend.png';
import music from '../../../assets/music.png';
import styles from './AdminSideBar.module.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_admin'
import AdminButton from './AdminButton';

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
        <Link className={styles.link} to='/home'>
          {/* <img src={logo} alt='SoundWave logo' className={styles.logo}/> */}
          <svg className={styles.svgLogo} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 558.406 1107.061">
            <path id="n" d="M776.1,1186.59l109.8-411.3c17.1,92.7,53.1,263.7,81.9,412.2,17.1,87.3,36,178.2,54.9,273.6l216.9-809.1H1146l-106.2,396c-22.5-113.4-43.2-217.8-62.1-312.3-33.3-160.2-66.6-333-73.8-377.1l-221.4,828h93.6Z" transform="translate(-681.844 -356.219)"/>
          </svg>
          SoundWave
        </Link>
      </div>
      <button value="home" onClick={(e)=>onChange(e)} className={styles.button}>
        {/* <img src={trend} alt="Home" className={document.querySelector('#appSW')?.classList[0]==='light-mode'?styles.img:styles.imgDark}/> */}
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g></svg>
        Statistics
      </button>
      <button value='users' onClick={(e)=>onChange(e)} className={styles.button}>
        {/* <img src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' alt="users" className={styles.img}/> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 17v2H2v-2s0-4 7-4 7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59 5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7z"></path></svg>
        Users List
      </button>
      <button value='artist' onClick={(e)=>onChange(e)} className={styles.button}>
        {/* <img src={music} alt="artist" className={styles.img}/> */}
        <svg focusable="false" height="24" role="img" width="24" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M21 2 8 4v12.9c-.635-.555-1.52-.9-2.5-.9C3.567 16 2 17.343 2 19s1.567 3 3.5 3S9 20.657 9 19V8.846l11-1.692V14.9c-.635-.555-1.52-.9-2.5-.9-1.933 0-3.5 1.343-3.5 3s1.567 3 3.5 3 3.5-1.343 3.5-3V2z"></path></svg>
        Artist List
      </button>
      <div className={styles.darkButton}><AdminButton/></div>
    </div>
  )
}