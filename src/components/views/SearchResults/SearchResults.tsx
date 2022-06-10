import React from 'react'

import ArtistCard from '../../commons/CardsComponents/ArtistCard/ArtistCard'
import AlbumCard from '../../commons/CardsComponents/AlbumCard/AlbumCard'
import s from './SearchResults.module.css'

import test from './test.json'
import { Link } from 'react-router-dom'
import ItemList from '../../commons/CardsComponents/ItemList/ItemList'

const SearchResults = () => {

  return (
    <>

      {
        test.hasOwnProperty('tracks') && test.tracks[0] &&
        <Link className={s.links} to={'/moreinfotracks'}>
          <div className={s.sectionTitle}>{`Tracks >`}</div>
        </Link>
      }

      {
        test.hasOwnProperty('tracks') && test.tracks[0] && test.tracks.slice(0, 4).map(song => {
          return <ItemList position={song.track_position} image={song.artist.picture} name={song.title} timeLapse={song.duration} />
        })
      }
      {
        test.hasOwnProperty('artists') && test.artists[0] &&
        <Link className={s.links} to={'/moreinfoartists'}>
          <div className={s.sectionTitle}>{`Artists >`}</div>
        </Link>
      }
      {
        test.hasOwnProperty('artists') && test.artists[0] && test.artists.slice(0, 4).map(artist => {
          return <ArtistCard image={artist.picture} name={artist.name} />
        })
      }
      {
        test.hasOwnProperty('albums') && test.albums[0] &&
        <Link className={s.links} to={'/moreinfoalbums'}>
          <div className={s.sectionTitle}>{`Albums >`}</div>
        </Link>
      }
      {
        test.hasOwnProperty('albums') && test.albums[0] && test.albums.slice(0, 4).map(albums => {
          return <AlbumCard image={albums.cover} name={albums.title} nb_tracks={albums.nb_tracks} />
        })
      }
    </>
  )
}

export default SearchResults