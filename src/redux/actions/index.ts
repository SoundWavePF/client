import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import * as hc from './hc_data';
//ej    hc.albumSongs   album con sus canciones como lo enviaría el back
//ej    hc.songList     un arreglo con 12 canciones 
//ej    hc.userList     un arreglo con 100 usuarios para el panel admin
// manden un console.log para ver los otros
import axios from "axios";

export const getGenres = ()=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
      type: ActionType.GET_GENRES,
      payload: hc.genres      ////aquí envío los 5 generos por ej
    })
  }
}
export const changeAdminOption = (userOption:any)=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
      type: ActionType.CHANGE_ADMIN_OPTION,
      payload: userOption
    })
  }
}
export const postSignUp = (form:any)=>{ //hasta que no halla back el axios queda comentado
  return(dispatch: Dispatch<Actions>)=>{
    // axios.post('',form)
    // .then(response => dispatch({
    //   type: ActionType.CHANGE_ADMIN_OPTION,
    //   payload: response.data
    // }))
    // .catch((error)=>console.log(error))
    dispatch({
        type: ActionType.POST_SIGN_UP,
        payload: form
      })
  }
}
export const postLogin = (form:any)=>{ //hasta que no halla back el axios queda comentado
  return(dispatch: Dispatch<Actions>)=>{
    // axios.post('',form)
    // .then(response => dispatch({
    //   type: ActionType.CHANGE_ADMIN_OPTION,
    //   payload: response.data
    // }))
    // .catch((error)=>console.log(error))
    dispatch({
        type: ActionType.POST_LOGIN,
        payload: form
      })
  }
}