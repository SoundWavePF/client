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
    axios.post('https://api-production-b004.up.railway.app/admin/users',{adminEmail:email})
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
    axios.post('https://api-production-b004.up.railway.app/admin/stats',{adminEmail:email})
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
    axios.post('https://api-production-b004.up.railway.app/admin/validate',{userEmail:email})
    .then(response => 
      dispatch({
        type: ActionType.USER_ADMIN,
        payload: response.data.isAdmin,
      })
    );
  };
};
