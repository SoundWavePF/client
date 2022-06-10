interface Album {
  id:                      string;
  dz_id:                   number;
  title:                   string;
  image_small:             string;
  image_medium:            string;
  image_big:               string;
  nb_tracks:               number;
  release_date:            Date;
  artist:                  string;
  type:                    string;
  artists:                 Artist[];
  genres:                  Genre[];
  songs:                   Song[];
}
interface Artist {
  id:                      string;
  dz_id:                   number;
  name:                    string;
  image_small:             string;
  image_medium:            string;
  image_big:               string;
  type:                    string;
}
interface Song {
  id:                      string;
  dz_id:                   number;
  title:                   string;
  duration:                string;
  preview:                 string;
  image_small:             string;
  image_medium:            string;
  image_big:               string;
  artist:                  string;
  type:                    string;
  artists:                 Artist[];
}
interface Playlist {
  id:                      string;
  name:                    string;
  type:                    string
}
 interface Genre {
  id:                      number;
  name:                    string;
  picture:                 string;
  type:                    string;
}
 interface User {
  id:                      string;
  username:                string;
  password:                string;
  email:                   string;
  url_avatar:              string;
  role:                    string;
  listening_time:          number;
}

//////no se si hace falta
interface SearchResult {
  artists:                 Artist[];
  albums:                  Album[];
  songs:                   Song[];
}

export type {
  Album,
  Artist,
  Song,
  Playlist,
  Genre,
  User,
}

//  importación:
//  import * as types from '../../consts/sw_types'
//  
//  uso:
//  let cancion : types.Song
