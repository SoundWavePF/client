import s from './AlbumCard.module.css'
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
        <div>
          <div className={s.numberTracks}>Tracks: {nb_tracks}</div>
        </div>
      </div>
    </div>
  )
}

export default AlbumCard