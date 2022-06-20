import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";

export const getArtist = (id:any)=>{
  return(dispatch: Dispatch<any>)=>{
    axios.get('https://www.javierochoa.me/artist/'+id)
    .then(response => 
      dispatch({
        type: ActionType.GET_ARTIST,
        payload: response.data
      })
      )
  }
}
export const getArtistTop = (id:any)=>{
  return(dispatch: Dispatch<any>)=>{
    axios.get('https://www.javierochoa.me/artist/'+id+'/top')
    .then(response => 
      dispatch({
        type: ActionType.GET_ARTIST_TOP,
        payload: response.data
      })
      )
  }
}
export const changeAbout = (email: string, description: string) => {
  return(dispatch: Dispatch<Actions>) => {
    axios.post('https://www.javierochoa.me/artistpanel/description', {email: email, description: description})
    .then(response => 
      dispatch({
        type: ActionType.CHANGE_ABOUT,
        payload: response
      }))
  }
}
export const updateSong = (info: any) => {
  return (dispatch: Dispatch<Actions>) => {
    axios.post("https://www.javierochoa.me/artistpanel/song/update",{
      email: info.email,
      songId: info.id,
      songName: info.name,
      albumId: info.album,
    })
    .then((response) =>
      console.log('res of update ',response)
    )
    .then((response) =>
      dispatch({
        type: ActionType.UPDATE_SONG,
      })
    )
    .catch((error) => console.log(error));
  };
};
export const localLoadedAlbum = (id: string | boolean) => {
  if (typeof id === 'boolean'){
    return (dispatch: Dispatch<Actions>) => {
      dispatch({
        type: ActionType.LOCAL_LOADED_ALBUM,
        payload: id,
      })
    };
  } else {
    return (dispatch: Dispatch<Actions>) => {
      axios.get(`https://www.javierochoa.me/album/${id}`)
        .then(response =>
        dispatch({
          type: ActionType.LOCAL_LOADED_ALBUM,
          payload: response.data,
        })
      )
    };
  }
};
