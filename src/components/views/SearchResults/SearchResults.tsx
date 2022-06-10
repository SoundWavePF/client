import React from 'react'

import ArtistCard from '../../commons/CardsComponents/ArtistCard/ArtistCard'
import AlbumCard from '../../commons/CardsComponents/AlbumCard/AlbumCard'
import s from './SearchResults.module.css'

import test from './test.json'
import { Link } from 'react-router-dom'
import ItemList from '../../commons/CardsComponents/ItemList/ItemList'
import { useSelector } from 'react-redux';


const SearchResults = () => {
  const {songData, albumData, artistData, playlistData} = useSelector((state:any)=>state.searchResults)
  return (
    <>

      {
        songData.length && songData[4] &&
        <Link className={s.links} to={'/moreinfotracks'}>
          <div className={s.sectionTitle}>{`Tracks >`}</div>
        </Link>
      }

      {
        songData.length && test.tracks.slice(0, 4).map(song => {
          return <ItemList position={song.track_position} image={song.artist.picture} name={song.title} timeLapse={song.duration} />
        })
      }
      {
        artistData.length && artistData[4] &&
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
        albumData.length && albumData[4] &&
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