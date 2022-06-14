import Modal from "../../commons/Modal/Modal";
import styles from "../Home/Home.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import Player from "../../commons/Player/Player";
import style from './UserSettings.module.css'
import userImage from '../../../assets/userIcon.png'
// import foto from '../../../assets/music.png'
import { useState } from "react";


const UserSettings = () => {

  const [modal, setModal]: any = useState({
    modalArtist: false,
    modalEmail: false,
    modalPassword: false,
    modalUsername: false,
    modalDelete: false
  })

  let handleModal: any = (e: any) => {
    console.log(modal);
    // console.log(e.target.name);

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
        console.log('entro a all');
        return setModal({
          ...modal,
          modalArtist: false,
          modalDelete: false,
          modalUsername: false,
          modalPassword: false,
          modalEmail: false
        })

      default:
        console.log("no funciona")
        return modal

    }
  }

  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />



      <div className={style.page}>
        <div className={style.container}>

          <div className={style.father}>
            <img src={userImage} alt="image" className={style.userImage} />
            <input type="file" name="foto" className={style.input} />
          </div>



          <div className={style.contentContainer}>

            <div className={style.title} ><p>My status</p></div>
            <hr></hr>
            <div className={style.subscriptionContainer}>
              <div>Currently you are an user</div>

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



      <Player />
      {modal.modalArtist === true ?
        <Modal handleModal={handleModal} type={"text"} header={"Ready to become an artist?"} description={"Please complete the following information"} label={"¿info?: "} contentButton={"confirm"} />
        : null
      }
      {modal.modalUsername === true ?
        <Modal handleModal={handleModal} type={"text"} header={"Change your Username"} description={"Set your new username below"} label={"New username: "} contentButton={"CONFIRM"} />
        : null
      }
      {modal.modalDelete === true ?
        <Modal handleModal={handleModal} type={"password"} header={"Delete your acount"} description={"Put your password below to confirm the action"} label={"Password: "} contentButton={"DELETE"} />
        : null
      }
      {modal.modalPassword === true ?
        <Modal handleModal={handleModal} type={"password"} oldData={"Current password: "} header={"Change your Password"} description={"Put your current password first"} label={"New password: "} contentButton={"CONFIRM"} />
        : null
      }
      {modal.modalEmail === true ?
        <Modal handleModal={handleModal} type={"text"} oldData={"Current Email: "} header={"Change your email"} description={"Put your current email first"} label={"New email: "} contentButton={"CONFIRM"} />
        : null
      }
    </div>
  );
};
export default UserSettings;