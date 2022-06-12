import { Actions, ActionType } from "../actions/types";
import * as types from "./types"  //tipos del state   NO BORRAR

//tengo que importar las interfaces de las propiedades dentro de los objetos del initial state

//necesito los actions types para seguir agregando switch cases 

interface State {
  query: string,
  searchResults: any,
  album_playlist: swPlaylist[],
  library_artist: types.LibraryArtist,
  queue: swSong[],
  home: types.Home,
  adminOption: types.AdminOption,
  prevPlay: object

}

const initialState: State = {
  query: '',   //párametro de búsqueda : string
  queue: [],   //cola de reproduccion : track[]
  searchResults:{}, 
  // {
  //   artistData: [],  //  artist[]
  //   albumData: [],   //  album[]
  //   songData: [],   //  track[]
  //   playlistData: []
  // },
  album_playlist: [], // track[]
  library_artist: {
    list: [], // favs   -  top       // track[]
    card: []  // playlist - albums   // album[]
  },
  home: {
    last: [],
    genres: [],
    chart: []
  },
  adminOption:{home:true,user:false},
  prevPlay: {}
};

const Reducer = (state: any = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.GET_GENRES:
      return {
        ...state,
        home: {
          ...state.home, genres: action.payload,
        }
      };
    case ActionType.GET_LAST_SONGS:
      return {
        ...state,
        home: {
          ...state.home, last: action.payload,
        }
      };
    case ActionType.GET_CHART:
      return {
        ...state,
        home: {
          ...state.home, chart: action.payload,
        }
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
    case ActionType.SEND_PREV_PLAY:
      return{
        ...state,
        prevPlay: action.payload
      }
    case ActionType.PLAY_SONG:
      return{
        ...state,
        queue: [action.payload]
      }
    case ActionType.ADD_TO_QUEUE:
      return{
        ...state,
        queue: [...state.queue, action.payload]
      }
    case ActionType.SEARCH_ALL:
    return {
        ...state,
        query: action.payload.query,
        searchResults: action.payload.data
      }
    default:
      return state;
  }
};

export default Reducer;
