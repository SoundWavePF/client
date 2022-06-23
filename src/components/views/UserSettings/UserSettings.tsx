import Modal from "../../commons/Modal/Modal";
// import styles from "../Home/Home.module.css";
import StylesC from "./UserSettingContainer.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import style from './UserSettings.module.css'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import * as actionCreator from '../../../redux/actions/action_user'
import { bindActionCreators } from 'redux';
import { useSelector } from "react-redux";
import Player from "../../commons/Player/Player";
import axios from "axios";

interface inputs {
  email: any
  oldData: string
  newData: string
  field: any
}



const UserSettings = () => {

  const [image,setImage]:any= useState()
  const [InfoUser,setInfoUser]:any= useState()
  const {user_info}=useSelector((state:any)=>state)

  const dispatch = useDispatch()
  const { updateUser ,getUserInfo} = bindActionCreators(actionCreator, dispatch)
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  let [input, setInput] = useState<inputs>({
    email: user?.email,
    oldData:  user_info.image_avatar,
    newData: '',
    field: "avatar",
  })

  useEffect( () => {

    getUserInfo(user?.email)

    setInfoUser(user_info)

  },[])

  const uploadImage = async (e:any) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "songImage");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/jonathanhortman/image/upload",
      {
        method: "POST",
        body: data
      }
    );


    const file = await res.json();
    setImage(file.secure_url);
  
    setInput({...input,
      newData:file.secure_url
    })

    const ress = await axios.post(
      "https://www.javierochoa.me/update",input
      
    )
    
    
  };




  function onSubmitHandle(e: any) {
    e.preventDefault()
    updateUser(input)
  
  }



  const [modal, setModal]: any = useState({
    modalArtist: false,
    modalEmail: false,
    modalPassword: false,
    modalUsername: false,
    modalDelete: false
  })



  let handleModal: any = (e: any) => {


    switch (e.target.name) {

      case "modalArtist":
        return setModal({
          ...modal,
          modalArtist: !modal.modalArtist
        })
      case "modalEmail":
        return setModal({
          ...modal,
          modalEmail: !modal.modalEmail
        })
      case "modalPassword":
        return setModal({
          ...modal,
          modalPassword: !modal.modalPassword
        })
      case "modalUsername":
        return setModal({
          ...modal,
          modalUsername: !modal.modalUsername
        })
      case "modalDelete":
        return setModal({
          ...modal,
          modalDelete: !modal.modalDelete
        })
      case "all":

        return setModal({
          ...modal,
          modalArtist: false,
          modalDelete: false,
          modalUsername: false,
          modalPassword: false,
          modalEmail: false
        })

      default:
        return modal

    }
  }




  return (
    <div className={StylesC.container}>
      <SearchBar />
      <SideBar />

      <div className={style.page}>
        <div className={style.container}>

          <form className={style.father} onSubmit={(e) => onSubmitHandle(e)}>
            <img src={user_info.image_avatar} alt="image" className={style.userImage} />
            <input type="file" onChange={uploadImage}  className={style.input} />
          <button className={style.button} type='submit'>Send</button>
          </form>


          <div className={style.contentContainer}>

            <div className={style.title} ><p>My status</p></div>
            <hr></hr>
            <div className={style.subscriptionContainer}>
              <div>{`${user_info?.username} Currently you are an user`}</div>

              <button onClick={(e) => handleModal(e)} name='modalArtist' className={style.buttons}>
                Request to be an artist
              </button>
            </div>

            <br />

            <div className={style.title} ><p>Log in</p></div>

            <hr></hr>

            <div className={style.parent}>
              <div className={style.div4}><label>Password:</label></div>
              <div className={style.div5}><input  placeholder={'*****'} disabled={true} name="password" type="text" /></div>
              <div className={style.div6}><button onClick={(e) => handleModal(e)} name='modalPassword' className={style.buttons}>Modify</button></div>
              <div className={style.div7}> <label>Username:</label></div>
              <div className={style.div8}><input placeholder={user_info?.username}  disabled={true} name="username" type="text" /> </div>
              <div className={style.div9}> <button onClick={(e) => handleModal(e)} name='modalUsername' className={style.buttons}>Modify</button></div>
            </div>

            <br />
            <br />
            <br />
            <div className={style.title} ><p>Disabled my account</p></div>
            <hr></hr>
          </div>

        </div>
        <div className={style.buttonContainer}>
          <button onClick={(e) => handleModal(e)} name='modalDelete' className={style.deleteButton}>DISABLED</button>
        </div>
      </div>


      {modal.modalArtist === true ?
        <Modal handleModal={handleModal} email={InfoUser?.email} action={'artist'} setpass={"Put your password"} inputArtistType={"password"} artistName={"Set your artist name"} type={"text"} header={"Ready to become an artist?"} contentButton={"confirm"} />
        : null
      }
      {modal.modalUsername === true ?
        <Modal handleModal={handleModal}  email={InfoUser?.email} action={'username'} field={"username"} type={"text"} header={"Change your Username"} oldData={"Current username: "} description={"Set your new username below"} label={"New username: "} contentButton={"CONFIRM"} />
        : null
      }
      {modal.modalDelete === true ?
        <Modal handleModal={handleModal} email={InfoUser?.email} action={'disabled'} type={"password"} header={"Disabled your acount"}  contentButton={"DISABLED"} />
        : null
      }
      {modal.modalPassword === true ?
        <Modal handleModal={handleModal}  email={InfoUser?.email} action={'password'} field={"password"} type={"password"} oldData={"Current password: "} header={"Change your Password"} description={"Put your current password first"} label={"New password: "} contentButton={"CONFIRM"} />
        : null
      }
      
     
    </div>
  )
};
export default UserSettings;
