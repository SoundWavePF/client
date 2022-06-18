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
export const getAllUsers = (email:any)=>{
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
export const getStats = (email:any)=>{
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
export const userAdmin = (email:any)=>{
  return(dispatch: Dispatch<any>)=>{
    axios.post('http://143.198.158.238:3001/admin/validate',{userEmail:email})
    .then(response => 
      dispatch({
        type: ActionType.USER_ADMIN,
        payload: response.data.isAdmin,
      })
    );
  };
};
