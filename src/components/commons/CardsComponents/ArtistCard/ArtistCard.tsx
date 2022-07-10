
import React from 'react'
import s from './ArtistCard.module.css'
import likefull from '../../../../assets/likefull.png'
import { Link } from 'react-router-dom';

interface Item {
    image: string;
    name: string;
}

const ArtistCard = ({ image, name }: Item) => {

    return (
        <div className={s.itemListContainer}>
            <Link className={s.links} to={'/artist/:id'}>
            <div className={s.imageAndNameContainer}>
                <div>
                    <div><img className={s.image} src={image} alt="" /></div>
                </div>

                <div>
                    <div className={s.songName}>{name}</div>
                </div>
            </div>
            </Link>


            {/* <div className={s.controllerContainer}>
                <div >
                    <img className={name.length > 7 ? s.likeImg : s.likeImgAlt} src={likefull} alt="like icon" />
                </div>
            </div> */}
        </div>
    )
}

export default ArtistCard