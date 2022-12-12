import s from './ArtistCard.module.css'
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
        </div>
    )
}

export default ArtistCard