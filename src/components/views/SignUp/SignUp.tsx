import { Link } from 'react-router-dom';
import SignUpForm from '../../commons/SignUpForm/SignUpForm';
import m from './SignUp.module.css'
import NavBar from '../../commons/NavBar/NavBar';

const SignUp = ()=>{

  return(
    <div>
      <NavBar />
      <div className={m.container_as78}>
        <div><img src="https://i.pinimg.com/originals/39/ba/5f/39ba5f08327af406e200f3c6d1dff922.jpg" alt="img_signUp" /></div>
        <div className={m.containerform_98ajz}>
          <Link className={m.linkTolanding_h8z6} to='/'>Back</Link>
          <h2 className={m.h2SignUp_f8h3}>Sign up for free to listen.</h2>
          <button className={m.inputGoogle_7fv8 }>Sign Up with Google</button>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
export default SignUp