import { useState } from 'react'
import style from './NavAdmin.module.css'

const NavAdmin = ({option}:any)=>{
    return (
    <div className={style.navbar}>
        <b >SoundWave's Admin Panel</b>
    </div>
    )
}

export default NavAdmin;