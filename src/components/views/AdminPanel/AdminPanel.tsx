import { Link } from 'react-router-dom';
import m from './AdminPanel.module.css'
import AdminSideBar from './../../commons/AdminSideBar/AdminSideBar';
import UserCardAdmin from '../../commons/UserCardAdmin/UserCardAdmin';
import { useSelector } from 'react-redux';
import NavAdmin from '../../commons/NavAdmin/NavAdmin';

interface user{
  id:string,
  type:string,
  username:string,
  email:string,
  songNumber:number
}

const data:user[] = [
  {id:'1',type:'artist',username:'fran',email:'fran@sw.com',songNumber:2},
  {id:'2',type:'artist',username:'david',email:'deivid@sw.com',songNumber:2},
  {id:'3',type:'artist',username:'nano',email:'nano@sw.com',songNumber:3},
  {id:'4',type:'user',username:'javier',email:'javie@sw.com',songNumber:0},
  {id:'5',type:'user',username:'gaston',email:'gaston@sw.com',songNumber:0},
  {id:'6',type:'user',username:'jony',email:'jony@sw.com',songNumber:0},
  {id:'12',type:'artist',username:'fran',email:'fran@sw.com',songNumber:2},
  {id:'22',type:'artist',username:'david',email:'deivid@sw.com',songNumber:2},
  {id:'32',type:'artist',username:'nano',email:'nano@sw.com',songNumber:3},
  {id:'42',type:'user',username:'javier',email:'javie@sw.com',songNumber:0},
  {id:'52',type:'user',username:'gaston',email:'gaston@sw.com',songNumber:0},
  {id:'62',type:'user',username:'jony',email:'jony@sw.com',songNumber:0},
  {id:'13',type:'artist',username:'fran',email:'fran@sw.com',songNumber:2},
  {id:'23',type:'artist',username:'david',email:'deivid@sw.com',songNumber:2},
  {id:'33',type:'artist',username:'nano',email:'nano@sw.com',songNumber:3},
  {id:'43',type:'user',username:'javier',email:'javie@sw.com',songNumber:0},
  {id:'53',type:'user',username:'gaston',email:'gaston@sw.com',songNumber:0},
  {id:'63',type:'user',username:'jony',email:'jony@sw.com',songNumber:0},
  {id:'1',type:'artist',username:'fran',email:'fran@sw.com',songNumber:2},
  {id:'2',type:'artist',username:'david',email:'deivid@sw.com',songNumber:2},
  {id:'3',type:'artist',username:'nano',email:'nano@sw.com',songNumber:3},
  {id:'4',type:'user',username:'javier',email:'javie@sw.com',songNumber:0},
  {id:'5',type:'user',username:'gaston',email:'gaston@sw.com',songNumber:0},
  {id:'6',type:'user',username:'jony',email:'jony@sw.com',songNumber:0},
  {id:'12',type:'artist',username:'fran',email:'fran@sw.com',songNumber:2},
  {id:'22',type:'artist',username:'david',email:'deivid@sw.com',songNumber:2},
  {id:'32',type:'artist',username:'nano',email:'nano@sw.com',songNumber:3},
  {id:'42',type:'user',username:'javier',email:'javie@sw.com',songNumber:0},
  {id:'52',type:'user',username:'gaston',email:'gaston@sw.com',songNumber:0},
  {id:'62',type:'user',username:'jony',email:'jony@sw.com',songNumber:0},
  {id:'13',type:'artist',username:'fran',email:'fran@sw.com',songNumber:2},
  {id:'23',type:'artist',username:'david',email:'deivid@sw.com',songNumber:2},
  {id:'33',type:'artist',username:'nano',email:'nano@sw.com',songNumber:3},
  {id:'43',type:'user',username:'javier',email:'javie@sw.com',songNumber:0},
  {id:'53',type:'user',username:'gaston',email:'gaston@sw.com',songNumber:0},
  {id:'63',type:'user',username:'jony',email:'jony@sw.com',songNumber:0}
]
const AdminPanel = ()=>{
  const adminOption = useSelector((state:any)=>state.adminOption)

  if(adminOption.home===true){
    return(  
      <div>
        <AdminSideBar/>
        <div className={m.container_as78}>
          <div>
            
          </div>
          <div className={m.containerform_98ajz}>
            <Link className={m.linkTolanding_h8z6} to='/'>back to landing</Link>
            <h2 className={m.h2SignUp_f8h3}>Cosas de panel de administrador :b</h2>
            <button className={m.inputGoogle_7fv8 }  >un boton cualquiera</button>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div>
        <AdminSideBar/>
        <NavAdmin/>
        <div className={m.containerCards}>
          <ul className={m.ul}>
            {data.map(user=>{
              if(adminOption.user && user.type==='user'){
                return <li className={m.li}><UserCardAdmin {...user}/></li>
              }
              if(!adminOption.user && user.type==='artist'){
                return <li className={m.li}><UserCardAdmin {...user}/></li>
              }
            }
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default AdminPanel