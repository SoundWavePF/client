import React, { useState } from 'react'
import style from './FloatButton.module.css'
const FloatButton = () => {


    const [modal, setModal]: any = useState({
        modalOptions: false,
        existingAlbum: false,
        createAlbum: false
    })

    let handleModal: any = (e: any) => {


        switch (e.target.name) {

            case "modalOptions":
                return setModal({
                    ...modal,
                    modalOptions: !modal.modalOptions
                })
            case "existingAlbum":
                return setModal({
                    ...modal,
                    existingAlbum: !modal.existingAlbum,
                    modalOptions: false,
                })
            case "createAlbum":
                return setModal({
                    ...modal,
                    createAlbum: !modal.createAlbum,
                    modalOptions: false,
                })
            case "all":
                return setModal({
                    modalOptions: false,
                    existingAlbum: false,
                    createAlbum: false
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
                    <div className={style.modalContainer}>
                        <div className={style.titleModal}>
                            Upload Music
                        </div>
                        <div className={style.buttonsContainer}>

                            <button onClick={(e) => handleModal(e)} name='existingAlbum'>Existing album</button>

                            <button onClick={(e) => handleModal(e)} name='createAlbum'>Create new album</button>
                        </div>
                    </div>
                    : null
            }


            {
                modal.existingAlbum === true ?

                    <div className={style.containerCreates}>
                        <div className={style.modalExistingAlbum}>
                            <button className={style.buttonClose} onClick={(e) => handleModal(e)} name='all'>x</button>
                        </div>
                    </div>
                    : null
                }

            {
                modal.createAlbum === true ?
                
                <div className={style.containerCreates}>
                        <div className={style.modalCreateAlbum}>
                        <button className={style.buttonClose} onClick={(e) => handleModal(e)} name='all'>x</button>

                        </div>
                    </div>
                    : null
            }


        </div>
    )
}

export default FloatButton