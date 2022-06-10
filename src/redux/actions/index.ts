import { Dispatch } from "react";
import { ActionType, Actions, userOption } from "./types";
import genres from './hc_data/genres.json';
import albums from './hc_data/albums.json';
import axios from "axios";

export const getMusic = ()=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
      type: ActionType.GET_MUSIC,
      payload: genres.data
    })

  }
  
}
export const changeAdminOption = (userOption:userOption)=>{
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
export const searchAll = (input:string)=>{ //hasta que no halla back el axios queda comentado
  return(dispatch: Dispatch<Actions>)=>{
    axios.get(`http://localhost:3001/search?all=${input}`)
    .then(response => dispatch({
      type: ActionType.SEARCH_ALL,
      payload: response.data
    })
    )
    .catch((error)=>console.log(error))
  }
}