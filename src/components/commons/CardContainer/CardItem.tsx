import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionCreator2 from "../../../redux/actions/action_user";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import playlistFran from '../../../assets/playlistFran2.png';
import DropDownButton from '../DropDownButton/DropDownButton';
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import { useAuth0 } from '@auth0/auth0-react';

interface myProps {
  item: any;
}

const CardItem: React.FC<myProps> = (props: myProps) => {
  const { isAuthenticated } = useAuth0();
  let IType = props.item.type;
  const { user } = useAuth0();
  const email = user?.email;
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch);
  const { deletePlaylist } = bindActionCreators(actionCreator2, dispatch);
  switch (IType) {
    case "genre":
      return (
        <div>
          <Link to={`/genre/${props.item.id}`} className={styles.alt}>
            <p>{props.item.name}</p>
            {/* {props.item.name==='Pop' && <img src='https://e-cdns-images.dzcdn.net/images/misc/2b15578cf12902c0c7d2ae07e8071460/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
            {props.item.name==='Salsa' && <img src='https://e-cdns-images.dzcdn.net/images/misc/cdb2b282bf856b1ec0061d1b00371e77/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
            {props.item.name==='Rock' && <img src='https://e-cdns-images.dzcdn.net/images/misc/8ad3050b34360d0573d9d7b8bf38997d/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
            {props.item.name==='Reggaeton' && <img src='https://e-cdns-images.dzcdn.net/images/misc/dfd2c5f4b1ea497efb2f82da98b73572/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
            {props.item.name==='Rap/Hip Hop' && <img src='https://e-cdns-images.dzcdn.net/images/misc/b8ae8f0791f5e9e6c7a11bab94b0cbad/134x264-000000-80-0-0.jpg' alt={props.item.name}/>} */}
            <img
              src="https://e-cdns-images.dzcdn.net/images/misc/8ad3050b34360d0573d9d7b8bf38997d/134x264-000000-80-0-0.jpg"
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
        <div className={styles.default}>
          <Link to={`/playlist/${props.item.id}`}>
            <img src={playlistFran} alt={props.item.name} />
          </Link>
          <p>{props.item.name}</p>
          <button onClick={() => email && deletePlaylist(props.item.id)}>
            x
          </button>
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
                <DropDownButton item={props.item}/>
              </li>
              {isAuthenticated && props.item && 
              <li className={styles.action2}>
                <FavoriteIcon item={props?.item}/>
              </li>}
            </ul>
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
