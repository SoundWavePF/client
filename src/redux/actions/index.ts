import { Dispatch } from "react";
import { ActionType, Actions, userOption } from "./types";
import genres from './hc_data/genres.json';
import albums from './hc_data/albums.json';

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