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
import Swal from 'sweetalert2'
import { isConstructorDeclaration } from "typescript";
import userDefault from '../../../assets/default-user.png'
import Table from 'react-bootstrap/Table';
import { log } from "console";
import SearchResults from "../SearchResults/SearchResults";


interface inputs {
  email: any
  oldData: string
  newData: string
  field: any
}

const UserSettings = () => {
  const searchString = useSelector((state: any) => state.query);


  const [image,setImage]:any= useState()
  const user_info=useSelector((state:any)=>state.user_info)
  const [InfoUser,setInfoUser]:any= useState(user_info)
  const [InfoUserA,setInfoUserA]:any= useState(user_info.artist)
  const dispatch = useDispatch()
  const { updateUser ,getUserInfo} = bindActionCreators(actionCreator, dispatch)
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [donations, setDonations]:any= useState([])

  
  useEffect(  () =>{
    const callInfouser=async ()=>{
      // console.log(user?.email,"no hay")
      getUserInfo(user?.email)
      const donations = await axios.post(`https://api-production-b004.up.railway.app/order/history`, {email: user?.email})
      setDonations(donations.data)
    }

    user?.email && callInfouser()

  },[user])
  useEffect(  () =>{
      setInfoUser(user_info)

      
  },[user_info])
  

  
  

  



  let [input, setInput] = useState<inputs>({
    email: user?.email,
    oldData:  user_info.image_avatar,
    newData: '',
    field: "avatar",
  })

  let [inputs, setInputs] = useState<inputs>({
    email: user?.email,
    oldData: "",
    newData: "",
    field: ''
})

  function onSubmitHandle(e: any) {
    e.preventDefault()
    updateUser(input)
  
  }


  const [images,setImages]:any= useState<any>({
    email: user?.email,
    oldData:  user_info.image_avatar,
    newData: '',
    field: "avatar",
  })


  const modalArtist =  ()=>{
    Swal.fire({
      title:"Ready to become an artist?",
      showCancelButton: true,
      confirmButtonColor: '#ffd100',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
     
    }).then((result) => {
      if (result.isConfirmed) {
        
        axios.post('https://api-production-b004.up.railway.app/requestArtistStatus',{email:user_info?.email})
        .then(e=>console.log(e))
        

        Swal.fire(
          
          'Congatulation',
          'you are already an artist',

          'success'
        )}})}



  const modalDisabled =  ()=>{
    Swal.fire({
      title:"Disabled your account?",
      showCancelButton: true,
      confirmButtonColor: '#ffd100',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('https://api-production-b004.up.railway.app/deactivate',{email:user_info?.email})
        .then(e=>console.log(e))
        
        Swal.fire({
          title:'Disabled  account',
          icon:'success' 
        })}})}



  const modalChangePassword:any = async ()=>{

    const {value:formValues}:any= await Swal.fire({
      title:"Change your Password?",
      text:'Put your current password first',
     
      html:
      '<label>Current password:</label>' +
      '<input type="password" id="swal-input1" class="swal2-input">' +
      '<label>New password:</label>' +
      '<input type="password" id="swal-input2" class="swal2-input">',


      showCancelButton: true,
      confirmButtonColor: '#ffd100',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',

      preConfirm: () => {
        return [
          document.getElementById('swal-input1'),
          document.getElementById('swal-input2')
        ]
      }
    })

  if(formValues['0'].value.length > 2){

    let changepassword={
      email:user_info?.email,
      oldData: formValues['0'].value,
      newData: formValues['1'].value,
      field:'password'
    }
    

    setInputs({
      email:user_info?.email,
      oldData: formValues['0'].value,
      newData: formValues['1'].value,
      field:'password'
    })


    updateUser(changepassword)

    Swal.fire({
      title:'password was successfully changed',
      icon:'success'
    
    })}}



  
  const modalChangeUsername = async ()=>{

    const {value:formValues}:any= await Swal.fire({
      title:"Change your Username?",
      text:'Set your new username below',
     
      html:
      '<label>Current username:</label>' +
      '<input id="swal-input1" class="swal2-input">' +
      '<label>New username:</label>' +
      '<input id="swal-input2" class="swal2-input">',


      showCancelButton: true,
      confirmButtonColor: '#ffd100',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1'),
          document.getElementById('swal-input2')
        ]
      }
    })

    if(formValues['0'].value.length > 2){

      let changeusername={
        email:user_info?.email,
        oldData: formValues['0'].value,
        newData: formValues['1'].value,
        field:'username'
      }

      


      setInputs(changeusername)
    updateUser(changeusername)
    
    Swal.fire({
      
      title:'user was successfully changed',
      icon:'success'
    
    })}}

    const iP =user_info.image_avatar

