import m from './UserCardAdmin.module.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_admin'


const UserCardAdmin = (user:any)=>{
  const dispatch = useDispatch()
  const {getAllUsers} = bindActionCreators(actionCreator,dispatch)
  const ADMIN_EMAIL='franciscomansilla1999@gmail.com'
  const deleteUser = (userC:any)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let data = {
          adminEmail:ADMIN_EMAIL,
          userEmail:userC.email,
        }
        axios.post('http://143.198.158.238:3001/admin/deactivate',data)
        .then(r=>{
        console.log(r.data)
        getAllUsers(ADMIN_EMAIL)
        Swal.fire(
          'Deleted!',
          'This user was deleted.',
          'success'
        )
        })
        .catch(error=>{
          console.log(error)
          Swal.fire('Error paso algo :(')
        })
      }
    })
  }
  const changeRole = async(userC:any)=>{
    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions:{
          aprobar: 'Aprobar',
          denegar: 'Denegar'
        },
      inputPlaceholder: 'Select',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'Aprobar') {
            let data = {
              adminEmail:ADMIN_EMAIL,
              userEmail:userC.email,
            }
            axios.post('http://143.198.158.238:3001/admin/accept',data)
            .then(r=>{
            console.log(r.data)
            getAllUsers(ADMIN_EMAIL)
            Swal.fire('Aprobado!')
            })
            .catch(error=>{
              console.log(error)
              Swal.fire('Error paso algo :(')
            })
            resolve('aprobar')
          } else {
            Swal.fire('Desaprobado!')
            resolve('Denegar')
          }
        })
      }
    })
    
    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }
  }
  const setUsername = async(userC:any)=>{
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Set new username',
      inputPlaceholder: 'Type here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    if (text.length<13) {
      let data = {
        adminEmail:ADMIN_EMAIL,
        userEmail:userC.email, 
        field:'username', 
        newData:text 
      }
      axios.post('http://143.198.158.238:3001/admin/update',data)
      .then(r=>{
        console.log(r.data)
        getAllUsers(ADMIN_EMAIL)
        Swal.fire('The user was successfully changed to "'+text+'"')
      })
      .catch(error=>{
        console.log(error)
        Swal.fire('Error paso algo :(')
      })
    }else{
      Swal.fire('The username must have a max of 13 characters')
    }
  }
  const setEmail = async()=>{
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address'
    })
    
    if (email) {
      let data = {
        adminEmail:ADMIN_EMAIL,
        userEmail:user.email, 
        field:'email', 
        newData:email 
      }
      axios.post('http://143.198.158.238:3001/admin/update',data)
      .then(r=>{
        console.log(r.data)
        getAllUsers(ADMIN_EMAIL)
        Swal.fire(`The email was successfully changed to: ${email}`)
      })
      .catch(error=>{
        console.log(error)
        Swal.fire('Error paso algo :(')
      })
    }
  }

    return(
      <div className={m.container}>
        <div className={m.infoContainer}>
            <div className={m.divType}>
              <span>{user.rol}</span>
            </div>
            <button onClick={user.requested_artist? ()=>changeRole(user):undefined} className={user.requested_artist? m.buttonRequestTrue : m.buttonRequest}>{user.requested_artist.toString()}</button>
            <div className={m.divId}>
              <span className={m.span}>Id: {user.id}</span>
            </div>
            <button onClick={()=>setUsername(user)} className={m.buttonUsername}>Username: {user.username}</button>
            <button onClick={setEmail} className={m.buttonEmail}>Email: {user.email}</button>
            {/* <div className={m.divSong}>
              <span className={m.span}>Songs number: {user.songNumber}</span>
            </div> */}
            <button onClick={user.deactivated? undefined:()=>deleteUser(user)} className={m.button}>{user.deactivated.toString()}</button>
        </div>
      </div>
    )
  

  
}
export default UserCardAdmin