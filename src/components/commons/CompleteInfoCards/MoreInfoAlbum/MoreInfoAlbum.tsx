import React from 'react'
import test from '../../../views/SearchResults/test.json'
import AlbumCard from '../../CardsComponents/AlbumCard/AlbumCard'
import s from '../../../views/SearchResults/SearchResults.module.css'
import { Link } from 'react-router-dom'
const MoreInfoAlbum = () => {
  return (
    <div>
      <>
        <div className={s.cardsContainer}>
          {
            test.hasOwnProperty('albums') && test.albums[0] && 
            <Link className={s.links} to={'/searchresults'}>
            <div className={s.sectionTitle}>{`< Albums`}</div>
            </Link>
          }
          {
            test.hasOwnProperty('albums') && test.albums[0] && test.albums.map(albums => {
              return <AlbumCard image={albums.cover} name={albums.title} nb_tracks={albums.nb_tracks} />
            })
          }
        </div>
      </>
    </div>
  )
}

export default MoreInfoAlbum