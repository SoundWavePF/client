import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Styled from './ArtistPage.module.css'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actionCreator from '../../../redux/actions/action_artist'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ArtistCardContainer from './ArtistCardContainer/ArtistCardContainer';


export const ArtistPage = () => {
  const { id } = useParams()
  const artist = useSelector((state: any) => state.artist)
  const location = useLocation()
  const dispatch = useDispatch();
  const { getArtist, getArtistTop } = bindActionCreators(actionCreator, dispatch);
  const [option, setOption] = useState('Top')
  useEffect(() => {
    getArtist(id)
    getArtistTop(id)
  }, [])
  return (
    <div className={Styled.ContainerLibrary} >
      <div className={Styled.User} >
        <img src={artist.image_big} alt="" />
        <h1>{artist.name}</h1>
      </div>
      <div className={Styled.ToolBar}>
        <button onClick={(e: any) => setOption(e.target.value)} value='Top'>Top 5</button>
        <button onClick={(e: any) => setOption(e.target.value)} value='Albums'>Albums</button>
        <button onClick={(e: any) => setOption(e.target.value)} value='Singles'>Singles</button>
        <button onClick={(e: any) => setOption(e.target.value)} value='Description'>Description</button>
      </div>
      <ArtistCardContainer props={option} />
    </div>
  )
}