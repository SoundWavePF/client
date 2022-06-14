import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../redux/actions/action_player";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

interface myProps {
  item: any
}

const CardItem: React.FC<myProps> = (props: myProps) => {
  let IType = props.item.type;
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(
    actionCreator,
    dispatch
  );
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
          <Link to={`/album/${props.item.id}`}>
            <img src={props.item.image_medium} alt={props.item.title}/>
          </Link>
          <p>{props.item.title}</p>
        </div>
      )
    case 'playlist':
      return(
        <div className={styles.default}>
          <Link to={`/playlist/${props.item.id}`}>
            <img src={props.item.image_medium} alt={props.item.name}/>
          </Link>
          <p>{props.item.name}</p>
        </div>
      )
    case 'track':
        return(
          <div className={styles.song}>
            <figure><img src={props.item.album.image_medium ?props.item.album.image_medium :props.item.image_medium}
              alt={props.item.title}
              onClick={() => playSong(props.item.id)}
            /></figure>
            <p>{props.item.title}</p>
            <a href={`/artist/${props.item.id}`}>{props.item.artist}</a>
          </div>
        )
    default:
      return <></>
  }
};
export default CardItem;
