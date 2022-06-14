import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";
import * as hc from "./hc_data";
//ej    hc.albumSongs   album con sus canciones como lo enviaría el back
//ej    hc.songList     un arreglo con 12 canciones
//ej    hc.userList     un arreglo con 100 usuarios para el panel admin
// manden un console.log para ver los otros

export const getGenres = () => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.GET_GENRES,
      payload: hc.genres, ////aquí envío los 5 generos por ej
    });
  };
};
export const getChart = () => {
  return (dispatch: Dispatch<any>) => {
    axios.get("http://localhost:3001/top").then((response) =>
      dispatch({
        type: ActionType.GET_CHART,
        payload: response.data,
      })
    );
  };
};

export const getLastSongs = () => {
  return (dispatch: Dispatch<any>) => {
    axios.get("http://localhost:3001/top").then((response) =>
      dispatch({
        type: ActionType.GET_LAST_SONGS,
        payload: response.data.reverse(),
      })
    );
  };
};

export const searchAll = (input: string) => {
  //hasta que no halla back el axios queda comentado
  return (dispatch: Dispatch<Actions>) => {
    axios.get(`http://localhost:3001/search?all=${input}`)
      .then((response) =>
        dispatch({
          type: ActionType.SEARCH_ALL,
          payload: { data: response.data, query: input },
        })
      )
      .catch((error) => console.log(error));
  };
};
export const sendPrevPlay = (
  isPlaying: boolean,
  currentTime: number,
  pos: number,
  volume: string
) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.SEND_PREV_PLAY,
      payload: { isPlaying, currentTime, pos, volume },
    });
  };
};
export const playSong = (data: swSong) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.PLAY_SONG,
      payload: data,
    });
  };
};
export const addToQueue = (data: swSong) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.ADD_TO_QUEUE,
      payload: data,
    });
  };
};
export const addToPlaylist = (playlistId: string, songId: string) => {
  return (dispatch: Dispatch<Actions>) => {
    axios.post('http://localhost:3001/playlist/add', {playlistId: playlistId, songId: songId})
    .then(response => dispatch({
      type: ActionType.ADD_TO_PLAYLIST,
      payload: response.data
    }))
  }
};
