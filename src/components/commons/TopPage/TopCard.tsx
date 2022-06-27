import styles from "./TopCard.module.css";
// import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
// import * as actionCreatorUser from "../../../redux/actions/action_user";
import time from "../../../../src/assets/time.png";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";
import likefull from "../../../../src/assets/likefull.png";
import { useAuth0 } from "@auth0/auth0-react";
import DropDownButton from "../DropDownButton/DropDownButton";
import { Link } from 'react-router-dom';

const TopCard = (props: any) => {
  const formatDuration = (duration: string): string => {
    const num = parseInt(duration);
    const minutes: number = Math.floor(num / 60);
    const seconds: number = num - minutes * 60;
    const minStr: string = minutes.toString();
    const secStr: string = seconds.toString();
    return `${minStr.length == 1 ? "0" + minStr : minStr}:${
      secStr.length == 1 ? "0" + secStr : secStr
    }`;
  };

  const dispatch = useDispatch();
  const [fav, setFav] = useState(0);
  const { playSong, updateLike, likeSong, dislikeSong } = bindActionCreators(
    actionCreator,
    dispatch
  );
  const { user } = useAuth0();
  const email: string | undefined = user?.email;
  const likeSongUser = useSelector(
    (state: any) => state.library_artist.list.liked_songs
  );
  function like(item: any) {
    if (email) likeSong(item.id, email);
    const likeSongArr = likeSongUser;
    likeSongArr.push(item);
    updateLike(likeSongArr);
    setFav(likeSongArr.length);
  }
  function dislike(id: string) {
    if (email) dislikeSong(id, email);
    const likeSongArr = likeSongUser.filter((e: any) => e.id !== id);
    updateLike(likeSongArr);
    setFav(likeSongArr.length);
  }
  const song = props.props;

  switch (song.type) {
    case "track":
      return (
        <div className={styles.card}>
          <div className={styles.div1}>{song.num}</div>
          <figure className={styles.cover}>
            <img
              src={
                song.album?.image_medium
                  ? song.album.image_medium
                  : song.image_medium
              }
              alt={song.name}
              onClick={() => playSong(song, email)}
            />
          </figure>
          <div className={styles.divNames}>
            <p>{song.name}</p>
            <div className={styles.artistNameContainer}>
              {song.artists.map((artist: any, index: number) => (
                <Link
                  key={index}
                  className={styles.artistName}
                  to={`/artist/${artist.id}`}
                >
                  {artist.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.likeIcon}>
            {email ? (
              <img
                className={
                  likeSongUser?.find((e: any) => e.id === props.props.id)
                    ? ""
                    : styles.noFav
                }
                src={likefull}
                alt="like icon"
                onClick={() =>
                  likeSongUser?.find((e: any) => e.id === props.props.id)
                    ? dislike(props.props.id)
                    : like(props.props)
                }
              />
            ) : null}
            <DropDownButton item={props.props}/>
            <span className={styles.time}>{formatDuration(props.props.duration)}</span>
            <img src={time} alt="time icon" />
          </div>
        </div>
      );
    default:
      return <></>;
  }
};
export default TopCard;
