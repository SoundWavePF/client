import { Actions, ActionType } from "../actions/types";

//tengo que importar las interfaces de las propiedades dentro de los objetos del initial state

//necesito los actions types para seguir agregando switch cases 



interface State {
  query: string,
  searchResults: object,
  album_playlist: object[],
  library_artist: object,
  queue: object[],
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
};


const Reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.GET_MUSIC:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
