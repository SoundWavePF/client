import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import SignUpForm from '../../commons/SignUpForm/SignUpForm';
import * as b from "react-bootstrap";
import m from './SignUp.module.css'

const SignUp = ()=>{
  
  const responseGoogle = (response:any)=>{
    console.log(response)
  }
  return(
    <div className={m.container_as78}>
      <div><img src="https://i.pinimg.com/originals/39/ba/5f/39ba5f08327af406e200f3c6d1dff922.jpg" alt="img_signUp" /></div>
      <div className={m.containerform_98ajz}>
        <Link className={m.linkTolanding_h8z6} to='/'>back to landing</Link>
        <h2 className={m.h2SignUp_f8h3}>Sign up for free to listen.</h2>
        <GoogleLogin
          clientId="436078684823-tdtk9tntpl5cmpqj7an47rtoq6h0q652.apps.googleusercontent.com"
          buttonText="Login"
          render={renderProps => (
            <button className={m.inputGoogle_7fv8 } onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign Up with Google</button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <SignUpForm />
      </div>
    </div>
  )
}
export default SignUp