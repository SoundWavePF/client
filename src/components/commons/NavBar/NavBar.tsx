import { Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import MenuUser from "../SearchBar/MenuUser";
import swAnim from "../../../assets/loadinganimation.gif";
import { bindActionCreators } from "redux";
import * as actionUser from '../../../redux/actions/action_user'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import useAuth from "../../../utils/useAuth";

//TODO: to login page
const LoginButton: React.FunctionComponent = ()=>{
  return (
    <>
      <Link to='/signup' className={styles.buttonL}>
      <button className={styles.buttonLogin}> Sign Up
        <div className={styles.icon}>
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none">
            </path>
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor">
            </path>
            </svg>
        </div>
      </button>
    </Link>
    <Link to='/login' className={styles.buttonL}>
      <button className={styles.buttonLogin}> Login
        <div className={styles.icon}>
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none">
            </path>
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor">
            </path>
            </svg>
        </div>
      </button>
    </Link>
    </>

  )
}

const NavBar = () => {
  const dispatch = useDispatch()
  const { getUserInfo } = bindActionCreators(actionUser,dispatch);
  // const [username, setUsername] = useState('')
  const { logout, isAuthenticated, user, isLoading } = useAuth();
  const user_info=useSelector((state:any)=>state.user_info)
  
  const buttonStyle = {
    backgroundColor: 'var(--yellow-light)', 
    border: 'var(--yellow-light)'
  }
  useEffect(()=>{
    if(isAuthenticated && user?.email){
      getUserInfo(user?.email);
    }
  },[isAuthenticated, user])

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
      
      <div>
        {isLoading ? <img src={swAnim} alt={'Loading...'} width={30} height={30}/> : isAuthenticated ? (
                    
                    (<div><img className={styles.picture} src={user_info?.image_avatar} alt={user?.name} /> 
                    <button className="btn btn-warning" style={buttonStyle} onClick={() => logout()}>Logout</button></div>)
                    )
                    : 
                    <LoginButton/>
        }
      </div>


    </div>
  )
}
export default NavBar;
