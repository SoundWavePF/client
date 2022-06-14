import { Dispatch } from "react";
import { ActionType, Actions } from "./types";
import axios from "axios";

const se= {
  method: 'get',
  url: 'http://localhost:3001/favorite',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
}


var searchRecord = {
  owner: 'wxTWH8zqSwaIXPAVsjZoRCkvjx73',
  date: '2021-09-02',
};

var config = {
  method: 'get',
  url: 'http://localhost:3001/favorite',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {s:"searchRecord"},
};

export const getLibrary = ()=>{ 
    return(dispatch: Dispatch<Actions>)=>{
    const favorite=  axios.get( 'http://localhost:3001/favorite')
    const playlist=  axios.get( 'http://localhost:3001/playlist/04bb097e-779c-4610-8bfd-e03c875c683b')
      

      Promise.all([favorite,playlist])


      .then(response =>
        dispatch({
        type: ActionType.GET_LIBRARY,
        payload: {uno:response[0].data, dos: response[1].data} as any
      })
      )
      .catch((error)=>console.log(error))
    }
  }
 