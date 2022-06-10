import { Actions, ActionType } from "../actions/types";


//tengo que importar las interfaces de las propiedades dentro de los objetos del initial state

//necesito los actions types para seguir agregando switch cases 



interface State {
  query: string,
  searchResults: object,
  album_playlist: object[],
  library_artist: object,
  queue: object[],
  genres?: swGenre[]
}

const initialState: State = {
  query: '',   //párametro de búsqueda : string
  queue: [],   //cola de reproduccion : track[]
  searchResults: {
    artists: [],  //  artist[]
    albums: [],   //  album[]
    tracks: [],   //  track[]
  },
  album_playlist: [], // track[]
  library_artist: {
    list: [], // favs   -  top       // track[]
    card: []  // playlist - albums   // album[]
  },
  genres: [],
  //adminOption:{home:true,user:false},
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
