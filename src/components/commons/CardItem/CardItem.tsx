import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as actionCreator from '../../../redux/actions/action_player';
import { bindActionCreators } from "redux";
import DropDownButton from '../DropDownButton/DropDownButton';

interface myProps {
  item: any
}

const CardItem: React.FC<myProps> = (props: myProps) => {
  const dispatch = useDispatch();
  const { playSong } = bindActionCreators(actionCreator, dispatch)
  let IType = props.item.type;
  switch (IType) {
    case 'genre':
      return(
        <div className={styles.alt}>
          <Link to={`/genre/${props.item.id}`}>
            <img src={props.item.image} alt={props.item.name}/>
          </Link>
          <h2>{props.item.name}</h2>
        </div>
      )
    case 'album':
      return(
        <div className={styles.default}>
          <Link to={`/album/${props.item.id}`}>
            <img src={props.item.image_medium} alt={props.item.title}/>
          </Link>
          <h2>{props.item.title}</h2>
        </div>
      )
    case 'playlist':
      return(
        <></>
      )
    case 'track':
        return(
          <div className={styles.default}>
          <img onClick={() => playSong(props.item)} src={props.item.album.image_medium ?props.item.album.image_medium :props.item.image_medium   } alt={props.item.title} className={styles.title}/>
          <h2 onClick={() => playSong(props.item)} className={styles.title}>{props.item.title}</h2>
          <h2>{props.item.artist}</h2>
          <DropDownButton item={props.item}/>
        </div>
        )
    default:
      return <></>
  }
};
export default CardItem;
