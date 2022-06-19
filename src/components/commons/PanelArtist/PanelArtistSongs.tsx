import styles from "./PanelArtistContent.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_artist";
import ListItemContainerPanelArtist from "./ContainerList/ListItemContainer";

interface myProps {
  content?: any;
}

const PanelArtistSongs: React.FC<myProps> = ({ content }: myProps) => {
  const {songs} = useSelector((state: any) => state.artist);
  const dispatch = useDispatch();
  const {  } = bindActionCreators(actionCreator, dispatch);
  return (
    <div className={styles.container}>
      <span>My Songs</span>
      <input type='search'/>
      <ListItemContainerPanelArtist content={songs}/>
    </div>
  )
};
export default PanelArtistSongs;
