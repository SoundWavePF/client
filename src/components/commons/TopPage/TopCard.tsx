import styles from "./TopCard.module.css";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";
import likefull from "../../../../src/assets/likefull.png";


const TopCard = (props: any) => {
  let song= props.props;
  const dispatch = useDispatch();
  const [fav, setFav] = useState<boolean>(false);
  const { playSong } = bindActionCreators(
    actionCreator,
    dispatch
    );
  // console.log(props)
  switch (song.type) {
    case 'track':
        return(
          <div className={styles.card}>
            <div className={styles.div1}>{song.num}</div>
            <figure className={styles.cover}><img  src={song.album?.image_medium ? song.album.image_medium : song.image_medium}
              alt={song.name}
              onClick={() => playSong(song)}
            /></figure>
            <div className={styles.divNames}>
              <p>{song.name}</p>
              <div>
                {song.artists.map((artist:any)=><a className={styles.artistName} href={`/artist/${artist.id}`}>{artist.name}</a>)}
              </div>
            </div>
            <div className={styles.likeIcon}>
              <img className={!fav ? styles.noFav : ''} src={likefull} alt="like icon" onClick={fav?()=>setFav(false):()=>setFav(true)}/>
              {/* <img  src="https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1655324803~hmac=7f8869b901470cca74d785d11ebd8eeb" alt="corazonATR" /> */}
            </div>
          </div>
        )
    default:
      return <></>
  }
};
export default TopCard;
