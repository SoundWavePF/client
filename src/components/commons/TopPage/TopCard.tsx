import styles from "./TopCard.module.css";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionCreatorUser from "../../../redux/actions/action_user";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
import likefull from "../../../../src/assets/likefull.png";
import { useAuth0 } from "@auth0/auth0-react";



const TopCard = (props: any) => {
  const state = useSelector((state: any) => state);
  const [estado, setEstado] = useState<any>();
  const [buttonLike, setButtonLike] = useState<any>(false);
  const dispatch = useDispatch();
  let song = props.props;
  const { user } = useAuth0();
  const email: string | undefined = user?.email;
  const { getLibrary } = bindActionCreators(actionCreatorUser, dispatch);
  const [fav, setFav] = useState<boolean>(false);
  const { playSong, likeSong, dislikeSong } = bindActionCreators(
    actionCreator,
    dispatch
  );
  useEffect(() => {
    if(email !== undefined) getLibrary(email);
    state.library_artist.list.liked_songs && setEstado(state.library_artist.list.liked_songs.map((e: any) => e.id));
  }, [])

  // console.log(props)
  switch (song.type) {
    case 'track':
      return (
        <div className={styles.card}>
          <div className={styles.div1}>{song.num}</div>
          <figure className={styles.cover}><img src={song.album?.image_medium ? song.album.image_medium : song.image_medium}
            alt={song.name}
            onClick={() => playSong(song)}
          /></figure>
          <div className={styles.divNames}>
            <p>{song.name}</p>
            <div>
              {song.artists.map((artist: any) => <a className={styles.artistName} href={`/artist/${artist.id}`}>{artist.name}</a>)}
            </div>
          </div>
          <div className={styles.likeIcon}>
          {email && <button
            className={styles.likeBtn}
            onClick={() => estado?.includes(song.id) ? dislikeSong(song.id, email) : likeSong(song.id, email)}
          >
            <img
              src={likefull} alt='like button' onClick={() => {setButtonLike(!buttonLike);}}className={estado?.includes(song.id) | buttonLike ? styles.likeImgInclude : styles.likeImg}/>
          </button>}
            {/* <img  src="https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1655324803~hmac=7f8869b901470cca74d785d11ebd8eeb" alt="corazonATR" /> */}
          </div>
        </div>
      )
    default:
      return <></>
  }
};
export default TopCard;
