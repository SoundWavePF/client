import style from './NavAdmin.module.css'
import darkModeAdmin from '../../../assets/darkModeAdmin.png'

const NavAdmin = ({option}:any)=>{
    const toggleMode = () => {
        document.querySelector('#appSW')?.classList.toggle('light-mode')
        document.querySelector('#appSW')?.classList.toggle('dark-mode')
    }
    return (
    <div className={style.navbar}>
        <b >SoundWave's Admin Panel</b>
    </div>
    )
}

export default NavAdmin;