import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../utils/useAuth";
import { useSelector } from "react-redux";

import style from './MenuUser.module.css';

interface node {
    contains?: (arg: any) => any
}

interface props {
    children?: React.ReactNode,
    options?: string[],
    username: string
}

const Menu: React.FunctionComponent<props> = (props) => {
    const {rol} = useSelector((state: any) => state.user_info);
    const {user_info} = useSelector((state: any) => state);
    const [open, setOpen] = useState<boolean>(false);
    const container = useRef(document.getElementsByTagName('div')[0]); 
    const navigate = useNavigate();
    function click(event: any) {
        if (!container.current.contains(event.target)) {
            setOpen(false);
        }
    }
    const [username, setUsername] = useState('')

    const { user, isAuthenticated, isLoading, logout } = useAuth();

    useEffect(() => {
        document.body.addEventListener('click', click);
        return () => {
            document.body.removeEventListener('click', click);
        }
    }, [])

    function toggle(event: any): void {
        setOpen(!open)
        
    }

    function handleSignUp(): void {
        navigate('/signup')
    }

    function handleClick(path: string): void {
        navigate(`/${path}`)
    }

    return (
        <div ref={container}>
            <div onClick={toggle}  className={open? style.bkg: style.imgClicked }>
                <img className={style.userImg} src={user_info?.image_avatar} height='30px' width='30px' />
            </div>
            {
                !open ? null :
                    <div className={open? style.openedBox: style.box } >
                        <div className={style.innerImg}>
                            <img className={style.img} src={user_info?.image_avatar} />
                        </div>
                        <div className={style.textContainer}>
                            <span>{username}</span>
                            <div className={style.buttonContainer}>
                                <a>{user?.username}</a>
                                <button onClick={() => handleClick('settings')} className={style.btn}>Settings</button>
                                { rol === 'artist' && <button onClick={() => handleClick('panel_artist')} className={style.btn}>Artist Panel</button>}
                                <button onClick={() => logout()} className={style.btnPrimary}>Logout</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Menu;