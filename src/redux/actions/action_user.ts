import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";

export const getLibrary = (email: string) => {
  return (dispatch: Dispatch<Actions>) => {
    const favorite = axios.post(`${process.env.REACT_APP_BACK}/favorite`, {
      email: email,
    });
    const playlist = axios.post(`${process.env.REACT_APP_BACK}/playlist`, {
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
      .get(`${process.env.REACT_APP_BACK}/playlist/${id}`)
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
      .post(`${process.env.REACT_APP_BACK}/playlist/create`, {
        email: email,
        playlistName: playlistName,
      })
      .then((response) => {
        dispatch({
          type: ActionType.NEW_PLAYLIST,
          payload: response.data,
        })
        if(firtsSongId) {
          axios.post(`${process.env.REACT_APP_BACK}/playlist/add`, { playlistId: response.data.id, songId: firtsSongId })
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
      .post(`${process.env.REACT_APP_BACK}/playlist/delete`, {
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
  
  return async function (dispatch: Dispatch<Actions>) {

    const update = await axios.post(
      `${process.env.REACT_APP_BACK}/update`,
      payload
    );
    return {
      type: ActionType.UPDATE_USER,
      payload: update,
    };
  };
};
export const getUserInfo = (email: any) => {
  return  (dispatch: Dispatch<Actions>) => {
    axios.post(`${process.env.REACT_APP_BACK}/info`, {
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
