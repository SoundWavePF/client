import { Actions, ActionType } from "../actions/types";
import * as types from "../../consts/sw_types"

//tengo que importar las interfaces de las propiedades dentro de los objetos del initial state

//necesito los actions types para seguir agregando switch cases 



interface State {
  query: string,
  searchResults: types.swSearchResult,
  album_playlist: types.swPlaylist[],
  library_artist: object,
  queue: object[],
  adminOption: types.swAdminOption,
}

const initialState: State = {
  query: '',   //párametro de búsqueda : string
  queue: [],   //cola de reproduccion : track[]
  searchResults: {
    artists: [],  //  artist[]
    albums: [],   //  album[]
    songs: [],   //  track[]
  },
  album_playlist: [], // track[]
  library_artist: {
    list: [], // favs   -  top       // track[]
    card: []  // playlist - albums   // album[]
  },
  adminOption:{home:true,user:false},
};


const Reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case ActionType.CHANGE_ADMIN_OPTION:
      return {
        ...state,
        adminOption: action.payload,
      };
    case ActionType.POST_SIGN_UP:
      console.log(action.payload) //hasta que no halla back solo consologea la info
      return{
        ...state
      }
    case ActionType.POST_LOGIN:
      console.log(action.payload) //hasta que no halla back solo consologea la info
      return{
        ...state
      }
    default:
      return state;
  }
};

export default Reducer;
