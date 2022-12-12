import { Link } from 'react-router-dom';
import m from './AdminPanel.module.css'
import AdminSideBar from './../../commons/AdminSideBar/AdminSideBar';
import UserCardAdmin from '../../commons/UserCardAdmin/UserCardAdmin';
import { useSelector } from 'react-redux';
import NavAdmin from '../../commons/NavAdmin/NavAdmin';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_admin'
import Error404 from '../error404/error404';
import AdminStats from './AdminStats';
import LoadingSpinner from '../../commons/LoadingSpinner/LoadingSpinner';
import useAuth from '../../../utils/useAuth';

const AdminPanel = ()=>{
  const dispatch = useDispatch()
  const [option, setOption] = useState<string>('aproved')
  const {getAllUsers, getStats} = bindActionCreators(actionCreator,dispatch)
  const users = useSelector((state:any)=>state.users)
  
  const adminOption = useSelector((state:any)=>state.adminOption)
  const pageStats = useSelector((state:any)=>state.pageStats)
  const userAdmin = useSelector((state:any)=>state.userAdmin)
  const {user, isAuthenticated} = useAuth()
  const ADMIN_EMAIL = user?.email
  
  const [userSearch, setUserSearch] = useState(users)
  const searchUser = (e:any)=>{
    e.preventDefault()
    if(e.target.value === ''){
      setUserSearch(users)
    } else{
      setUserSearch(users.filter((user:any)=> user.username.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  }
  
  useEffect(()=>{
    setUserSearch(users)
  },[users])
  useEffect(()=>{
    getAllUsers(ADMIN_EMAIL)
    getStats(ADMIN_EMAIL)
  },[])
  if(userAdmin){
    if(adminOption.home===true){
      return(  
        <div className={m.container}>
          <NavAdmin option={true}/>
          <AdminSideBar/>
          <div></div>
          <div>
            <div className={m.containerStats}>
                { 
                  pageStats.totalsongs?
                  <AdminStats pageStats={pageStats} /> 
                  :
                  <LoadingSpinner/>
                }
              <Link className={m.buttonBack} to='/'>Back to Landing</Link>
              </div>
          </div>
          
        </div>
        
      )
    } else {
      return(
        <div className={m.container}>
          <NavAdmin option={false}/>
          <AdminSideBar/>
          <div className={m.inputSearch}>
            {/* <img src={searchIcon} width="20px" /> */}
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" ></path></g></svg>
            <input  onChange={searchUser} placeholder='Put user...' type="text" />
          </div>
          <div>
            <div className={m.containerCards}>
                <div className={m.containerHeader}>
                  <div className={m.type}>type</div>
                  <div className={m.request}>request</div>
                  <div className={m.id}>id</div>
                  <div className={m.username}>username</div>
                  <div className={m.email}>email</div>
                  <div className={m.account}>account</div>
                </div>
                  {
                  userSearch.length>0 && userSearch.map((user:any)=>{
                    if(adminOption.user && user.rol==='user'){
                      return <UserCardAdmin user={user} admin={ADMIN_EMAIL}/>
                    }
                    if(!adminOption.user && user.rol==='artist'){
                      return <UserCardAdmin user={user} admin={ADMIN_EMAIL}/>
                    }
                  }
                  )}
              <Link className={m.buttonBack} to='/'>Back to Landing</Link>
            </div>
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