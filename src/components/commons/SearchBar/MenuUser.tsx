import React, { useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import style from './MenuUser.module.css';
import userIcon from '../../../assets/user_icon.png'
import likeFull from '../../../assets/likefull.png'

interface node {
    contains?: (arg: any)=> any
}

interface props  {
    children?: React.ReactNode,
    options?: string[],
    username: string 
}

const Menu: React.FunctionComponent<props> = (props)=>{
    const [open, setOpen] = useState<boolean>(false);
    const container = useRef(document.getElementsByTagName('div')[0]); // obtiene da un nodo html como valor inicial 
                                                                     //para que no de error cuando la referencia intente usar  el  metodo contains
    const navigate = useNavigate();

    function click (event: any) {
        if (!container.current.contains(event.target)) {
            setOpen(false);
        } 
    }

    const [username, setUsername] = useState('')

    useEffect(() => {
      const token = localStorage.getItem('sw-token') || '{}';
      if (token !== '{}') {
        const decoded:any = jwt_decode(token);
        setUsername(decoded.username);
        console.log(decoded);
      } else{
        setUsername('Visitante')
      }
    }, []);
  

    useEffect( ()=>{
        document.body.addEventListener('click', click);
        return ()=>{
            document.body.removeEventListener('click', click);
        }
    }, [])

    function toggle(event: any): void{
        setOpen(!open)
        console.log(event)
    }

    function handleLogout():void{
        localStorage.removeItem('sw-token')
        navigate('/')
    }

    function handleSignUp(): void{
        navigate('/login')
    }

    function handleClick():void{
        navigate('/settings')
    }

    return(
    <div ref={container}>   
        <div onClick={toggle}>
            <img className={style.userImg} src={userIcon} height='30px' width='30px'/>
        </div>      
        { 
            !open? null :
            <div className={style.box} >
              <div className={style.innerImg}>
                    <img className={style.img} src={userIcon} />
                </div>
                <div className={style.textContainer}>
                    <span>{username}</span>
                    {username !== 'Visitante' && 
                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <button onClick={handleClick} className={style.btn}>Settings</button>
                        <button onClick={handleLogout} className={style.btnPrimary}>Logout</button>
                    </div>
                    }
                    {username === 'Visitante' &&
                        <button onClick={handleSignUp} className={style.btnPrimary}>Sign Up</button>
                    }
                </div>
            </div>
        }
    </div>
    )
}

export default Menu;