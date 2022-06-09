export type Actions = GetMusic | GetAlbum;
export enum ActionType{
  GET_MUSIC = 'GET_MUSIC',
  GET_ALBUM = 'GET_ALBUM',
}

interface genre {
  id: number;
  name: string;
  picture_medium: string;
  type: string;
}

interface GetMusic{
  type: ActionType.GET_MUSIC;
  payload?: genre[]
}
interface GetAlbum{
  type:ActionType.GET_ALBUM;
  payload: Object[]
}

