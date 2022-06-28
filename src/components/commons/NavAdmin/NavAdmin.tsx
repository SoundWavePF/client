import { useState } from 'react'
import style from './NavAdmin.module.css'

const NavAdmin = ({option}:any)=>{
    const toggleMode = () => {
        document.querySelector('#appSW')?.classList.toggle('light-mode')
        document.querySelector('#appSW')?.classList.toggle('dark-mode')
    }
    return (
    <div className={style.navbar}>
        <b >SoundWave's Admin Panel</b>
        <button onClick={toggleMode}>tema</button>
    </div>
    )
}

export default NavAdmin;