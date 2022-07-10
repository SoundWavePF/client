import { Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";
import MenuUser from "../SearchBar/MenuUser";
import swAnim from "../../../assets/loadinganimation.gif";
import { bindActionCreators } from "redux";
import * as actionUser from '../../../redux/actions/action_user'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';



const LoginButton: React.FunctionComponent = ()=>{
  const {user, loginWithRedirect } = useAuth0()
  return (
  <button className={styles.buttonLogin} onClick={() => loginWithRedirect()}> Login
    <div className={styles.icon}>
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none">
        </path>
        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor">
        </path>
        </svg>
    </div>
  </button>
  )
}

const NavBar = () => {
  const dispatch = useDispatch()
  const { getUserInfo } = bindActionCreators(actionUser,dispatch);
  // const [username, setUsername] = useState('')
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();
  const user_info=useSelector((state:any)=>state.user_info)
  
  const buttonStyle = {
    backgroundColor: 'var(--yellow-light)', 
    border: 'var(--yellow-light)'
  }
  useEffect(()=>{
    getUserInfo(user?.email);
  },[])
  // const useAuth: any = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth
  // const newUser: any = user
  // console.log('user', useAuth0().user)
  // console.log('autenti', useAuth0().isAuthenticated)
  // console.log('loding', useAuth0().isLoading)
  // console.log(useAuth0().user?.picture)
  // const { logout } = useAuth0();
  // useEffect(() => {
  //   const token = localStorage.getItem('sw-token') || '{}';
  //   if (token !== '{}') {
  //     const decoded:any = jwt_decode(token);
  //     setUsername(decoded.username);
  //     console.log(decoded);
  //   } else{
  //     setUsername('Unregistered')
  //   }
  // }, []);

  // import React from 'react';
  // import { useAuth0 } from '@auth0/auth0-react';

  // export const LoginButton = () => {
  // const { loginWithRedirect } = useAuth0();
  // console.log('redirect', loginWithRedirect)
  //     return (<button onClick={() => loginWithRedirect()}>login</button>)
  // }

  return (
    <div className={styles.container}>
      <Nav as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <Link to='/'>
        <img  src={logo} alt="logo" />
      </Link>
      {/* {username === 'Unregistered' &&  */}

      {/* <Link to='/signup' className="btn btn-warning">Sign Up</Link>
    // <Link to='/login' className="btn btn-outline-warning">Log In</Link> */}
      <div>
        {/* <button onClick={() => loginWithRedirect()}className="btn btn-outline-warning" >Log In</button> */}
        {isLoading ? <img src={swAnim} alt={'Loading...'} width={30} height={30}/> : isAuthenticated ? (
                    
                    //<MenuUser username={"username"}/>
                    (<div><img className={styles.picture} src={user_info?.image_avatar} alt={user?.name} /> 
                    <button className="btn btn-warning" style={buttonStyle} onClick={() => logout({ returnTo: window.location.origin })}>Logout</button></div>)
                    )
                    : 
                    <LoginButton/>

        // {

        //   :
        //   <button onClick={() => loginWithRedirect()} className="btn btn-warning" style={buttonStyle}>Log In</button>
        }
      </div>


    </div>
  )
}
export default NavBar;
