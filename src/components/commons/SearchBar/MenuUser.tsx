import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from './MenuUser.module.css';
import userIcon from '../../../assets/user_icon.png'
import likeFull from '../../../assets/likefull.png'

const options: string[] = ['one', 'dos', 'three'];

interface props  {
    children?: React.ReactNode,
    options?: string[],
    username: string 
}

const Menu: React.FunctionComponent<props> = (props)=>{
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    function toggle(): void{
        setOpen(!open)
    }

    function handleLogout(): void{
        alert('user log out')
    }

    function handleClick():void{
        navigate('/settings')
    }

    return(
    <>   
        <div onClick={toggle}>
            <img className={style.userImg} src={userIcon} height='30px' width='30px'/>
        </div>      
        { 
            !open? null :
            <div className={style.box}>
              <div className={style.innerImg}>
                    <img className={style.img} src={userIcon} />
                </div>
                <div className={style.textContainer}>
                    <span>username</span>
                    <button onClick={handleClick} className={style.btn}>Settings</button>
                    <button onClick={handleLogout} className={style.btnPrimary}>Logout</button>
                </div>
            </div>
        }
    </>
    )
}

export default Menu;