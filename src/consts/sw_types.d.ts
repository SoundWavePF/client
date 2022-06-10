interface swAlbum {
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
interface swArtist {
  id:                      string;
  dz_id:                   number;
  name:                    string;
  image_small:             string;
  image_medium:            string;
  image_big:               string;
  type:                    string;
}
interface swSong {
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
interface swPlaylist {
  id:                      string;
  name:                    string;
  type:                    string
}
 interface swGenre {
  id:                      number;
  name:                    string;
  picture:                 string;
  type:                    string;
}
 interface swUser {
  id:                      string;
  username:                string;
  password:                string;
  email:                   string;
  url_avatar:              string;
  role:                    string;
  listening_time:          number;
}

//////no se si hace falta
// interface SearchResult {
//   artists:                 Artist[];
//   albums:                  Album[];
//   songs:                   Song[];
// }
