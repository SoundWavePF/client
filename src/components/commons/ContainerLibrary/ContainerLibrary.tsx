import React, { useEffect, useState } from 'react'
import { ListItem } from 'react-bootstrap/lib/Media'
import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CardItem from '../CardItem/CardItem'
import ItemList from '../CardsComponents/ItemList/ItemList'
import Styled from '../ContainerLibrary/ContainerLibrary.module.css'
import  M from "../../../redux/actions/hc_data/playlistSongs.json";
import jsonsong from '../../../redux/actions/hc_data/songList.json'
import ContentAlbumPlaylist from '../ContentAlbumPlaylist/ContentAlbumPlaylist'
import AlbumCard from '../CardsComponents/AlbumCard/AlbumCard'
// import { CardPlaylist } from '../CardPlaylist/CardPlaylist'
import CardContainer from '../CardContainer/CardContainer'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actionCreator from '../../../redux/actions/action_user'
import { useSelector } from 'react-redux'



const item =[

{
  id: 2,
  name: "David",
  title:"hola",
  image_medium:'http://i.pravatar.cc/150?u=under',
  picture_medium: 'http://i.pravatar.cc/150?u=under',
  type: 'album',
},

{
  id: 2,
  name: "David",
  title:"hola",
  image_medium:'http://i.pravatar.cc/150?u=under',
  picture_medium: 'http://i.pravatar.cc/150?u=under',
  type: 'album',
},

{
  id: 2,
  name: "David",
  title:"hola",
  image_medium:'http://i.pravatar.cc/150?u=under',
  picture_medium: 'http://i.pravatar.cc/150?u=under',
  type: 'album',
},

{
  id: 2,
  name: "David",
  title:"hola",
  image_medium:'http://i.pravatar.cc/150?u=under',
  picture_medium: 'http://i.pravatar.cc/150?u=under',
  type: 'album',
},

{
  id: 1,
  name: "ben",
  title:"saoko",
  image_medium:'http://i.pravatar.cc/150?u=modern',
  picture_medium: 'http://i.pravatar.cc/150?u=under',
  type: 'album',
}

]

const favs =[
  { type:"track",
  album:{image_small: 'http://i.pravatar.cc/150?u=modern'},
  title: "saoko",
  duration:"222"},
  { type:"track",
  album:{image_small: 'http://i.pravatar.cc/150?u=under'},
  title: "tamochelo",
  duration:"222"},
  { type:"track",
  album:{image_small: 'http://i.pravatar.cc/150?u=dance'},
  title: "wanki",
  duration:"222"},
  { type:"track",
  album:{image_small: 'http://i.pravatar.cc/150?u=mars'},
  title: "yo se que puedo volar",
  duration:"222"}
]







const initialState = [
  {
  

      image:'http://i.pravatar.cc/150?u=under', 
      title:'Under Pressure',
      duration:"290"
  },
  {
      image_small: 'http://i.pravatar.cc/150?u=modern',
      title: 'Modern Love (2018 Remaster)',
      duration: "310"
  },
  {
    image:'http://i.pravatar.cc/150?u=under', 
    title:'Under Pressure',
    duration:"290"
  },
  {
      image_small: 'http://i.pravatar.cc/150?u=dance',
      title: 'Lets Dance (2018 Remaster)',
      timeLapse: "320"
  },
  {
      position: 5,
      image: 'http://i.pravatar.cc/150?u=china',
      name: 'China Girl (2018 Remaster)',
      timeLapse: "340"
  },
  {
      position: 6,
      image: 'http://i.pravatar.cc/150?u=rebel',
      name: 'Rebel Rebel (1999 Remaster)',
      timeLapse: "300"
  },
  {
      position: 7,
      image: 'http://i.pravatar.cc/150?u=mars',
      name: 'Life on Mars? (2015 Remaster)',
      timeLapse: "242"
  },
]

let user={
  id:2,
  playlist:[initialState[0],initialState[2]],
  favorites:favs
}




export const ContainerLibrary = () => {

  const state = useSelector((state):any=>state)
  const location = useLocation()
  const dispatch = useDispatch();
 const  { getLibrary } = bindActionCreators(actionCreator,dispatch);
  useEffect(()=>{
    getLibrary()
  },[])
  

switch (location.pathname) {
  case '/favorites':
    
    return (
      <div className={Styled.ContainerLibrary} >
  
  <div  className={Styled.User} >
    <img src="https://cdn.discordapp.com/attachments/974053763335716884/985759356895260713/token_1_3.png" alt="" />
    {/* <h1>{state.library_artist.card.User.username && state.library_artist.card.User.username}</h1> */}
    
     </div>
  
      <div className={Styled.ToolBar}>
  
      <div> <NavLink to={'/favorites'}   > <h4 className={Styled.actived } >Favorite songs</h4></NavLink> </div>
      <div> <NavLink to={'/playlists'}   > <h4 className={Styled.desatived } >Playlists</h4></NavLink> </div>
      </div>

  
          <div className={Styled.Column}>
          <h4>Name</h4>
          <h4>Duration</h4>

          </div>


      {state.library_artist.list.liked_songs && state.library_artist.list.liked_songs.map((s:any)=>(  <div className={Styled.ContainerFavorite}> <ItemList item={s}></ItemList> </div>   ) )}





      </div>
    )

  case '/playlists':

    return (
    <div className={Styled.ContainerLibrary} >

<div  className={Styled.User} >
    <img src="https://cdn.discordapp.com/attachments/974053763335716884/985759356895260713/token_1_3.png" alt="" />
    {/* <h1>{state.library_artist.card.User.username && state.library_artist.card.User.username}</h1> */}
    
     </div>

    <div className={Styled.ToolBar}>

    <div> <NavLink to={'/favorites'}   > <h4 className={ Styled.desatived } >Favorite songs</h4></NavLink> </div>
    <div> <NavLink to={'/playlists'}   > <h4 className={ Styled.actived } >Playlists</h4></NavLink> </div>
    </div>


      <div className={Styled.ContainerPlaylist}>

      {state.library_artist.card && <CardItem  item={state.library_artist.card}></CardItem> }
    </div>

    </div>
  )

  


  



  default:
    return(<div></div>)
}

}
