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
export const uploadSong = (payload: any) => {
  return async function (dispatch: Dispatch<Actions>) {
    console.log(payload);
    
    const update = await axios.post("https://www.javierochoa.me/artistpanel/song/create", payload)
    console.log("la actioooooooooooooooooooon", update);
    return {
      type: ActionType.UPLOAD_SONG,
      payload: update
    }
  }
}
export const getPanelInfo = (id: string, email:string)=>{
  return(dispatch: Dispatch<any>)=>{
    // let promiseContent = axios.get('https://www.javierochoa.me/artist/'+id);
    // let promiseInfo = axios.post('https://www.javierochoa.me/artistpanel/stats', {email: email});
    // Promise.all([promiseContent, promiseInfo])
    axios.post('https://www.javierochoa.me/artistpanel/stats', {email: email})
    .then(response =>
      dispatch({
        type: ActionType.GET_PANEL_INFO,
        payload: response.data,
      })
    )
  }
}
export const launchPopUp = (type: string | boolean , item?: any) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.LAUNCH_POP_UP,
      payload: {type, item}
    })
  };
};
export const setFiltered = (value: any) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.SET_FILTERED,
      payload: value
    })
  };
};
export const createAlbum = (info: any, data: any) => {
  return async (dispatch: Dispatch<Actions>) => {
    const remote = await axios.post("https://api.cloudinary.com/v1_1/dbi1xhzps/image/upload", data);
    const obj = {
      userEmail: info.email,
      albumName: info.name,
      albumReleaseDate: info.date,
      image: remote.data?.secure_url,
      genreId: info.genre,
    };
    console.log('__send\n', obj);
    axios.post("https://www.javierochoa.me/artistpanel/album/create", obj)
    .then((response) =>
      console.log('res of create ',response)
    )
    .then((response) =>
      dispatch({
        type: ActionType.CREATE_ALBUM,
      })
    )
    .catch((error) => console.log(error));
  };
};
