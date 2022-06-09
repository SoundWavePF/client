import m from './UserCardAdmin.module.css'

interface user{
  id:string,
  type:string,
  username:string,
  email:string,
  songNumber:number
}

const UserCardAdmin = (user:user)=>{

  return(
    <div className={m.container}>
      <div className={m.header}>
        <span>{user.type}</span>
        <button className={m.buttonDelete}><img className={m.img} src="https://cdn-icons.flaticon.com/png/512/542/premium/542724.png?token=exp=1654784155~hmac=6cbdff0d6916b7b638a797e3a99baeae" alt="" /></button>
      </div>
      <div className={m.infoContainer}>
        <div>
          <span className={m.span}>Id: {user.id}</span>
          <span className={m.span}>Username: {user.username}</span>
        </div>
        <div>
          <span className={m.span}>Email: {user.email}</span>
          <span className={m.span}>Songs number: {user.songNumber}</span>
        </div>
      </div>
    </div>
  )
}
export default UserCardAdmin