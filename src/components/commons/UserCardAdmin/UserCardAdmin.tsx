import m from './UserCardAdmin.module.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionCreator from '../../../redux/actions/action_admin'


const UserCardAdmin = (userP:any)=>{
  const dispatch = useDispatch()
  const {getAllUsers} = bindActionCreators(actionCreator,dispatch)
  // console.log(admin)
  const user = userP.user
  const ADMIN_EMAIL=userP.admin
  const deleteUser = (userC:any)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ffd100',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let data = {
          adminEmail:ADMIN_EMAIL,
          userEmail:userC.email,
        }
        axios.post('https://www.javierochoa.me/admin/deactivate',data)
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

    Swal.fire({
      title: 'quieres aceptar su solicitud para ser artista?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'SI',
      confirmButtonColor: '#ffd100',
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let data = {
          adminEmail:ADMIN_EMAIL,
          userEmail:userC.email,
        }
        axios.post('https://www.javierochoa.me/admin/accept',data)
        .then(r=>{
          console.log(r.data,'BIENNNNN')
          getAllUsers(ADMIN_EMAIL)
          Swal.fire('Aprobado!')
        })
        .catch(error=>{
          console.log(error)
          Swal.fire('Error paso algo :(')
        })
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Desaprobado')
      }
    })
  }
  const setUsername = async(userC:any)=>{
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Set new username',
      inputPlaceholder: 'Type here...',
      confirmButtonColor: '#ffd100',
      cancelButtonColor: '#d33',
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
      axios.post('https://www.javierochoa.me/admin/update',data)
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
      confirmButtonColor: '#ffd100',

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
      axios.post('https://www.javierochoa.me/admin/update',data)
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
  if(user.rol){
      return(
        <div className={m.container}>
          <div className={m.infoContainer}>
              <div className={m.divType}>
                <span>{user.rol}</span>
              </div>
              <button onClick={user.requested_artist? ()=>changeRole(user):undefined} className={user.requested_artist? m.buttonRequestTrue : m.buttonRequest}>
                {user.requested_artist? 'yes' : 'no'}
              </button>
              <div className={m.divId}>
                <span className={m.span}>Id: {user.id}</span>
              </div>
              <button onClick={()=>setUsername(user)} className={m.buttonUsername}>Username: {user.username}</button>
              <button onClick={setEmail} className={m.buttonEmail}>Email: {user.email}</button>
              {/* <div className={m.divSong}>
                <span className={m.span}>Songs number: {user.songNumber}</span>
              </div> */}
              <button onClick={user.deactivated? undefined:()=>deleteUser(user)} className={m.buttonDelete}>{user.deactivated? 'deactivated':'no deactivated'}</button>
          </div>
        </div>
      )
    } else{
      return(
        <h1>panel admin</h1>
      )
    }
  

  
}
export default UserCardAdmin