import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import NavBar from '../../commons/NavBar/NavBar';
import m from './Login.module.css'
import LoginForm from './../../commons/LoginForm/LoginForm';

const Login = ()=>{
  
  const responseGoogle = (response:any)=>{
    console.log(response)
  }
  return(
    <div>
      <NavBar />
      <div className={m.container_as78}>
        <div className={m.containerform_98ajz}>
          <Link className={m.linkTolanding_h8z6} to='/'>Back</Link>
          <h2 className={m.h2SignUp_f8h3}>Login</h2>
          <LoginForm />
          <GoogleLogin
            clientId="436078684823-tdtk9tntpl5cmpqj7an47rtoq6h0q652.apps.googleusercontent.com"
            buttonText="Login"
            render={renderProps => (
              <button className={m.inputGoogle_7fv8 } onClick={renderProps.onClick} disabled={renderProps.disabled}>or login with Google</button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
          />
        </div>
        <div><img src="https://i.pinimg.com/originals/39/ba/5f/39ba5f08327af406e200f3c6d1dff922.jpg" alt="img_signUp" /></div>
      </div>
    </div>
  )
}
export default Login