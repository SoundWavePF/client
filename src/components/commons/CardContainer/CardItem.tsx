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
            {props.item.name==='Pop' && <img src='https://e-cdns-images.dzcdn.net/images/misc/2b15578cf12902c0c7d2ae07e8071460/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
            {props.item.name==='Salsa' && <img src='https://e-cdns-images.dzcdn.net/images/misc/cdb2b282bf856b1ec0061d1b00371e77/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
            {props.item.name==='Rock' && <img src='https://e-cdns-images.dzcdn.net/images/misc/8ad3050b34360d0573d9d7b8bf38997d/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
            {props.item.name==='Reggaeton' && <img src='https://e-cdns-images.dzcdn.net/images/misc/dfd2c5f4b1ea497efb2f82da98b73572/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
            {props.item.name==='Rap/Hip Hop' && <img src='https://e-cdns-images.dzcdn.net/images/misc/b8ae8f0791f5e9e6c7a11bab94b0cbad/134x264-000000-80-0-0.jpg' alt={props.item.name}/>}
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
            <figure><img src={props.item.album?.image_medium ? props.item.album.image_medium : props.item.image_medium}
              alt={props.item.title}
              onClick={() => playSong(props.item)}
            /></figure>
            <p>{props.item.name}</p>
            <a href={`/artist/${props.item.id}`}>{props.item.artists[0].name}</a>
          </div>
        )
    default:
      return <></>
  }
};
export default CardItem;
