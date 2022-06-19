import styles from "./PanelArtistContent.module.css";
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
  const dispatch = useDispatch();
  const {  } = bindActionCreators(actionCreator, dispatch)
  useEffect(()=>{
    
  })
  return (
    <div className={styles.containerAlbum}>
      <div className={''}>
        <span onClick={()=>setOpen(true)}>My albums  ¡CLICK AQUI! (Lo que se espera al clickear un album)</span>
        <CardContainerPanelArtist content={albums}/>
      </div>
      {
        open &&
        <>
          <button className={styles.floatingClose} onClick={()=>setOpen(false)}>X</button>
          <div className={styles.floatingList}>
            <ListItemContainerPanelArtist content={songs} nb={true} album={false} sort={true}/>
          </div>
        </>
      }
    </div>
  )
};
export default PanelArtistAlbums;
