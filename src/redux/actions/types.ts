
export type Actions = GetGenres | GetAlbum | ChangeAdminOption | PostSignUp | PostLogin | SearchAll | GetChart | GetLastSongs;

export enum ActionType{
  GET_GENRES = 'GET_GENRES',
  GET_CHART = 'GET_CHART',
  GET_LAST_SONGS = 'GET_LAST_SONGS',
  GET_ALBUM = 'GET_ALBUM',
  CHANGE_ADMIN_OPTION = 'CHANGE_ADMIN_OPTION',
  POST_SIGN_UP = 'POST_SIGN_UP',
  POST_LOGIN = 'POST_LOGIN',
  SEARCH_ALL = 'SEARCH_ALL'  
}


export interface userOption{ //opciones del componente AdminPanel
  home:boolean,
  user:boolean
}

interface GetGenres{
  type: ActionType.GET_GENRES;
  payload?: swGenre[]
}
interface GetChart{
  type:ActionType.GET_CHART;
  payload?: swSong[]
}
interface GetLastSongs{
  type:ActionType.GET_LAST_SONGS;
  payload?: swSong[]
}
interface GetAlbum{
  type:ActionType.GET_ALBUM;
  payload: swAlbum[]
}
interface ChangeAdminOption{
  type: ActionType.CHANGE_ADMIN_OPTION;
  payload?: any 
}
interface PostSignUp{
  type: ActionType.POST_SIGN_UP,
  payload:any
}
interface PostLogin{
  type: ActionType.POST_LOGIN,
  payload:any
}
interface SearchAll{
  type: ActionType.SEARCH_ALL,
  payload: Object[]
}