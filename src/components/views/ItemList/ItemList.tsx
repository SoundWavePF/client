import React from 'react'
import s from './ItemList.module.css'
import like from '../../../assets/like.png'
import likefull from '../../../assets/likefull.png'
import time from '../../../assets/time.png'
import dots from '../../../assets/dots.png'
import DropDownButton from '../DropDownButton/DropDownButton'

interface Item {
    position: number;
    image: string;
    name: string;
    timeLapse: number
}

const ItemList = ({ position, image, name, timeLapse }: Item) => {

    const formatDuration = (duration: number): string => {
        let minutes: number = Math.floor(duration / 60)
        let seconds: number = duration - (minutes * 60);
        let minStr: string = minutes.toString();
        let secStr: string = seconds.toString();
        return `${minStr.length == 1 ? '0' + minStr : minStr}:${secStr.length == 1 ? '0' + secStr : secStr}`
    }


    return (
        <div className={s.itemListContainer}>
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


            <div className={s.controllerContainer}>
                <div >
                    <img className={timeLapse > 300 ? s.likeImg : s.likeImgAlt} src={likefull} alt="like icon" />
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