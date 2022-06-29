import Reacct from 'react'

import style from './SoundWave.module.css'

const SoundWave: React.FunctionComponent = ()=>{
    return (
    <div className={style.icon}>
        <span className={style.bar}/>
        <span className={style.bar}/>
        <span className={style.bar}/>
        <span className={style.bar}/>
        <span className={style.bar}/>
    </div>
    )
}

export default SoundWave;