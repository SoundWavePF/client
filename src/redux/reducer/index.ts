import { Actions, ActionType } from "../actions/types";
import * as types from "./types"; //tipos del state   NO BORRAR

//tengo que importar las interfaces de las propiedades dentro de los objetos del initial state

//necesito los actions types para seguir agregando switch cases

interface State {
  query: string;
  searchResults: any;
  album_playlist: swAlbum | swPlaylist | any;
  playlist_update: any;
  library_artist: types.LibraryArtist | any;
  queue: swSong[];
  home: types.Home;
  adminOption: types.AdminOption;
  genre: any;
  top: any;
  users: any;
  loading: boolean;
  artist: any;
  artistTop: any;
  pageStats: any;
  user_info: any;
  userAdmin: boolean;
  panel_artist: any;
  player: any;
}

const initialState: State = {
  query: "", //párametro de búsqueda : string
  queue: [], //cola de reproduccion : track[]
  searchResults: {},
  // {
  //   artistData: [],  //  artist[]
  //   albumData: [],   //  album[]
  //   songData: [],   //  track[]
  //   playlistData: []
  // },
  album_playlist: {},
  playlist_update: [],
  library_artist: {
    list: [], // favs   -  top       // track[]
    card: [], // playlist - albums   // album[]
  },
  home: {
    last: [],
    discover: [],
    genres: [],
    chart: [],
    isLoading: true
  },
  adminOption: { home: true, user: false },
  genre: [],
  top: [],
  users: [],
  loading: false,
  artist: {},
  artistTop: {},
  pageStats: {},
  user_info: {},
  userAdmin: false,
  panel_artist: { loaded_album: false, pop_up: {}, info: {}, updated: false},
  player: {
    currentSongPosition: 0,
    isPlaying: false
  }
};

