import m from './UserCardAdmin.module.css'
import Swal from 'sweetalert2'


interface user{
  request:boolean,
  id:string,
  type:string,
  username:string,
  email:string,
  songNumber:number
}



const UserCardAdmin = (user:user)=>{
  const deleteUser = ()=>{
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
        Swal.fire(
          'Deleted!',
          'This user was deleted.',
          'success'
        )
      }
    })
  }
  const changeRole = async()=>{
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
            resolve('aprobar')
          } else {
            resolve('Denegar')
          }
        })
      }
    })
    
    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }
  }
  const setUsername = async()=>{
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
      Swal.fire('The user was successfully changed to "'+text+'"')
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
      Swal.fire(`The email was successfully changed to: ${email}`)
    }
  }

    return(
      <div className={m.container}>
        <div className={m.infoContainer}>
            <div className={m.divType}>
              <span>{user.type}</span>
            </div>
            <button onClick={user.request? ()=>changeRole():undefined} className={user.request? m.buttonRequestTrue : m.buttonRequest}>{user.request.toString()}</button>
            <div className={m.divId}>
              <span className={m.span}>Id: {user.id}</span>
            </div>
            <button onClick={setUsername} className={m.buttonUsername}>Username: {user.username}</button>
            <button onClick={setEmail} className={m.buttonEmail}>Email: {user.email}</button>
            <div className={m.divSong}>
              <span className={m.span}>Songs number: {user.songNumber}</span>
            </div>
            <button onClick={deleteUser} className={m.button}><img className={m.img} src="https://cdn-icons.flaticon.com/png/512/542/premium/542724.png?token=exp=1654784155~hmac=6cbdff0d6916b7b638a797e3a99baeae" alt="delete" /></button>
        </div>
      </div>
    )
  

  
}
export default UserCardAdmin