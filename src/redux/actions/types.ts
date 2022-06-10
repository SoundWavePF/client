export type Actions = GetMusic | GetAlbum | ChangeAdminOption | PostSignUp | PostLogin;
export enum ActionType{
  GET_MUSIC = 'GET_MUSIC',
  GET_ALBUM = 'GET_ALBUM',
  CHANGE_ADMIN_OPTION = 'CHANGE_ADMIN_OPTION',
  POST_SIGN_UP = 'POST_SIGN_UP',
  POST_LOGIN = 'POST_LOGIN' 
}

interface genre {
  id: number;
  name: string;
  picture_medium: string;
  type: string;
}
export interface userOption{
  home:boolean,
  user:boolean
}

interface GetMusic{
  type: ActionType.GET_MUSIC;
  payload?: genre[]
}
interface GetAlbum{
  type:ActionType.GET_ALBUM;
  payload: Object[]
}
interface ChangeAdminOption{
  type: ActionType.CHANGE_ADMIN_OPTION;
  payload: userOption 
}
interface PostSignUp{
  type: ActionType.POST_SIGN_UP,
  payload:any
}
interface PostLogin{
  type: ActionType.POST_LOGIN,
  payload:any
}