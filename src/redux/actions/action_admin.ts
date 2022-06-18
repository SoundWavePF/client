import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";

export const changeAdminOption = (userOption:any)=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
      type: ActionType.CHANGE_ADMIN_OPTION,
      payload: userOption
    })
  }
}
export const getAllUsers = (email:string)=>{
  return(dispatch: Dispatch<any>)=>{
    axios.post('http://143.198.158.238:3001/admin/users',{adminEmail:email})
    .then(response => 
      dispatch({
        type: ActionType.GET_ALL_USERS,
        payload: response.data,
      })
    );
  };
};
export const getStats = (email:string)=>{
  return(dispatch: Dispatch<any>)=>{
    axios.post('http://143.198.158.238:3001/admin/stats',{adminEmail:email})
    .then(response => 
      dispatch({
        type: ActionType.GET_STATS,
        payload: response.data,
      })
    );
  };
};
