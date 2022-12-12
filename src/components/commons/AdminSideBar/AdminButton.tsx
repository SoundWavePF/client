import style from './AdminButton.module.css'

const AdminButton = ({option}:any)=>{
    const toggleMode = () => {
        document.querySelector('#appSW')?.classList.toggle('light-mode')
        document.querySelector('#appSW')?.classList.toggle('dark-mode')
    }
    return (
    <div className={style.navbar}>
        <button onClick={toggleMode}>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><g><path d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z" ></path></g></svg>
            <b>Theme</b>    
        </button>
    </div>
    )
}

export default AdminButton;