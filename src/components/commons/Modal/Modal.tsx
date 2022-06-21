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

const Modal = (props: Modal) => {
    const dispatch = useDispatch()
    
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const { sub }: any = user
    let miId = sub.slice(6)
    
    const { updateUser } = bindActionCreators(actionCreator, dispatch)

    let [input, setInput] = useState<inputs>({
        email: props.email,
        oldData: "",
        newData: "",
        field: props.field,
    })
    const handleOnChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    function onSubmitHandle(e: any) {
        console.log(input,"input")
     

        if(props.action == 'artist')
        {

            e.preventDefault()

        axios.post('https://www.javierochoa.me/requestArtistStatus',{email:props.email})
        .then(e=>console.log(e))

        }

        else if(props.action == 'disabled')
        {
            e.preventDefault()

        axios.post('https://www.javierochoa.me/deactivate',{email:props.email})
        .then(e=>console.log(e))

        }
        else{
            
        e.preventDefault()
        updateUser(input)

        }

    }

    


    return (
        <div className={style.modalContainer}>
            <div className={style.modal}>


                <form className={style.parent} onSubmit={(e) =>  onSubmitHandle(e)  }>
                    <div className={style.div1}><h1>{props.header}</h1></div>
                    <div className={style.div2}><button onClick={(e) => props.handleModal(e)} name="all">X</button></div>
                    <div className={style.div3}><h3>{props.description}</h3></div>
                    <div className={style.div4}>
                        {
                            props.oldData ?
                                <div><label>{props.oldData}</label></div>
                                : null
                        }
                   
                    </div>
                    <div className={style.div5}>
                        {
                            props.oldData ?
                                <input onChange={(e) => handleOnChange(e)} value={input.oldData} name={"oldData"} type={props.type} />
                                : null
                        }
                      
                    </div>
                    <div className={style.div6}>
                
                    </div>
                    <div className={style.div7}>
                    </div>
                    <div className={style.div8}><label>{props.label}</label></div>
                {props.action == "artist"  ||  props.action == "disabled" ?null:      <div className={style.div9}><input onChange={(e) => handleOnChange(e)} value={input.newData} name={"newData"} type={props.type} /></div>}                    <div className={style.div10}><button type='submit'>{props.contentButton}</button></div>
                </form>


            </div>

        </div>

    )
}

export default Modal