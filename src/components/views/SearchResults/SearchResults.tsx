import s from './SearchResults.module.css'

import { Link } from 'react-router-dom'
import ItemList from '../../commons/CardsComponents/ItemList/ItemList';
import { useSelector } from 'react-redux'
import { useState } from 'react';


const SearchResults = () => {
  const { songData, artistData, albumData} = useSelector((state: any) => state.searchResults)
  const [showMore,setShowMore] = useState({
    tracks: false,
    artists: false,
    albums:false
  })
  const onClickShowMore = (e:any) =>{
    if(e.target.value==='tracks'){
      showMore.tracks? setShowMore({...showMore, tracks:false}) : setShowMore({...showMore, tracks:true})
    }
    if(e.target.value==='artists'){
      showMore.artists? setShowMore({...showMore, artists:false}) : setShowMore({...showMore, artists:true})
    }
    if(e.target.value==='albums'){
      showMore.albums? setShowMore({...showMore, albums:false}) : setShowMore({...showMore, albums:true})
    }
  }
  if(songData || artistData || albumData)
  return (
    <div className={s.divContainer}>
      {
        (songData.length<1 && artistData.length<1 && albumData.length<1) &&
        <div className={s.sectionTitle}>No Results Found.</div>
      }
      {
        songData.length>0 &&
        <div className={s.divText}>
          <button onClick={onClickShowMore} value='tracks' className={s.sectionTitle}>{`Tracks >`}</button>
        </div>
      }

      {
        showMore.tracks? 
        songData.slice(0, 10).map((song: any) =><ItemList item={song}/>) :
        songData.slice(0, 3).map((song: any) =><ItemList item={song}/>)
      }
      {
        artistData.length>0 &&
        <div className={s.divText}>
          <button onClick={onClickShowMore} value='artists' className={s.sectionTitle}>{`Artist >`}</button>
        </div>
      }
      {
        showMore.artists? 
        artistData.slice(0, 10).map((artist: any) =><ItemList item={artist}/>) :
        artistData.slice(0, 3).map((artist: any) =><ItemList item={artist}/>)
      }
      {
        albumData.length>0 &&
        <div className={s.divText}>
          <button onClick={onClickShowMore} value='albums' className={s.sectionTitle}>{`Albums >`}</button>
        </div>
      }
      {
        showMore.albums? 
        albumData.slice(0, 10).map((album: any) =><ItemList item={album}/>) :
        albumData.slice(0, 3).map((album: any) =><ItemList item={album}/>)
      }
    </div>
  )
  else return(
    <div className={s.divContainer}>
      <div className={s.sectionTitle}>Loading...</div>
    </div>
  )
}

export default SearchResults