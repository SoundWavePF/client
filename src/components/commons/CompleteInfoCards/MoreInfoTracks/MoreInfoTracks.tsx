import React from 'react'
import ItemList from '../../CardsComponents/ItemList/ItemList'
import s from '../../../views/SearchResults/SearchResults.module.css'
import test from '../../../views/SearchResults/test.json'
import { Link } from 'react-router-dom'

const MoreInfoTracks = () => {
    return (
        <>
            {/* <div className={s.cardsContainer}>
                {
                    
                    test.hasOwnProperty('tracks') && test.tracks[0] && 
                    <Link className={s.links} to={'/searchresults'}>
                    <div className={s.sectionTitle}>{`< Tracks`}</div>
                    </Link>

                }
                {
                    test.hasOwnProperty('tracks') && test.tracks[0] && test.tracks.map(song => {
                        return <ItemList position={song.track_position} image={song.artist.picture} name={song.title} timeLapse={song.duration} />
                    })
                }
            </div> */}
        </>
    )
}

export default MoreInfoTracks