const changeImage = async()=>{

  
  const { value: file }:any = await Swal.fire({
    title: 'Select image',
    imageUrl: `${iP}`,
    imageHeight: 150,
    imageWidth:150,
    input: 'file',
    inputAttributes: {
      'accept': 'image/*',
      'aria-label': 'Upload your profile picture'
    },
    showConfirmButton:true,
    confirmButtonText:'send',
    showCancelButton:true,
    confirmButtonColor: '#ffd100',

  })

  const files1=file
  
  if (file) {
    const files = files1;

    const data:any = new FormData();
    data.append("file", files);
    data.append("upload_preset", "songImage");

    // for(let [name, value] of data) {
    //   alert( `${name} = ${value}` ); // key1 = value1, then key2 = value2
    // }

    const res:any = await axios.post(
      "https://api.cloudinary.com/v1_1/jonathanhortman/image/upload",data
      
    )
    let fileupdate= await res.data;    
    let newImage={
      ...images,
        email: user_info.email,
        newData: fileupdate.secure_url
    }

       axios.post("https://api-production-b004.up.railway.app/update",newImage)
        .then(e=>getUserInfo(user?.email))      
        Swal.fire('Saved!', '', 'success')
    }}


  return (
    <div className={StylesC.container}>
      <SearchBar  />
      <SideBar />
{searchString ?<SearchResults />:user ?
      <div className={style.page}>
        <div className={style.container}>
        <div className={style.ContainerImage}>
        <button onClick={()=>changeImage()}></button>
        <img src={user_info.image_avatar?user_info.image_avatar:userDefault} alt="image" className={style.userImage} />
        </div>
 
          


          <div className={style.contentContainer}>
            
            <div className={style.title} ><p>My status</p></div>
            
            <hr></hr>

            {InfoUserA?  
              <div className={style.subscriptionContainer}>
              <div>{`${user_info?.username} Currently you are an ${user_info?.rol && user_info?.rol}`}</div>
            </div>
            
            
            : 
            <div className={style.subscriptionContainer}>
              <div>{`${user_info?.username} Currently you are an user`}</div>
              <button onClick={(e) => modalArtist()} name='modalArtist' className={style.buttons}>
              Request to be an artist
              </button>
            </div>
}

            <br />

            <div className={style.title} ><p>Log in</p></div>

            <hr></hr>

            <div className={style.parent}>
              <div className={style.div4}><label>Password:</label></div>
              <div className={style.div5}><input  placeholder={'*****'} disabled={true} name="password" type="text" /></div>
              <div className={style.div6}><button onClick={(e) => modalChangePassword()} name='modalPassword' className={style.buttons}>Modify</button></div>
              <div className={style.div7}> <label>Username:</label></div>
              <div className={style.div8}><input placeholder={user_info?.username}  disabled={true} name="username" type="text" /> </div>
              <div className={style.div9}> <button onClick={(e) => modalChangeUsername()} name='modalUsername' className={style.buttons}>Modify</button></div>
            </div>
            <br />
          
          </div>
          </div>
          

          <div className={style.containertable}>
            <table  className={style.table}>
            <thead >
            {!donations.length ?
               <tr >
               <th>Donation ID</th>
              
             </tr>:

              <tr >
                <th>Donation ID</th>
                <th>Arist</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
          }
            </thead>
            <tbody>
            {donations !== undefined && donations?.map((donation:any)=>{
                  return (
                    <tr >
                      <td className={style.donation}>{donation.id}</td>
                      <td className={style.artist}>{donation.artist.name}</td>
                      <td className={style.amount}>${donation.amount}</td>
                      <td className={style.date}>{donation.createdAt.split('T')[0]}</td>
                    </tr>
                  )
                }
              )}
              {!donations.length && 
                  <tr >
                    <td className={style.donation} >No donations</td>
                  </tr>
              }
            </tbody>
          </table>
          </div>

        <div className={style.buttonContainer}>
          <button onClick={(e) => modalDisabled()} name='modalArtist' className={style.deleteButton}>
          Deactivate account 
              </button>
        </div>
        </div>
      
    :
    <div className={style.Loading}>
    <div className="spinner-border"  role="status"></div>
    </div>

}



      
     
    </div>
  )
};
export default UserSettings;



