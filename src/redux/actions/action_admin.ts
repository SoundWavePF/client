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
