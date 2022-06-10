export type Actions = GetMusic | GetAlbum | ChangeAdminOption;
export enum ActionType{
  GET_MUSIC = 'GET_MUSIC',
  GET_ALBUM = 'GET_ALBUM',
  CHANGE_ADMIN_OPTION = 'CHANGE_ADMIN_OPTION',
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
