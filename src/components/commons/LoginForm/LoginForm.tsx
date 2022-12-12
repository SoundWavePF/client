import { useState } from "react"
import m from'./LoginForm.module.css'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAuth from "../../../utils/useAuth";

const LoginForm = ()=>{
  const {login} = useAuth();
  let navigate = useNavigate();
  const [form, setForm] = useState({
    email:'',
    password:''
  })
  const [error,setError] = useState({
    email:'',
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
  const validatePassword = (value:string):void =>{
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value)){
      setError({...error,password:''})
    }
    else{
      setError({...error,password:'Should contain at least one digit, one lower case and one upper case. Should contain at least 8 characters'})
    }
    setForm({...form, password:value})
  }
  const disabled = ():boolean =>{
    if(!form.email)return true
    if(!form.password)return true
    if(error.email)return true
    if(error.password)return true
    return false
  }
  const onSubmitSignUp = async (e:React.FormEvent)=>{
    e.preventDefault()
    Swal.fire({
      title: 'Hold on a moment',
      showConfirmButton: false,
    })
    try{
      const response = await login(form.email, form.password);
      if(response?.success){
        Swal.close()
        navigate("/home", { replace: true });
      } else {
        Swal.close()
        Swal.fire({
          icon:'error',
          title: response?.message,
          timer: 1000,
          showConfirmButton: false,
        })
      }
    } catch (e){
      Swal.close()
      Swal.fire({
        icon:'error',
        title: 'Please verify your data',
        timer: 1000,
        showConfirmButton: false,
      })
    }

  }
  return(
    <div >
      <form className={m.container_w4s5} onSubmit={(e)=>{onSubmitSignUp(e)}}>
        <label className={m.label}>What is your email?</label>
        <input className={error.email.length>0? m.inputFormError : m.inputForm_7fv8} 
          type="email"
          placeholder="Put your email." 
          name='email' 
          value={form.email}
          onChange={(e)=>validateEmail(e.target.value)}   
      /> <label className={m.labelError}>{error.email}</label>
      <label className={m.label}>Put your password.</label>
      <input className={error.password.length>0? m.inputFormError : m.inputForm_7fv8}
          type="password"
          placeholder="Put your password." 
          name='password' 
          value={form.password}
          onChange={(e)=>validatePassword(e.target.value)}   
      /> <label className={m.labelError}>{error.password}</label>
      <button className={m.inputSubmit_yu79}
        disabled={disabled()} type="submit">Login</button>
      </form>
    </div>
  )
}
export default LoginForm