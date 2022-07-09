import React, { useState } from 'react'
import style from './Modal.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import * as actionCreator from '../../../redux/actions/action_user'
import { bindActionCreators } from 'redux';
import axios from 'axios';

interface inputs {
    email: any
    oldData?: string
    newData: string
    field: any
}

interface Modal {
    handleModal: any
    header: string
    oldData?: string
    artistName?: string
    description?: string
    label?: string
    contentButton: string
    type: string
    setpass?: string
    inputArtistType?: string
    field?: string
    action?:any
    email?:any
}
const Validate = (input:any,action:any)=>{
    let error:any={};

    if(action == 'password'){
        
    if(!input.oldData ){error.oldData='old password required'}
    if(!input.newData ){error.newData='new password required'}
    }
    if(action == 'username'){

        if(!input.oldData ){error.oldData='old username required'}
        if(!input.newData ){error.newData='new username required'}
        }
  
    return error
  
  }

const Modal = (props: Modal) => {
    const dispatch = useDispatch()
    
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const { sub }: any = user
    
    const { updateUser } = bindActionCreators(actionCreator, dispatch)

    let [input, setInput] = useState<inputs>({
        email: props.email,
        oldData: "",
        newData: "",
        field: props.field
    })

    const [error,setError]= useState<any>()
    const handleOnChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    setError(Validate({...input,[e.target.name]:e.target.value},props.action))
    console.log(error)
    }
    

    function onSubmitHandle(e: any) {
      

        let close={target:{name:'all'}}
       
        if(props.action == 'artist')
        {

            e.preventDefault()

        axios.post('https://api-production-b004.up.railway.app/requestArtistStatus',{email:props.email})
        .then(e=>console.log(e))
        props.handleModal(close)


        }

        else if(props.action == 'disabled')
        {
            e.preventDefault()

        axios.post('https://api-production-b004.up.railway.app/deactivate',{email:props.email})
        .then(e=>console.log(e))
        props.handleModal(close)


        }
        else{
            
        e.preventDefault()
        updateUser(input)
        props.handleModal(close)


        }

    }

    


    return (
        <div className={style.modalContainer}>
            <div className={style.modal}>


                <form className={style.parent} onSubmit={(e) =>  onSubmitHandle(e)  }>
                    <div className={style.header}><h1>{props.header}</h1></div>
                    <div className={style.close}><button onClick={(e) => props.handleModal(e)} name="all">X</button></div>
                    <div className={style.description}><h3>{props.description}</h3></div>
                   <div className={style.container}>
                   
                    <div className={style.div4}>
                        {
                            props.oldData ?
                                <div><label>{props.oldData}</label></div>
                                : null
                        }
                   
                    </div>
                    <div className={error?.oldData?style.errorstyle: style.div5}>
                        {
                            props.oldData ?
                                <input onChange={(e) => handleOnChange(e)} value={input.oldData} name={"oldData"} type={props.type} />
                                : null
                        }
                      
                    </div>
                  
                    <div className={style.div6}><label>{props.label}</label></div>


                {props.action == "artist"  ||  props.action == "disabled" ?null:      <div className={error?.newData?style.errorstyle:style.div7}><input onChange={(e) => handleOnChange(e)} value={input.newData} name={"newData"} type={props.type} /></div>} 
                </div>
                
                
                {error?.oldData? <div className={style.errorText}>{error.oldData} </div>:null }
                {error?.newData? <div className={style.errorText}>{error.newData} </div>:null }
                
               
                
                                   <div className={props.action == "artist"  ||  props.action == "disabled" ?style.buttonSpecial:style.button}><button type='submit'>{props.contentButton}</button></div>
                </form>


            </div>

        </div>

    )
}

export default Modal