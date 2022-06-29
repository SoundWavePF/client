import styles from "./PanelArtistAlbum.module.css";
import { useEffect, useState } from "react";
import * as actionCreator from "../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import CardContainerPanelArtist from "./ContainerCard/CardContainer";
import ListItemContainerPanelArtist from "./ContainerList/ListItemContainer";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface myProps {
  content?: any;
}

const PanelArtistAlbums: React.FC<myProps> = ({ content }: myProps) => {
  const [open, setOpen] = useState<any>(false);
  // const {} = useSelector((state: any) => state.artist);
  const {albums} = useSelector((state: any) => state.panel_artist);
  const {flag, data} = useSelector((state: any) => state.panel_artist.loaded_album);
  const dispatch = useDispatch();
  const { localLoadedAlbum, launchPopUp } = bindActionCreators(actionCreator, dispatch)
  useEffect(()=>{
    return () => {
      localLoadedAlbum(false)
    }
  },[])
  return (
    !flag ?
    <div className={styles.container}>
      <h1>My albums</h1>
      <CardContainerPanelArtist content={albums}/>
    </div>
    :
    data ?
      <div className={styles.container}>
        <p className={styles.back} onClick={()=>localLoadedAlbum(false)}>back</p>
        <div className={styles.details}>
          <img src={data.image_medium} alt={data.name} />
          <span>{data.name}</span>
          <button className={styles.btn} onClick={()=>launchPopUp('EditAlbum', data)}>edit</button>
        </div>
        {data.songs && (
          <ListItemContainerPanelArtist
            content={data.songs}
            nb={true}
            album={false}
          />
        )}
      </div>
    :
    <LoadingSpinner/>
  )
};
export default PanelArtistAlbums;
