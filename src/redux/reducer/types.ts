export interface SearchResult {
  artists:                 swArtist[];
  albums:                  swAlbum[];
  songs:                   swSong[];
}
export interface LibraryArtist {
  list:                    swSong[];
  card:                    swAlbum[] | swPlaylist[];
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