const Reducer = (state: any = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.USER_ADMIN:
      return {
        ...state,
        userAdmin: action.payload,
      };
    case ActionType.GET_STATS:
      return {
        ...state,
        pageStats: action.payload,
      };
    case ActionType.GET_ARTIST_TOP:
      return {
        ...state,
        artistTop: action.payload,
      };
    case ActionType.GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    case ActionType.CLEAN_GENRE:
      return {
        ...state,
        genre: [],
      };
    case ActionType.GET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.GET_GENRES:
      return {
        ...state,
        home: {
          ...state.home,
          genres: action.payload,
        },
      };
    case ActionType.GET_LAST_SONGS:
      return {
        ...state,
        home: {
          ...state.home,
          isLoading: false,
          last: Array.isArray(action.payload)? 
          action.payload : 
          [action.payload, ...state.home.last.filter( (song: any)=>action.payload?.id !== song?.id)],
        },
      };
    case ActionType.DISCOVER_SONGS:
      return {
        ...state,
        home: {
          ...state.home,
          discover: action.payload,
        },
      };
    case ActionType.GET_CHART:
      return {
        ...state,
        home: {
          ...state.home,
          chart: action.payload,
        },
      };
    case ActionType.CHANGE_ADMIN_OPTION:
      return {
        ...state,
        adminOption: action.payload,
      };
    case ActionType.POST_SIGN_UP:
      console.log(action.payload); //hasta que no halla back solo consologea la info
      return {
        ...state,
      };
    case ActionType.POST_LOGIN:
      console.log(action.payload); //hasta que no halla back solo consologea la info
      return {
        ...state,
      };
    case ActionType.PLAY_SONG:
      return {
        ...state,
        queue: [action.payload],
      };
    case ActionType.ADD_TO_QUEUE:
      return {
        ...state,
        queue: [...state.queue.filter( (song: swSong)=>song?.id !== action.payload?.id), action.payload],
      };
    case ActionType.DELETE_FROM_QUEUE:
      return {
        ...state,
        queue: state.queue.filter((song: any) => song.id !== action.payload),
      };
    case ActionType.SORT_QUEUE:
      return {
        ...state,
        queue: [...action.payload],
      };
    case ActionType.SEARCH_ALL:
      return {
        ...state,
        searchResults: action.payload,
      };
    case ActionType.GET_LIBRARY:
      return {
        ...state,
        library_artist: {
          list: action.payload.favorite,
          card: action.payload.playlist,
        },
      };
    case ActionType.GET_ALBUM_PLAYLIST:
      return {
        ...state,
        album_playlist: action.payload,
      };
    case ActionType.CLEAN_ALBUM_PLAYLIST:
      return {
        ...state,
        album_playlist: {},
      };
    case ActionType.GET_PlaylistForId:
      return {
        ...state,
        album_playlist: action.payload,
      };
    case ActionType.ADD_TO_PLAYLIST:
      // console.log(action.payload);
      return {
        ...state,
      };
    case ActionType.NEW_PLAYLIST:
      return {
        ...state,
        library_artist: {
          ...state.library_artist,
          card: [...state.library_artist.card, action.payload],
        },
      };
    case ActionType.DELETE_PLAYLIST:
      console.log(action.payload);
      return {
        ...state,
        library_artist: {
          ...state.library_artist,
          card: state.library_artist.card.filter(
            (e: any) => e.id !== action.payload
          ),
        },
      };
    case ActionType.UPDATE_PLAYLIST:
      return {
        ...state,
        playlist_update: action.payload,
      };
    case ActionType.GET_TOP:
      return {
        ...state,
        top: action.payload,
      };
    case ActionType.LIKE_SONG:
      return {
        ...state,
      };
    case ActionType.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case ActionType.GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionType.LOADING:
      if (action.payload) {
        return {
          ...state,
          loading: action.payload,
          searchResults: {},
        };
      } else {
        return {
          ...state,
          loading: action.payload,
        };
      }
    case ActionType.UPDATE_LIKE:
      return {
        ...state,
        library_artist: {
          ...state.library_artist,
          list: {
            ...state.library_artist.list,
            liked_songs: action.payload,
          },
        },
      };
    case ActionType.PLAY_ALL:
      return {
        ...state,
        queue: action.payload,
      };
    case ActionType.GET_USER_INFO:
      console.log(action.payload,"action.payload")
      return {
        ...state,
        user_info: action.payload,
      };
    case ActionType.CHANGE_ABOUT:
      return {
        ...state,
      };
    case ActionType.LOCAL_LOADED_ALBUM:
      if (typeof action.payload === "boolean") {
        if (action.payload) {
          return {
            ...state,
            panel_artist: {
              ...state.panel_artist,
              loaded_album: {flag: true}
            }
          }
        } else {
          return {
            ...state,
            panel_artist: {
              ...state.panel_artist,
              loaded_album: {flag: false}
            }
          }
        }
      } else {
        return {
          ...state,
          panel_artist: {
            ...state.panel_artist,
            loaded_album: {...state.panel_artist.loaded_album, data: action.payload},
          }
        }
      };
    case ActionType.GET_PANEL_INFO:
      let {albums, songs, description, name, image_medium, totalFavoriteCount,
        totalPlayCount, n_songs, n_albums, totalPlaylistCount, stripe_Id, donations} = action.payload;
      return{
        ...state,
        panel_artist: {
          ...state.panel_artist,
          albums,
          songs,
          info: {
            description,
            name,
            image_medium,
            totalFavoriteCount,
            totalPlayCount,
            n_songs, n_albums,
            totalPlaylistCount,
            stripe_Id,
            donations
          },
          updated: false
        }
      };
    case ActionType.LAUNCH_POP_UP:
      let {type, item} = action.payload;
      return{
        ...state,
        panel_artist: {
          ...state.panel_artist,
          pop_up: {type, item}
        }
      };
    case ActionType.SET_FILTERED:
      return{
        ...state,
        panel_artist: {
          ...state.panel_artist,
          filtered: action.payload
        }
      };
    case ActionType.UPDATE_SONG:
      return{
        ...state,
        panel_artist: {
          ...state.panel_artist,
          updated: true
        }
      };
    case ActionType.CREATE_ALBUM:
      return{
        ...state,
        panel_artist: {
          ...state.panel_artist,
          updated: true
        }
      };
    case ActionType.UPLOAD_MUSIC:
      return{
        ...state,
        panel_artist: {
          ...state.panel_artist,
          updated: true
        }
      };
    case ActionType.UPDATE_LIBRARY:
      return{
        ...state,
        panel_artist: {
          ...state.panel_artist,
          updated: true
        }
      };
    case ActionType.SET_CURRENT_SONG_POSITION:
        return{
          ...state,
          player: {
            ...state.player,
            currentSongPosition: action.payload,
          }
      };
    case ActionType.SET_PAUSE_PLAY:
        return{
          ...state,
          player: {
            ...state.player,
            isPlaying: action.payload,
          }
      };
    default:
      return state;
  }
};

export default Reducer;
