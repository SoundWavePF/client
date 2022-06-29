import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Styled from './ArtistPage.module.css'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actionCreator from '../../../redux/actions/action_artist'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ArtistCardContainer from './ArtistCardContainer/ArtistCardContainer';
import DonationsButton from './DonationsButton/DonationsButton';
import { useAuth0 } from '@auth0/auth0-react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'


export const ArtistPage = () => {
  const { id } = useParams()
  const artist = useSelector((state: any) => state.artist)
  const dispatch = useDispatch();
  const { getArtist, getArtistTop } = bindActionCreators(actionCreator, dispatch);
  const [option, setOption] = useState('Top')
  const { user, isAuthenticated } = useAuth0()

  useEffect(() => {
    getArtist(id)
    getArtistTop(id)
  }, [])
  if(artist.image_big){
    return (
      <div className={Styled.ContainerLibrary} >
        <div className={Styled.User} >
          <div className={Styled.ImageDonation}>
            <img src={artist.image_medium} alt="" />
              {
                artist.stripe_Id?
                <DonationsButton stripeId={artist.stripe_Id} artistId={artist.id} userEmail={user?.email} />
                :null
              }
          </div>
          <div>
            <h1>{artist.name}</h1>
            <p>{artist.description}</p>
          </div>
        </div>
        <div className={Styled.ToolBar}>
          <button onClick={(e: any) => setOption(e.target.value)} value='Top'>Top 5</button>
          <button onClick={(e: any) => setOption(e.target.value)} value='Albums'>Albums</button>
          <button onClick={(e: any) => setOption(e.target.value)} value='Singles'>Singles</button>
          <button className={Styled.descriptionTab} onClick={(e: any) => setOption(e.target.value)} value='Description'>Description</button>
          <button className={Styled.donations} onClick={(e: any) => setOption(e.target.value)} value='Donations'>Donations</button>
        </div>
        <ArtistCardContainer props={option} />
      </div>
    )
  }
  else{
    return(
      <LoadingSpinner/>
    )
  }
}
