import React from 'react'
import { Link } from 'react-router-dom'
import style from './error404.module.css'

const error404 = () => {
  return (
    <div className={style.page}>
        <div className={style.container}>
            <div className={style.numberContainer}>
            <div className={style.number}>404</div>
            </div>
            <div className={style.text1}>Oops... it did it again</div>
            <div className={style.text2}>The page you are looking for could not be found.</div>
            <Link to={'/home'}>
            <button className={style.backButton}>EXPLORE</button>
            </Link>
        </div>
    </div>
  )
}

export default error404