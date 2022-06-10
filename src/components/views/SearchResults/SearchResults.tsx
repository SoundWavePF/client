import React from 'react'

import ArtistCard from '../../commons/CardsComponents/ArtistCard/ArtistCard'
import AlbumCard from '../../commons/CardsComponents/AlbumCard/AlbumCard'
import s from './SearchResults.module.css'

import test from './test.json'
import { Link } from 'react-router-dom'
import ItemList from '../../commons/CardsComponents/ItemList/ItemList'
import jsonsong from './songList.json'
import jsonalbum from './albumList.json'
import jsonartist from './artistList.json'


const SearchResults = () => {

  return (
    <>

      {
        jsonsong.length>0 &&
        <Link className={s.links} to={'/moreinfotracks'}>
          <div className={s.sectionTitle}>{`Tracks >`}</div>
        </Link>
      }

      {
        jsonsong.slice(0, 4).map(song => {
          return <ItemList item={song}/>
        })
      }
      {
        jsonartist.length>0 &&
        <Link className={s.links} to={'/moreinfoartists'}>
          <div className={s.sectionTitle}>{`Artists >`}</div>
        </Link>
      }
      {
        jsonartist.slice(0, 4).map(artist => {
          return <ItemList item={artist}/>
        })
      }
      {
        jsonalbum.length>0 &&
        <Link className={s.links} to={'/moreinfoalbums'}>
          <div className={s.sectionTitle}>{`Albums >`}</div>
        </Link>
      }
      {
        jsonalbum.slice(0, 4).map(albums => {
          return <ItemList item={albums}/>
        })
      }
    </>
  )
}

export default SearchResults