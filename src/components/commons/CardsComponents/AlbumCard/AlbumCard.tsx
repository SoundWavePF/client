import React from 'react'
import s from './AlbumCard.module.css'
import likefull from '../../../../assets/likefull.png'
import { Link } from 'react-router-dom';

interface Item {
  image: string;
  name: string;
  nb_tracks: number;
}

const AlbumCard = ({ image, name, nb_tracks }: Item) => {
  return (
    <div className={s.itemListContainer}>
        <Link className={s.links} to={'/aboutAlbum/:id'}>
      <div className={s.imageAndNameContainer}>
        <div>
          <div><img className={s.image} src={image} alt="" /></div>
        </div>

        <div>
          <div className={s.songName}>{name}</div>
        </div>
      </div>
        </Link>


      <div className={s.controllerContainer}>
        {/* <div >
          <img className={name.length > 12 ? s.likeImg : s.likeImgAlt} src={likefull} alt="like icon" />
        </div> */}
        <div>
          <div className={s.numberTracks}>Tracks: {nb_tracks}</div>
        </div>
      </div>
    </div>
  )
}

export default AlbumCard