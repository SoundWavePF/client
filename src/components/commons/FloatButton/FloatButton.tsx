import React, { useState } from 'react'
import FileUpload from '../../views/FileUpload/FileUpload'
import style from './FloatButton.module.css'
const FloatButton = () => {


    const [modal, setModal]: any = useState({
        modalOptions: false,

    })

    let handleModal: any = (e: any) => {


        switch (e.target.name) {

            case "modalOptions":
                return setModal({
                    ...modal,
                    modalOptions: !modal.modalOptions
                })

            case "all":
                return setModal({
                    modalOptions: false,
                })

            default:
                return modal
        }
    }



    return (
        <div>
            <button className={style.buttonOpenModal} onClick={(e) => handleModal(e)} name='modalOptions' />
            <img className={style.firstBackground} src="https://images.unsplash.com/photo-1602250829481-12309c45eb63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <div className={style.secondBackground} />
            {
                modal.modalOptions === true ?
                    <div className={style.containerCreates}>
                        <div className={style.modalExistingAlbum}>
                            <FileUpload />
                            <button className={style.buttonClose} onClick={(e) => handleModal(e)} name='all'>x</button>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default FloatButton