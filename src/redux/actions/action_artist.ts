import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";

export const getArtist = (id:any)=>{
  return(dispatch: Dispatch<any>)=>{
    axios.get('https://api-production-b004.up.railway.app/artist/'+id)
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
    axios.get('https://api-production-b004.up.railway.app/artist/'+id+'/top')
    .then(response => 
      dispatch({
        type: ActionType.GET_ARTIST_TOP,
        payload: response.data
      })
      )
  }
}
export const changeAbout = (email: string, description: string, name: string, img:string, data?:any) => {
  return async (dispatch: Dispatch<Actions>) => {
    let image = img;
    if (data) {
      const remote = await axios.post("https://api.cloudinary.com/v1_1/dbi1xhzps/image/upload", data);
      image = remote.data?.secure_url
    }
    axios.post('https://api-production-b004.up.railway.app/artistpanel/profile/update', {email, description, name, image})
    .then(response => {
        dispatch({
          type: ActionType.CHANGE_ABOUT,
          payload: response
        })
        dispatch({
          type: ActionType.UPDATE_LIBRARY,
        })
      }
    )
  }
}
export const updateSong = (info: any) => {
  return (dispatch: Dispatch<Actions>) => {
    axios.post("https://api-production-b004.up.railway.app/artistpanel/song/update",{
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
      axios.get(`https://api-production-b004.up.railway.app/album/${id}`)
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
    
    const update = await axios.post("https://api-production-b004.up.railway.app/artistpanel/song/create", payload)
    console.log("la actioooooooooooooooooooon", update);
    return {
      type: ActionType.UPLOAD_SONG,
      payload: update
    }
  }
}
export const getPanelInfo = (id: string, email:string)=>{
  return(dispatch: Dispatch<any>)=>{
    // let promiseContent = axios.get('https://api-production-b004.up.railway.app/artist/'+id);
    // let promiseInfo = axios.post('https://api-production-b004.up.railway.app/artistpanel/stats', {email: email});
    // Promise.all([promiseContent, promiseInfo])
    axios.post('https://api-production-b004.up.railway.app/artistpanel/stats', {email: email})
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
    axios.post("https://api-production-b004.up.railway.app/artistpanel/album/create", obj)
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
export const updateAlbum = (info: any, data: any, img?:any) => {
  return async (dispatch: Dispatch<Actions>) => {
    let image = '';
    if (!img) {
    const remote = await axios.post("https://api.cloudinary.com/v1_1/dbi1xhzps/image/upload", data);
    image = remote.data?.secure_url;
    } else {
      image = img;
    }
    const obj = {
      email: info.email,
      albumId: info.id,
      albumName: info.name,
      albumReleaseDate: info.date,
      image,
      genreId: info.genre,
    };
    console.log('__send\n', obj);
    axios.post("https://api-production-b004.up.railway.app/artistpanel/album/update", obj)
    .then((response) =>
      console.log('res of create ',response)
    )
    .then((response) => {
        dispatch({
          type: ActionType.UPDATE_ALBUM,
        })
        dispatch({
          type: ActionType.UPDATE_LIBRARY,
        })
      }
    )
    .catch((error) => console.log(error));
  };
};
export const uploadMusic = (info: any, data: any) => {
  return async function (dispatch: Dispatch<Actions>) {
    const remote = await axios.post("https://api.cloudinary.com/v1_1/dbi1xhzps/video/upload", data);
    const obj = {
      userEmail: info.email,
      songName: info.name,
      duration: remote.data?.duration,
      preview: remote.data?.secure_url,
      albumId: info.albumId,
    };
    console.log('__send\n', obj);
    axios.post("https://api-production-b004.up.railway.app/artistpanel/song/create", obj)
    .then((response) =>
      console.log('res of create ',response)
    )
    .then((response) =>
      dispatch({
        type: ActionType.UPLOAD_MUSIC,
      })
    )
    .catch((error) => console.log(error));
  }
}
export const uploadNewAlbum = (email: string, name: string, songs: any) => {
  return async function (dispatch: Dispatch<Actions>) {

    //const remote = await axios.post("https://api.cloudinary.com/v1_1/dbi1xhzps/video/upload", data);
    let promises = await Promise.all(songs.map((e:any) => axios.post("https://api.cloudinary.com/v1_1/dbi1xhzps/video/upload", e.data)))
    let send = promises.map((e:any, i:number) => {return {duration:e.data?.duration, preview: e.data?.secure_url, songName:songs[i].name}})

    const obj = {
      userEmail: email,
      albumName: name,
      songs: send,
    };
    console.log('__send\n', obj);
    axios.post("https://api-production-b004.up.railway.app/artistpanel/song/createAlbum", obj)
    .then((response) =>
      console.log('res of create ',response)
    )
    .then((response) => {
        dispatch({
          type: ActionType.UPLOAD_NEW_ALBUM,
        })
        dispatch({
          type: ActionType.UPDATE_LIBRARY,
        })
      }
    )
    .catch((error) => console.log(error));
  }
}
export const deleteSong = (email: string, id: string) => {
  return (dispatch: Dispatch<Actions>) => {
    console.log(email, id)
    axios.post("https://api-production-b004.up.railway.app/artistpanel/song/delete",{
      email: email,
      songId: id,
    })
    .then((response) =>
      console.log('res of update ',response)
    )
    .then((response) => {
        dispatch({
          type: ActionType.DELETE_SONG,
        })
        dispatch({
          type: ActionType.UPDATE_LIBRARY,
        })
      }
    )
    .catch((error) => console.log(error));
  };
};
export const deleteAlbum = (email: string, id: string) => {
  return (dispatch: Dispatch<Actions>) => {
    console.log(email, id)
    axios.post("https://api-production-b004.up.railway.app/artistpanel/album/delete",{
      email: email,
      albumId: id,
    })
    .then((response) =>
      console.log('res of update ',response)
    )
    .then((response) => {
        dispatch({
          type: ActionType.DELETE_ALBUM,
        })
        dispatch({
          type: ActionType.UPDATE_LIBRARY,
        })
      }
    )
    .catch((error) => console.log(error));
  };
};
