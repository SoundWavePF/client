import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";
import useAuth0 from '@auth0/auth0-react';


export const getLibrary = (email: string) => {
  //hay que poner el id del usuario creado hasta que se pueda haceder a el
  return (dispatch: Dispatch<Actions>) => {
    const favorite = axios.post("https://www.javierochoa.me/favorite", {
      email: email,
    });
    const playlist = axios.post("https://www.javierochoa.me/playlist", {
      email: email,
    });
    Promise.all([favorite, playlist])
      .then((response) =>
        dispatch({
          type: ActionType.GET_LIBRARY,
          payload: {
            favorite: response[0].data,
            playlist: response[1].data,
          } as any,
        })
      )
      .catch((error) => console.log(error));
  };
};
export const getPlaylist = (id: any) => {
  return (dispatch: Dispatch<Actions>) => {
    axios.get(`https://www.javierochoa.me/playlist/${id}`)
      .then((response) =>
        dispatch({
          type: ActionType.GET_PlaylistForId,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  };
};
export const newPlaylist = (email: string, playlistName: string) => {
  return (dispatch: Dispatch<Actions>) => {
    axios.post('https://www.javierochoa.me/playlist/create', { email: email, playlistName: playlistName })
      .then(response => dispatch({
        type: ActionType.NEW_PLAYLIST,
        payload: response.data
      }))
  }
}
export const updateUser = (payload: any) => {
  return async function (dispatch: Dispatch<Actions>) {
    const update = await axios.post("https://www.javierochoa.me/update", payload)
    return {
      type: ActionType.UPDATE_USER,
      payload: update
    }
  }
}
export const getUserInfo = (email: string) => {
  //hay que poner el id del usuario creado hasta que se pueda haceder a el
  return (dispatch: Dispatch<Actions>) => {
    axios.post("https://www.javierochoa.me/info", {
      email: email,
    }).then((response) =>
        dispatch({
          type: ActionType.GET_USER_INFO,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  };
};
