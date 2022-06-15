import { Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [username, setUsername] = useState('')
  const {user, isAuthenticated, loginWithRedirect} = useAuth0();

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

  return (
    <div className={styles.container}>
      <Nav as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      {/* {username === 'Unregistered' &&  */}
        
            {/* <Link to='/signup' className="btn btn-warning">Sign Up</Link>
            <Link to='/login' className="btn btn-outline-warning">Log In</Link> */}
            <button onClick={()=>loginWithRedirect()} className="btn btn-outline-warning" >Log In</button>
        
    

    </div>
  );
};
export default NavBar;
