import { Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";
import MenuUser from "../SearchBar/MenuUser";
import swAnim from "../../../assets/loadinganimation.gif";


const NavBar = () => {
  // const [username, setUsername] = useState('')
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();
  const buttonStyle = {
    backgroundColor: 'var(--yellow-light)', 
    border: 'var(--yellow-light)'
  }
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
                    (<div><img className={styles.picture} src={user?.picture} alt={user?.name} /> 
                    <button className="btn btn-warning" style={buttonStyle} onClick={() => logout({ returnTo: window.location.origin })}>Logout</button></div>)
                    )
                    : 
                    <button onClick={() => loginWithRedirect()} className="btn btn-warning" style={buttonStyle}>Log In</button>

        // {

        //   :
        //   <button onClick={() => loginWithRedirect()} className="btn btn-warning" style={buttonStyle}>Log In</button>
        }
      </div>


    </div>
  )
}
export default NavBar;
