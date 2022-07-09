import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";
import useAuth0 from "@auth0/auth0-react";

export const getLibrary = (email: string) => {
  //hay que poner el id del usuario creado hasta que se pueda haceder a el
  return (dispatch: Dispatch<Actions>) => {
    const favorite = axios.post("https://api-production-b004.up.railway.app/favorite", {
      email: email,
    });
    const playlist = axios.post("https://api-production-b004.up.railway.app/playlist", {
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
    axios
      .get(`https://api-production-b004.up.railway.app/playlist/${id}`)
      .then((response) =>
        dispatch({
          type: ActionType.GET_PlaylistForId,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  };
};
export const newPlaylist = (email: string, playlistName: string, firtsSongId: any) => {
  return (dispatch: Dispatch<Actions>) => {
    axios
      .post("https://api-production-b004.up.railway.app/playlist/create", {
        email: email,
        playlistName: playlistName,
      })
      .then((response) => {
        dispatch({
          type: ActionType.NEW_PLAYLIST,
          payload: response.data,
        })
        if(firtsSongId) {
          axios.post('https://api-production-b004.up.railway.app/playlist/add', { playlistId: response.data.id, songId: firtsSongId })
          .then(response => dispatch({
            type: ActionType.ADD_TO_PLAYLIST,
            payload: response.data
          }))
        }
      }
      );
  };
};
export const deletePlaylist = (id: string) => {
  return (dispatch: Dispatch<Actions>) => {
    axios
      .post("https://api-production-b004.up.railway.app/playlist/delete", {
        playlistId: id,
      })
      .then((response) =>
        dispatch({
          type: ActionType.DELETE_PLAYLIST,
          payload: id,
        })
      );
  };
};
export const updateUser = (payload: any) => {
  console.log(payload)
  return async function (dispatch: Dispatch<Actions>) {

    const update = await axios.post(
      "https://api-production-b004.up.railway.app/update",
      payload
    );
    return {
      type: ActionType.UPDATE_USER,
      payload: update,
    };
  };
};
export const getUserInfo = (email: any) => {
  //hay que poner el id del usuario creado hasta que se pueda haceder a el
  return  (dispatch: Dispatch<Actions>) => {
    axios.post("https://api-production-b004.up.railway.app/info", {
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
