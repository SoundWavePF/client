import { Link } from 'react-router-dom';
import m from './AdminPanel.module.css'
import AdminSideBar from './../../commons/AdminSideBar/AdminSideBar';
import UserCardAdmin from '../../commons/UserCardAdmin/UserCardAdmin';
import { useSelector } from 'react-redux';
import NavAdmin from '../../commons/NavAdmin/NavAdmin';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_admin'
import Error404 from '../error404/error404';


interface user{
  request:boolean,
  id:string,
  type:string,
  username:string,
  email:string,
  songNumber:number
}

const AdminPanel = ()=>{
  const dispatch = useDispatch()
  const {getAllUsers, getStats} = bindActionCreators(actionCreator,dispatch)
  const users = useSelector((state:any)=>state.users)
  const adminOption = useSelector((state:any)=>state.adminOption)
  const pageStats = useSelector((state:any)=>state.pageStats)
  const userAdmin = useSelector((state:any)=>state.userAdmin)
  const {user, isAuthenticated} = useAuth0()
  const ADMIN_EMAIL = user?.email
  console.log(user)
  useEffect(()=>{
    getAllUsers(ADMIN_EMAIL)
    getStats(ADMIN_EMAIL)
  },[])
  if(userAdmin){
    if(adminOption.home===true){
      return(  
        <div>
          <AdminSideBar/>
          <NavAdmin option={true}/>
          <div className={m.containerStats}>
              { pageStats.totalsongs?
                <div className={m.cardContainer}>
                  <div className={m.divRow}>
                    <div>
                      <h2>Total Songs: {pageStats.totalsongs}</h2>
                    </div>
                    <div>
                      <h2>Total Admin Users: {pageStats.totaladminusers}</h2>
                    </div>
                    <div>
                      <h2>Total Regular Users: {pageStats.totalregularusers}</h2>
                    </div>
                  </div>
                  <div className={m.divRow}>
                    <div>
                      <h2>Total Users: {pageStats.totalusers}</h2>
                    </div>
                    <div>
                      <h2>Total Albums: {pageStats.totalalbums}</h2>
                    </div>
                    <div>
                      <h2>Total Artists: {pageStats.totalartists}</h2>
                    </div>
                  </div>
                  <div className={m.divRow}>
                    <div>
                      <h2>Total Genres: {pageStats.totalgenres}</h2>
                    </div>
                    <div>
                      <h2>Total Playlists: {pageStats.totalplaylists}</h2>
                    </div>
                    <div>
                      <h2>Play Count: {pageStats.totalplaycount}</h2>
                    </div>
                  </div>
                </div> 
                :
                <div className={m.container}>
                  <div className={m.sectionLoading}>
                    <div className="spinner-border"  role="status"></div>
                  </div>
                </div>
              }
            <Link className={m.buttonBack} to='/'>Back to Landing</Link>
            </div>
        </div>
      )
    } else {
      return(
        <div>
          <AdminSideBar/>
          <NavAdmin option={false}/>
          <div className={m.containerHeader}>
            <div className={m.type}>type</div>
            <div className={m.request}>request</div>
            <div className={m.id}>id</div>
            <div className={m.username}>username</div>
            <div className={m.email}>email</div>
            <div className={m.account}>account</div>
          </div>
          <div className={m.containerCards}>
            <ul className={m.ul}>
              {users.length>0 && users.map((user:any)=>{
                if(adminOption.user && user.rol==='user'){
                  return <li className={m.li}><UserCardAdmin user={user} admin={ADMIN_EMAIL}/></li>
                }
                if(!adminOption.user && user.rol==='artist'){
                  return <li className={m.li}><UserCardAdmin user={user} admin={ADMIN_EMAIL}/></li>
                }
              }
              )}
            </ul>
            <Link className={m.buttonBack} to='/'>Back to Landing</Link>
          </div>
        </div>
      )
    }
  } else{
    return(
      <Error404 />
    )
  }
}
export default AdminPanel