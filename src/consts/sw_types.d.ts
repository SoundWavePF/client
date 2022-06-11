interface swAlbum {
  id:                      string;
  dz_id:                   string;
  title:                   string;
  image_small:             string;
  image_medium:            string;
  image_big:               string;
  nb_tracks:               number;
  release_date:            string;
  artist:                  string;
  type:                    string;

  artists?:                swArtist[];
  genres?:                 swGenre[];
  songs?:                  swSong[];

}
interface swArtist {
  id:                      string;
  dz_id:                   string;
  name:                    string;
  image_small:             string;
  image_medium:            string;
  image_big:               string;
  type:                    string;
}
interface swSong {
  id:                      string;
  dz_id:                   string;
  title:                   string;
  duration:                string;
  preview:                 string;
  artist:                  string;
  type:                    string;
  artists?:                swArtist[];

  album?:                  swAlbum

}
interface swPlaylist {
  id:                      string;
  name:                    string;
  nb_tracks:               number;
  type:                    string;
  songs?:                  swSong[];
}
 interface swGenre {
  id:                      string;
  name:                    string;
  image:                   string;
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
