import { Button, Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Nav as="ul" className={styles.areaNav}>
        <Nav.Item as="li">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <Link to='/' className={styles.areaLogo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.areaButtons}>
        <Link to='/signup' className="btn btn-warning">Sign Up</Link>
        <Link to='/login' className="btn btn-outline-warning">Log In</Link>
      </div>
    </nav>
  );
};
export default NavBar;
