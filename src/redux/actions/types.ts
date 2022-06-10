export type Actions = GetGenres | GetAlbum | ChangeAdminOption | PostSignUp | PostLogin;
export enum ActionType{
  GET_GENRES = 'GET_GENRES',
  GET_ALBUM = 'GET_ALBUM',
  CHANGE_ADMIN_OPTION = 'CHANGE_ADMIN_OPTION',
  POST_SIGN_UP = 'POST_SIGN_UP',
  POST_LOGIN = 'POST_LOGIN' 
}

interface GetGenres{
  type: ActionType.GET_GENRES;
  payload?: swGenre[]
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