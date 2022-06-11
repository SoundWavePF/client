import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";

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
