import React from 'react'
import style from './FormUploadSong.module.css'
import * as actionCreator from '../../../redux/actions/action_artist'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const FormUploadSong = () => {
    const dispatch = useDispatch()
    const { uploadSong } = bindActionCreators(actionCreator, dispatch)

    const [music, setMusic]: any = React.useState({
        name: "",
        image: ""
    })

    const handleOnChange = (e: any) => {
        setMusic({
            ...music,
            [e.target.name]: e.target.value
        })
    }



    return (

        <form className={style.formCont}>
            <label>Song name: </label>
            <input type="text" name='name' onChange={(e) => handleOnChange(e)} />
            <label>Image: </label>
            <input type="text" name='image' onChange={(e) => handleOnChange(e)} />
        </form>

    )
}

export default FormUploadSong