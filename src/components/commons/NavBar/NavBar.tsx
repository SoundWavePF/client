import { Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [username, setUsername] = useState('');
  const {user, isAuthenticated, loginWithRedirect} = useAuth0();

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
        <div>
          <button className="btn btn-warning">Sign Up</button>
          <button onClick={()=>loginWithRedirect()} className="btn btn-outline-warning">Log In</button>
        </div>


    </div>
  );
};
export default NavBar;
