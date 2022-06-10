import { Link } from 'react-router-dom';
import NavBar from '../../commons/NavBar/NavBar';
import m from './Login.module.css'
import LoginForm from './../../commons/LoginForm/LoginForm';

const Login = ()=>{

  return(
    <div>
      <NavBar />
      <div className={m.container_as78}>
        <div className={m.containerform_98ajz}>
          <Link className={m.linkTolanding_h8z6} to='/'>Back</Link>
          <h2 className={m.h2SignUp_f8h3}>Login</h2>
          <LoginForm />
          <button className={m.inputGoogle_7fv8 }> or login with Google </button> 
        </div>
        <div><img src="https://i.pinimg.com/originals/39/ba/5f/39ba5f08327af406e200f3c6d1dff922.jpg" alt="img_signUp" /></div>
      </div>
    </div>
  )
}
export default Login