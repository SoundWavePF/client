import style from './AdminButton.module.css'
import darkModeAdmin from '../../../assets/darkModeAdmin.png'

const AdminButton = ({option}:any)=>{
    const toggleMode = () => {
        document.querySelector('#appSW')?.classList.toggle('light-mode')
        document.querySelector('#appSW')?.classList.toggle('dark-mode')
        console.log(document.querySelector('#appSW')?.classList[0])
    }
    return (
    <div className={style.navbar}>
        <button onClick={toggleMode}>
            <img src={darkModeAdmin} alt="darkmode" />
            <b>Theme</b>    
        </button>
    </div>
    )
}

export default AdminButton;