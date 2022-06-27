import { Link } from 'react-router-dom';
import m from './AdminPanel.module.css'
import AdminSideBar from './../../commons/AdminSideBar/AdminSideBar';
import UserCardAdmin from '../../commons/UserCardAdmin/UserCardAdmin';
import { useSelector } from 'react-redux';
import NavAdmin from '../../commons/NavAdmin/NavAdmin';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_admin'
import Error404 from '../error404/error404';
import searchIcon from "../../../assets/search_icon.png";
import AdminStats from './AdminStats';
import LoadingSpinner from '../../commons/LoadingSpinner/LoadingSpinner';


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
  
  const [userSearch, setUserSearch] = useState(users)
  const searchUser = (e:any)=>{
    e.preventDefault()
    if(e.target.value === ''){
      setUserSearch(users)
    } else{
      setUserSearch(users.filter((user:any)=> user.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  }
  

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
          <div>
            <div className={m.inputSearch}>
              <img src={searchIcon} width="20px" />
              <input  onChange={searchUser} placeholder='Put user...' type="text" />
            </div>
            <div className={m.containerCards}>
                <div className={m.containerHeader}>
                  <div className={m.type}>type</div>
                  <div className={m.request}>request</div>
                  <div className={m.id}>id</div>
                  <div className={m.username}>username</div>
                  <div className={m.email}>email</div>
                  <div className={m.account}>account</div>
                </div>
                  {userSearch.length>0 && userSearch.map((user:any)=>{
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