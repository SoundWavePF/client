import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";

export const postSignUp = (form:any)=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
        type: ActionType.POST_SIGN_UP,
        payload: form
      })
  }
}
export const postLogin = (form:any)=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
        type: ActionType.POST_LOGIN,
        payload: form
      })
  }
}
