import React from 'react'
import style from './Modal.module.css'

interface Modal {
    handleModal: any
    header: string
    oldData?: string
    artistName?: string
    description: string
    label: string
    contentButton: string
    type: string
    setpass?: string
    inputArtistType?:string
}

const Modal = (props: Modal) => {
    return (
        <div className={style.modalContainer}>
            <div className={style.modal}>


                <div className={style.parent}>
                    <div className={style.div1}><h1>{props.header}</h1></div>
                    <div className={style.div2}><button onClick={(e) => props.handleModal(e)} name="all">X</button></div>
                    <div className={style.div3}><h3>{props.description}</h3></div>
                    <div className={style.div4}>
                        {
                            props.oldData ?
                                <div><label>{props.oldData}</label></div>
                                : null
                                
                        }
                        {
                            props.artistName ?
                                <div><label>{props.setpass}</label></div>
                                : null
                        }
                    </div>
                    <div className={style.div5}>
                        {
                            props.oldData ?
                                <input type={props.type} />
                                : null
                        }
                        {
                            props.artistName ?
                                <input type={props.inputArtistType} />
                                : null
                        }
                    </div>
                    <div className={style.div6}>
                        {
                            props.artistName ?
                                <div><label>{props.artistName}</label></div>
                                : null
                        }
                    </div>
                    <div className={style.div7}>
                        {
                            props.artistName ?
                                <div><input type={props.type} /></div>
                                : null

                        }
                    </div>
                    <div className={style.div8}><label>{props.label}</label></div>
                    <div className={style.div9}><input type={props.type} /></div>
                    <div className={style.div10}><button>{props.contentButton}</button></div>
                </div>


            </div>

        </div>

    )
}

export default Modal