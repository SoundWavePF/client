import Modal from "../../commons/Modal/Modal";
import styles from "../Home/Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import style from './UserSettings.module.css'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import * as actionCreator from '../../../redux/actions/action_user'
import { bindActionCreators } from 'redux';


interface inputs {
  id: string
  oldData: string
  newData: string
  field: any
}

const UserSettings = () => {
  const dispatch = useDispatch()
  const { updateUser } = bindActionCreators(actionCreator, dispatch)
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const { sub }: any = user
  let miId = sub.slice(6)
  let { picture }: any = user
  let [input, setInput] = useState<inputs>({
    id: miId,
    oldData: "",
    newData: "",
    field: "avatar",
  })

  function onSubmitHandle(e: any) {
    e.preventDefault()
    updateUser(input)
    setInput({
      id: miId,
    oldData: "",
    newData: "",
    field: "avatar",
    })
    console.log(user)
  }

  const handleOnChange = (e: any) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
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

  let ejemplo = "userName," + " "
  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />



      <div className={style.page}>
        <div className={style.container}>

          <form className={style.father} onSubmit={(e) => onSubmitHandle(e)}>
            <img src={picture} alt="image" className={style.userImage} />
            <input type="file" onChange={(e)=>handleOnChange(e)} value={input.newData} name={"newData"} className={style.input} />
          <button type='submit'>boton de prueba</button>
          </form>



          <div className={style.contentContainer}>

            <div className={style.title} ><p>My status</p></div>
            <hr></hr>
            <div className={style.subscriptionContainer}>
              <div>{`${ejemplo} Currently you are an user`}</div>

              <button onClick={(e) => handleModal(e)} name='modalArtist' className={style.buttons}>
                Request to be an artist
              </button>
            </div>

            <br />

            <div className={style.title} ><p>Log in</p></div>
            <hr></hr>

            <div className={style.parent}>
              <div className={style.div1}><label>E-mail:</label> </div>
              <div className={style.div2}><input disabled={true} name="correo" type="text" /> </div>
              <div className={style.div3}><button onClick={(e) => handleModal(e)} name='modalEmail' className={style.buttons}>Modify</button></div>
              <div className={style.div4}><label>Password:</label></div>
              <div className={style.div5}><input disabled={true} name="password" type="text" /></div>
              <div className={style.div6}><button onClick={(e) => handleModal(e)} name='modalPassword' className={style.buttons}>Modify</button></div>
              <div className={style.div7}> <label>Username:</label></div>
              <div className={style.div8}><input disabled={true} name="username" type="text" /> </div>
              <div className={style.div9}> <button onClick={(e) => handleModal(e)} name='modalUsername' className={style.buttons}>Modify</button></div>
            </div>

            <br />
            <br />
            <br />
            <div className={style.title} ><p>Delete my account</p></div>
            <hr></hr>

          </div>


        </div>
        <div className={style.buttonContainer}>
          <button onClick={(e) => handleModal(e)} name='modalDelete' className={style.deleteButton}>DELETE</button>
        </div>
      </div>



      {modal.modalArtist === true ?
        <Modal handleModal={handleModal} setpass={"Put your password"} inputArtistType={"password"} artistName={"Set your artist name"} type={"text"} header={"Ready to become an artist?"} description={"Please complete the following information"} label={"Set your description: "} contentButton={"confirm"} />
        : null
      }
      {modal.modalUsername === true ?
        <Modal handleModal={handleModal} field={"username"} type={"text"} header={"Change your Username"} oldData={"Current username: "} description={"Set your new username below"} label={"New username: "} contentButton={"CONFIRM"} />
        : null
      }
      {modal.modalDelete === true ?
        <Modal handleModal={handleModal} type={"password"} header={"Delete your acount"} description={"Put your password below to confirm the action"} label={"Password: "} contentButton={"DELETE"} />
        : null
      }
      {modal.modalPassword === true ?
        <Modal handleModal={handleModal} field={"password"} type={"password"} oldData={"Current password: "} header={"Change your Password"} description={"Put your current password first"} label={"New password: "} contentButton={"CONFIRM"} />
        : null
      }
      {modal.modalEmail === true ?
        <Modal handleModal={handleModal} field={"email"} type={"text"} oldData={"Current Email: "} header={"Change your email"} description={"Put your current email first"} label={"New email: "} contentButton={"CONFIRM"} />
        : null
      }
    </div>
  );
};
export default UserSettings;