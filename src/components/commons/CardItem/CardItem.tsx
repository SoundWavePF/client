import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";
import DefaultBackground from "../../../assets/backgroundDefaultPlaylist.png";
import play from '../../../assets/play.png'
import { useDispatch } from 'react-redux';
import * as actionCreator from '../../../redux/actions/action_player';
import { bindActionCreators } from "redux";
import DropDownButton from '../DropDownButton/DropDownButton';

interface myProps {
  item: any
}

const CardItem: React.FC<myProps> = (props: myProps) => {

  //const dispatch = useDispatch();
  //const { playSong } = bindActionCreators(actionCreator, dispatch)

  let IType = props.item.type;
  let playSong: any
  //const dispatch = useDispatch();
  //const { playSong } = bindActionCreators(
  //  actionCreator,
  //  dispatch
  //);
  switch (IType) {
    case 'genre':
      return(
        <div>
          <Link to={`/genre/${props.item.id}`} className={styles.alt}>
            <p>{props.item.name}</p>
            <img src={props.item.image} alt={props.item.name}/>
          </Link>
        </div>
      )
    case 'album':
      return(
        <div className={styles.default}>
          <Link to={`/album/${props.item.id}`} >
            <img src={props.item.image_medium} alt={props.item.title} />
          </Link>
          <p>{props.item.title}</p>
        </div>
      )
    case 'playlist':
      return(
                <div className={styles.default}>
        <Link to={`/album/${props.item.id}`}>
          <img src={props.item.image_playlist?props.item.image_playlist:DefaultBackground} alt={props.item.name}/>
        </Link>
        <h2>{props.item.name}</h2>
      </div>
      )
    case 'track':
        return(
          <div className={styles.song}>
            <figure><img src={props.item.album.image_medium ?props.item.album?.image_medium :props.item?.image_medium}
              alt={props.item.title}
              onClick={() => playSong(props.item.id)}
            /></figure>
            <p>{props.item.title}</p>
            <Link to={`/artist/${props.item.id}`}>{props.item.artist}</Link>
          </div>
        )
    case 'drop':
        return(
        <div className={styles.default}>
          <img onClick={() => playSong(props.item)} src={props.item.album.image_medium ?props.item.album.image_medium :props.item.image_medium   } alt={props.item.title} className={styles.title}/>
          <h2 onClick={() => playSong(props.item)} className={styles.title}>{props.item.title}</h2>
          <h2>{props.item.artist}</h2>
          <DropDownButton item={props.item}/>
        </div>
        )
    default:
      return <>d</>
  }
};
export default CardItem;
