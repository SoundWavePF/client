import React, { useState } from 'react'
import style from './FormUploadSong.module.css'
import * as actionCreator from '../../../redux/actions/action_artist'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';


const FormUploadSong = (props: any) => {

    const [deletee, setDeletee]: any = useState({
        deleteSong: false,
    })

    let handleDelete: any = (e: any) => {

        switch (e.target.name) {

            case "deleteSong":
                return setDeletee({
                    ...deletee,
                    deleteSong: !deletee.deleteSong
                })

            default:
                return deletee

        }
    }

    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const { email }: any = user

    const dispatch = useDispatch()
    const { uploadSong } = bindActionCreators(actionCreator, dispatch)
    const [image, setImage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const [music, setMusic]: any = React.useState({
        userEmail: email,
        songName: "",
        image: "",
        preview: props.url,
        duration: props.duration
    })

    const handleOnChange = (e: any) => {
        setMusic({
            ...music,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandle = (e: any) => {
        e.preventDefault()
        if ( music.songName.length < 1 ){
            Swal.fire({
                icon: 'error',
                title: 'Please, set a song name',
              })
        }
        else if ( music.image.length < 1 ){
            Swal.fire({
                icon: 'error',
                title: 'Please, set a song image',
              })
        }
        else
        Swal.fire({
            icon: 'success',
            title: 'Song upload!',
            
          })
        uploadSong(music)
        e.target.reset()
    }



    const uploadImage = async (e: any) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "songImage");
        setLoading(true);

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/jonathanhortman/image/upload",
            {
                method: "POST",
                body: data
            }
        );

        const file = await res.json();
        setImage(file.secure_url);
        setLoading(false);
        music.image = file.secure_url
    };



    return (
        <div className={style.container}>
            {
                deletee.deleteSong === false ?
                    <form className={style.formCont} >
                        <label>Song name: </label>
                        <input type="text" name='songName' onChange={(e) => handleOnChange(e)} />
                        <label className={style.laberImage} >Image: </label>
                        <input
                            type="file"
                            name="file"
                            onChange={(e) => uploadImage(e)}
                            multiple
                        />
                        <div className={style.sendButtonContainer}>
                            <audio className={style.reproductor} src={props.url} controls></audio>
                            <button className={style.sendButton} onClick={(e) => onSubmitHandle(e)}></button>
                            <button onClick={(e) => handleDelete(e)} name='deleteSong' className={style.trash}>delete</button>
                        </div>
                    </form>
                    : null
            }
        </div>
    )
}

export default FormUploadSong