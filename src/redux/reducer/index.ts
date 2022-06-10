import { Actions, ActionType, userOption } from "../actions/types";


//tengo que importar las interfaces de las propiedades dentro de los objetos del initial state

//necesito los actions types para seguir agregando switch cases 


interface Home {
  last?: swSong[],
  genres?: swGenre[],
  chart?: swSong[],
}
interface State {
  query: string,
  searchResults: object,
  album_playlist: object[],
  library_artist: object,
  queue: object[],
  home: Home,
  adminOption: userOption

}

const initialState: State = {
  query: '',   //párametro de búsqueda : string
  queue: [],   //cola de reproduccion : track[]
  searchResults: {
    songData: [],  //  track[]
    albumData: [],   //  album[]
    artistData: [],   //  artist[]
    playlistData: [], // playlist
  },
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
  adminOption:{home:true,user:false}, //opciones del componente AdminPanel

};


const Reducer = (state: State = initialState, action: Actions) => {
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
    case ActionType.SEARCH_ALL:
      return{
        ...state,
        searchResults:action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
