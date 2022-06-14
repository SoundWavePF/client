import React from 'react'
import style from './Modal.module.css'

interface Modal {
    handleModal: any
    header: string
    oldData?: string
    description: string
    label: string
    contentButton: string
    type: string
}

const Modal = (props: Modal) => {
    const modalx = { target: { name: "all" } }
    console.log(modalx)
    console.log(props.handleModal)
    return (
        <div className={style.modalContainer}>
            <div className={style.modal}>
                

                    <div className={style.parent}>
                        <div className={style.div1}><h1>{props.header}</h1></div>
                        <div className={style.div2}> <button onClick={() => props.handleModal(modalx)}>X</button></div>
                        <div className={style.div3}><h3>{props.description}</h3></div>
                        <div className={style.div4}>{
                            props.oldData ?
                                <div><label>{props.oldData}</label></div>
                                : null
                        }</div>
                        <div className={style.div5}>{
                            props.oldData ?
                                <input type={props.type} />
                                : null
                        }</div>
                        <div className={style.div6}><label>{props.label}</label></div>
                        <div className={style.div7}><input type={props.type} /></div>
                        <div className={style.div8}><button>{props.contentButton}</button></div>
                    </div>

            </div>
        </div>
    )
}

export default Modal