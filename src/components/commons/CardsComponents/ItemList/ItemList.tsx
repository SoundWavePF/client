import React from 'react'
import s from './ItemList.module.css'
import like from '../../../assets/like.png'
import likefull from '../../../../assets/likefull.png'
import time from '../../../../assets/time.png'
import DropDownButton from '../../DropDownButton/DropDownButton'
import { Link } from 'react-router-dom'

interface Item {
    position: number;
    image: string;
    name: string;
    timeLapse:string;
}

const ItemList = ({ position, image, name, timeLapse }: Item) => {

    const formatDuration = (duration:string): string => {
        let num = parseInt(duration);
        let minutes: number = Math.floor(num / 60)
        let seconds: number = num - (minutes * 60);
        let minStr: string = minutes.toString();
        let secStr: string = seconds.toString();
        return `${minStr.length == 1 ? '0' + minStr : minStr}:${secStr.length == 1 ? '0' + secStr : secStr}`
    }


    return (
        <div className={s.itemListContainer}>
            <Link className={s.links} to={'/song/:id'}>
            <div className={s.imageAndNameContainer}>
                <div>
                    <div><img className={s.image} src={image} alt="" /></div>
                </div>
                <div>
                    <div className={s.songPosition}>{position}.</div>
                </div>
                <div>
                    <div className={s.songName}>{name}</div>
                </div>
            </div>
            </Link>


            <div className={s.controllerContainer}>
                <div >
                    <img className={name.length > 15 ? s.likeImg : s.likeImgAlt} src={likefull} alt="like icon" />
                </div>
                <div>
                    <DropDownButton />
                </div>
                <div>
                    <div className={s.duration}>{formatDuration(timeLapse)}</div>
                </div>
                <div>
                    <img className={s.timeImg} src={time} alt="time icon" />
                </div>
            </div>
        </div>
    )
}

export default ItemList