import { LibraryArtist } from "../reducer/types";

export type Actions =
  | GetGenres
  | GetAlbumPlaylist
  | ChangeAdminOption
  | PostSignUp
  | PostLogin
  | SearchAll
  | GetChart
  | GetLastSongs
  | DiscoverSongs
  | SendPrevPlay
  | PlaySong
  | AddToQueue
  | getLibrary
  | get_PlaylistForId
  | GetGenre
  | CleanGenre
  | AddToPlaylist
  | NewPlaylist
  | LikeSong
  | GetTop
  | SetQuery
  | GetAllUsers
  | GetArtist
  | GetArtistTop
  | DislikeSong
  | PlayAll
  | UpdatePlaylist
  | sortQueue
  | deleteFromQueue
  | loading
  | GetStats
  | UserAdmin
  | GetUserInfo
  | updateLike
  | ChangeAbout
  | UpdateSong
  | LocalLoadedAlbum
  | GetPanelInfo
  | LaunchPopUp
  | deletePlaylist
  | SetFiltered
  | CreateAlbum
  | UploadMusic
  | UploadNewAlbum
  | DeleteSong
  | DeleteAlbum
  | setCurrentSongPosition
  | setPausePlay
  | UpdateAlbum;

export enum ActionType {
  CLEAN_GENRE = "CLEAN_GENRE",
  GET_GENRE = "GET_GENRE",
  GET_GENRES = "GET_GENRES",
  GET_CHART = "GET_CHART",
  GET_LAST_SONGS = "GET_LAST_SONGS",
  GET_ALBUM_PLAYLIST = "GET_ALBUM_PLAYLIST",
  CHANGE_ADMIN_OPTION = "CHANGE_ADMIN_OPTION",
  POST_SIGN_UP = "POST_SIGN_UP",
  POST_LOGIN = "POST_LOGIN",
  SEARCH_ALL = "SEARCH_ALL",
  SEND_PREV_PLAY = "SEND_PREV_PLAY",
  PLAY_SONG = "PLAY_SONG",
  ADD_TO_QUEUE = "ADD_TO_QUEUE",
  GET_LIBRARY = "GET_LIBRARY",
  GET_PlaylistForId = "GET_PlaylistForId",
  ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST",
  NEW_PLAYLIST = "NEW_PLAYLIST",
  UPDATE_PLAYLIST = "UPDATE_PLAYLIST",
  UPDATE_USER = "UPDATE_USER",
  GET_TOP = "GET_TOP",
  LIKE_SONG = "LIKE_SONG",
  DISLIKE_SONG = "DISLIKE_SONG",
  SET_QUERY = "SET_QUERY",
  GET_ALL_USERS = "GET_ALL_USERS",
  LOADING = "LOADING",
  UPDATE_LIKE = "UPDATE_LIKE",
  GET_ARTIST = "GET_ARTIST",
  GET_ARTIST_TOP = "GET_ARTIST_TOP",
  PLAY_ALL = "PLAY_ALL",
  GET_STATS = "GET_STATS",
  SORT_QUEUE = "SORT_QUEUE",
  DELETE_FROM_QUEUE = "DELETE_FROM_QUEUE",
  USER_ADMIN = "USER_ADMIN",
  CLEAN_ALBUM_PLAYLIST = "CLEAN_ALBUM_PLAYLIST",
  GET_USER_INFO = "GET_USER_INFO",
  CHANGE_ABOUT = "CHANGE_ABOUT",
  UPDATE_SONG = "UPDATE_SONG",
  UPLOAD_SONG = "UPLOAD_SONG",
  LOCAL_LOADED_ALBUM = "LOCAL_LOADED_ALBUM",
  GET_PANEL_INFO = "GET_PANEL_INFO",
  LAUNCH_POP_UP = "LAUNCH_POP_UP",
  DELETE_PLAYLIST = "DELETE_PLAYLIST",
  SET_FILTERED = "SET_FILTERED",
  DISCOVER_SONGS = "DISCOVER_SONGS",
  CREATE_ALBUM = "CREATE_ALBUM",
  UPLOAD_MUSIC = "UPLOAD_MUSIC",
  UPLOAD_NEW_ALBUM = "UPLOAD_NEW_ALBUM",
  DELETE_SONG = "DELETE_SONG",
  DELETE_ALBUM = "DELETE_ALBUM",
  UPDATE_LIBRARY = "UPDATE_LIBRARY",
  SET_CURRENT_SONG_POSITION = 'SET_CURRENT_SONG_POSITION',
  SET_PAUSE_PLAY = 'SET_PAUSE_PLAY',
  UPDATE_ALBUM = "UPDATE_ALBUM",
}

