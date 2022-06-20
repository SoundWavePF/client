import styles from "./PanelArtistAlbum.module.css";
import { useEffect, useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import * as actionCreator from "../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import CardContainerPanelArtist from "./ContainerCard/CardContainer";
import ListItemContainerPanelArtist from "./ContainerList/ListItemContainer";

interface myProps {
  content?: any;
}

const PanelArtistAlbums: React.FC<myProps> = ({ content }: myProps) => {
  const [open, setOpen] = useState<any>(false);
  const {albums, songs} = useSelector((state: any) => state.artist);
  const {loaded_album, album} = useSelector((state: any) => state.panel_artist);
  const dispatch = useDispatch();
  const { localLoadedAlbum } = bindActionCreators(actionCreator, dispatch)
  useEffect(()=>{
    
  })
  return (
    <div className={styles.container}>
      <div className={styles.albums}>
        <span>My albums  ¡CLICK AQUI! (Lo que se espera al clickear un album)</span>
        <CardContainerPanelArtist content={albums}/>
      </div>
      {
        loaded_album &&
        <div className={styles.floating}>
          <button className={styles.floatingClose} onClick={()=>localLoadedAlbum(false)}>X</button>
          <div className={styles.floatingList}>
            {
              album.songs &&
              <ListItemContainerPanelArtist content={album.songs} nb={true} album={false} sort={true}/>
            }
          </div>
        </div>
      }
    </div>
  )
};
export default PanelArtistAlbums;
