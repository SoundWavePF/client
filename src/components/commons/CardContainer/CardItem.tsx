import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionCreator2 from "../../../redux/actions/action_user";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import playlistFran from "../../../assets/playlistFran2.png";
import DropDownButton from "../DropDownButton/DropDownButton";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import { useAuth0 } from "@auth0/auth0-react";
import papeleria from "../../../assets/papeleriaIcon.png";
import Swal from "sweetalert2";
import genres from '../../../assets/genres.png'
import SoundWave from '../SoundWave/SoundWave'

interface myProps {
  item: any;
}

const CardItem: React.FC<myProps> = (props: myProps) => {
  const { isAuthenticated } = useAuth0();
  const renderWave = useSelector( (state: any)=>{
    const {currentSongPosition, isPlaying} = state.player
    return state.queue[currentSongPosition]?.id === props.item?.id && isPlaying
  })
  const queue = useSelector( (state: any)=>state.queue)
  let IType = props.item?.type;
  const { user } = useAuth0();
  const email = user?.email;
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch);
  const { deletePlaylist } = bindActionCreators(actionCreator2, dispatch);
  function borrar(p: any){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#ffee32',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed){
        deletePlaylist(p)
        Swal.fire(
          'Deleted!',
          'The playlist has been deleted.',
          'success'
        )
      }
    })
  }
  switch (IType) {
    case "genre":
      return (
        <div>
          <Link to={`/genre/${props.item.id}`} className={styles.alt}>
            <p>{props.item.name}</p>
            <img
              src={genres}
              alt={props.item.name}
            />
          </Link>
        </div>
      );
    case "album":
      return (
        <div className={styles.default}>
          <Link to={`/album/${props.item.id}`}>
            <img src={props.item.image_medium} alt={props.item.title} />
          </Link>
          <p>{props.item.name}</p>
        </div>
      );
    case "playlist":
      return (
        <div className={styles.playlist}>
          <div className={styles.icon}>
            <button onClick={() => email && borrar(props.item.id)}>
              <img src={papeleria} alt="like button" />
            </button>
          </div>
          <Link to={`/playlist/${props.item.id}`}>
            <img src={playlistFran} alt={props.item.name} />
          </Link>
          <p>{props.item.name}</p>
        </div>
      );
    case "track":
      return (
        <div className={styles.song}>
          <figure className={styles.figure}>
            <img
              src={
                props.item.album?.image_medium
                  ? props.item.album.image_medium
                  : props.item.image_medium
              }
              alt={props.item.title}
              onClick={() => playSong(props.item, email)}
            />
            <ul className={styles.actions}>
              <li className={styles.action}>
                <DropDownButton item={props.item} />
              </li>
              {isAuthenticated && props.item && (
                <li className={styles.action2}>
                  <FavoriteIcon item={props?.item} />
                </li>
              )}
            </ul>
                { renderWave? <SoundWave/>: null}
            </figure>
            <p>{props.item.name}</p>
            <Link to={`/artist/${props.item.artists[props.item.artists.length - 1].id}`}>{props.item.artists[props.item.artists.length - 1].name}</Link>
          </div>
        )
    default:
      return <></>;
  }
};
export default CardItem;