export interface GetStats {
  type: ActionType.GET_STATS;
  payload: any;
}
export interface GetArtistTop {
  type: ActionType.GET_ARTIST_TOP;
  payload: any;
}
export interface GetArtist {
  type: ActionType.GET_ARTIST;
  payload: any;
}
export interface GetAllUsers {
  type: ActionType.GET_ALL_USERS;
  payload: any;
}
export interface userOption {
  //opciones del componente AdminPanel
  home: boolean;
  user: boolean;
}
interface CleanGenre {
  type: ActionType.CLEAN_GENRE;
}
interface GetGenre {
  type: ActionType.GET_GENRE;
  payload?: any;
}
interface GetGenres {
  type: ActionType.GET_GENRES;
  payload?: swGenre[];
}
interface GetChart {
  type: ActionType.GET_CHART;
  payload?: swSong[];
}
interface GetLastSongs {
  type: ActionType.GET_LAST_SONGS;
  payload?: any;
}
interface DiscoverSongs {
  type: ActionType.DISCOVER_SONGS;
  payload?: swSong[];
}
interface GetAlbumPlaylist {
  type: ActionType.GET_ALBUM_PLAYLIST | ActionType.CLEAN_ALBUM_PLAYLIST;
  payload?: any;
}
interface ChangeAdminOption {
  type: ActionType.CHANGE_ADMIN_OPTION;
  payload?: any;
}
interface PostSignUp {
  type: ActionType.POST_SIGN_UP;
  payload: any;
}
interface PostLogin {
  type: ActionType.POST_LOGIN;
  payload: any;
}
interface SearchAll {
  type: ActionType.SEARCH_ALL;
  payload: { data: Object; query: string };
}
interface SendPrevPlay {
  type: ActionType.SEND_PREV_PLAY;
  payload: object;
}
interface PlaySong {
  type: ActionType.PLAY_SONG;
  payload: swSong;
}
interface AddToQueue {
  type: ActionType.ADD_TO_QUEUE;
  payload: swSong;
}
interface deleteFromQueue {
  type: ActionType.DELETE_FROM_QUEUE;
  payload: string;
}
interface sortQueue {
  type: ActionType.SORT_QUEUE;
  payload: swSong[];
}
interface getLibrary {
  type: ActionType.GET_LIBRARY;
  payload: LibraryArtist;
}
interface get_PlaylistForId {
  type: ActionType.GET_PlaylistForId;
  payload: any;
}
interface AddToPlaylist {
  type: ActionType.ADD_TO_PLAYLIST;
  payload: any;
}
interface NewPlaylist {
  type: ActionType.NEW_PLAYLIST;
  payload: any;
}
interface UpdatePlaylist {
  type: ActionType.UPDATE_PLAYLIST;
  payload: any;
}
interface GetTop {
  type: ActionType.GET_TOP;
  payload: any;
}
interface LikeSong {
  type: ActionType.LIKE_SONG;
  payload: any;
}
interface SetQuery {
  type: ActionType.SET_QUERY;
  payload: string;
}
interface DislikeSong {
  type: ActionType.DISLIKE_SONG;
  payload: any;
}
interface loading {
  type: ActionType.LOADING;
  payload: boolean;
}
interface updateLike {
  type: ActionType.UPDATE_LIKE;
  payload: any[];
}
interface deletePlaylist {
  type: ActionType.DELETE_PLAYLIST;
  payload: any;
}
interface PlayAll {
  type: ActionType.PLAY_ALL;
  payload: swSong[];
}
interface GetUserInfo {
  type: ActionType.GET_USER_INFO;
  payload: any;
}
interface UserAdmin {
  type: ActionType.USER_ADMIN;
  payload: any;
}
interface ChangeAbout {
  type: ActionType.CHANGE_ABOUT;
  payload: any;
}
interface UpdateSong {
  type: ActionType.UPDATE_SONG;
  payload?: any;
}
interface LocalLoadedAlbum {
  type: ActionType.LOCAL_LOADED_ALBUM;
  payload?: any;
}
interface GetPanelInfo {
  type: ActionType.GET_PANEL_INFO;
  payload: any;
}
interface LaunchPopUp {
  type: ActionType.LAUNCH_POP_UP;
  payload: any;
}
interface SetFiltered {
  type: ActionType.SET_FILTERED;
  payload: any;
}
interface CreateAlbum {
  type: ActionType.CREATE_ALBUM;
  payload?: any;
}
interface UploadMusic {
  type: ActionType.UPLOAD_MUSIC;
  payload?: any;
}
interface UploadNewAlbum {
  type: ActionType.UPLOAD_NEW_ALBUM;
  payload?: any;
}
interface DeleteSong {
  type: ActionType.DELETE_SONG | ActionType.UPDATE_LIBRARY;
  payload?: any;
}
interface DeleteAlbum {
  type: ActionType.DELETE_ALBUM | ActionType.UPDATE_LIBRARY;
  payload?: any;
}
interface setCurrentSongPosition {
  type: ActionType.SET_CURRENT_SONG_POSITION;
  payload: number 
}
interface setPausePlay {
  type: ActionType.SET_PAUSE_PLAY;
  payload: boolean
}
interface UpdateAlbum {
  type: ActionType.UPDATE_ALBUM;
  payload?: any
}
