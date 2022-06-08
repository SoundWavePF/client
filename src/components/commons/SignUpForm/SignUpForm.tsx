import { useState } from "react"


const SignUpForm = ()=>{
  const [form, setForm] = useState({
    email:'',
    username: '',
    password:''
  })
  const [error,setError] = useState({
    email:'',
    username: '',
    password:''
  })
  const validateEmail = (value:string):void =>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
      setError({...error,email:''})
    }
    else{
      setError({...error,email:'You have entered an invalid email address!'})
    }
    setForm({...form, email:value})
  }  
  const validateUsername = (value:string):void =>{
    if(value.length<14){
      setError({...error,username:''})
    }
    else{
      setError({...error,username:'Your username must have a maximum of 13 characters'})
    }
    setForm({...form, username:value})
  }
  const validatePassword = (value:string):void =>{
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value)){
      setError({...error,password:''})
    }
    else{
      setError({...error,password:'You have entered an invalid password'})
    }
    setForm({...form, password:value})
  }
  const disabled = ():boolean =>{
    if(!form.email)return true
    if(!form.username)return true
    if(!form.password)return true
    if(error.email)return true
    if(error.username)return true
    if(error.password)return true
    return false
  }
  const onSubmitSignUp = ()=>{
    //e.prevent
  }
  return(
    <div>
      <form onSubmit={(e)=>{onSubmitSignUp()}}>
        <input 
          type="email"
          placeholder="Put your email." 
          name='email' 
          value={form.email}
          onChange={(e)=>validateEmail(e.target.value)}   
      /> <label>{error.email}</label>
      <input
          type="text"
          placeholder="Put your username." 
          name='username' 
          value={form.username}
          onChange={(e)=>validateUsername(e.target.value)}   
      /> <label>{error.username}</label>
      <input
          type="password"
          placeholder="Create a password." 
          name='password' 
          value={form.password}
          onChange={(e)=>validatePassword(e.target.value)}   
      /> <label>{error.password}</label>
      <button disabled={disabled()} type="submit">Register</button>
      </form>
    </div>
  )
}
export default SignUpForm