import styles from "./CardItem.module.css";
import * as actionCreator from "../../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import addAlbum from '../../../../assets/addAlbum.webp'

interface myProps {
  item: any,
  create?: boolean;
}

const CardItemPanelArtist: React.FC<myProps> = ({ item, create }: myProps) => {
  const dispatch = useDispatch();
  const { localLoadedAlbum, launchPopUp } = bindActionCreators(actionCreator, dispatch);
  const loadAlbum = () => {
    localLoadedAlbum(true);
    localLoadedAlbum(item.id);
  };
  const createAlbum = () => {
    launchPopUp('CreateAlbum');
  };
  return(
    <div className={styles.default}>
      <img src={create ? addAlbum : item.image_medium} alt={create ? 'create' : item.name} onClick={create ? createAlbum : loadAlbum}/>
      <p>{create ? '' : item.name}</p>
    </div>
  )
};
export default CardItemPanelArtist;
