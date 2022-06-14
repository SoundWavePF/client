import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";

let PonerID='c4e21a84-895a-4095-b6f5-64c91dd81e76'

export const getLibrary = ()=>{ //hay que poner el id del usuario creado hasta que se pueda haceder a el
    return(dispatch: Dispatch<Actions>)=>{

    const favorite=  axios.post( 'http://localhost:3001/favorite', {

      userId: PonerID,
    })
    const playlist=  axios.post( 'http://localhost:3001/playlist',
    {

      userId: PonerID,
    })
      

      Promise.all([favorite,playlist])


      .then(response =>
        dispatch({
        type: ActionType.GET_LIBRARY,
        payload: {favorite:response[0].data, playlist: response[1].data} as any
      })
      )
      .catch((error)=>console.log(error))
    }
  }
 
  
export const getPlaylist = (id:any)=>{ 
  return(dispatch: Dispatch<Actions>)=>{

  axios.get( `http://localhost:3001/playlist/${id}`)


    .then(response =>
      dispatch({
      type: ActionType.GET_PlaylistForId,
      payload: response.data
    })
    )
    .catch((error)=>console.log(error))
  }
}