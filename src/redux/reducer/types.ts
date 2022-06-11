export interface SearchResult {
  artistData:                 swArtist[];
  albumData:                  swAlbum[];
  songData:                   swSong[];
  playlistData?:              swPlaylist[]
}
export interface LibraryArtist {
  list:                    swSong[];
  card:                   any;
}
export interface AdminOption {
  home: boolean;
  user: boolean;
}
export interface Home {
  last?: swSong[],
  genres?: swGenre[],
  chart?: swSong[],
}
