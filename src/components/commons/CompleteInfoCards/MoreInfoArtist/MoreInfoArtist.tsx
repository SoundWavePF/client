import React from 'react'
import ArtistCard from '../../CardsComponents/ArtistCard/ArtistCard'
import s from '../../../views/SearchResults/SearchResults.module.css'
import test from '../../../views/SearchResults/test.json'
import { Link } from 'react-router-dom'

const MoreInfoArtist = () => {
  return (
    <>
      <div className={s.cardsContainer}>
        {
          test.hasOwnProperty('artists') && test.artists[0] &&
          <Link className={s.links} to={'/searchresults'}>
            <div className={s.sectionTitle}>{`< Artists`}</div>
          </Link>
        }
        {
          test.hasOwnProperty('artists') && test.artists[0] && test.artists.map(artist => {
            return <ArtistCard image={artist.picture} name={artist.name} />
          })
        }
      </div>
    </>
  )
}

export default MoreInfoArtist