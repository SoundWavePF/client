import { GoogleLogin } from 'react-google-login';

const SignUp = ()=>{
  const responseGoogle = (response:any)=>{
    console.log(response)
  }
  return(
    <div>
      <div><img src="https://i.pinimg.com/originals/39/ba/5f/39ba5f08327af406e200f3c6d1dff922.jpg" alt="img_signUp" /></div>
      <div>
        <h2>Sign up for free to listen.</h2>
        <button>Sign Up with Facebook?</button>
        <GoogleLogin
          clientId="436078684823-tdtk9tntpl5cmpqj7an47rtoq6h0q652.apps.googleusercontent.com"
          buttonText="Login"
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign Up with Google</button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <hr />
      </div>
    </div>
  )
}
export default SignUp