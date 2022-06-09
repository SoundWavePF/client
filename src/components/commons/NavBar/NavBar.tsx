import { Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";

const NavBar = () => {
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
        <Link to='/signup' className="btn btn-warning">Sign Up</Link>
        <Link to='/login' className="btn btn-outline-warning">Log In</Link>
      </div>
    </div>
  );
};
export default NavBar;
