import { useState } from "react"
import m from'./SignUpForm.module.css'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_settings'
import Swal from 'sweetalert2'

const SignUpForm = ()=>{
  const dispatch = useDispatch()
  const {postSignUp} = bindActionCreators(actionCreator, dispatch)
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
      setError({...error,username:'Your username must have a max of 13 characters'})
    }
    setForm({...form, username:value})
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
    if(!form.username)return true
    if(!form.password)return true
    if(error.email)return true
    if(error.username)return true
    if(error.password)return true
    return false
  }
  const onSubmitSignUp = (e:React.FormEvent)=>{
    e.preventDefault()
    postSignUp(form)
    Swal.fire({
      icon: 'error',
      title: 'Oops... Todavia no hay back',
      text: 'pa la proxima pa!',
      footer: '<a href="https://youtu.be/9itt0OgPUN4?t=13">Mientras tanto escucha este temazo</a>',
      confirmButtonColor: '#ffee32'
    })
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
      <label className={m.label}>Create a nickname</label>
      <input className={error.username.length>0? m.inputFormError : m.inputForm_7fv8}
          type="text"
          placeholder="Put your username." 
          name='username' 
          value={form.username}
          onChange={(e)=>validateUsername(e.target.value)}   
      /> <label className={m.labelError}>{error.username}</label>
      <label className={m.label}>Create a password</label>
      <input className={error.password.length>0? m.inputFormError : m.inputForm_7fv8}
          type="password"
          placeholder="Create a password." 
          name='password' 
          value={form.password}
          onChange={(e)=>validatePassword(e.target.value)}   
      /> <label className={m.labelError}>{error.password}</label>
      <button className={m.inputSubmit_yu79}
        disabled={disabled()} type="submit">Register</button>
      </form>
    </div>
  )
}
export default SignUpForm
