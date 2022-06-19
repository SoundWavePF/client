import styles from "./ListItemContainer.module.css";
import ListItem from './ListItem';
import { ReactSortable } from "react-sortablejs";
import { useState } from "react";
import * as actionCreator from "../../../../redux/actions/action_artist";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

interface myProps {
  content: any;
  album?: boolean;
  nb?: boolean;
  sort?: boolean;
}

const ListItemContainerPanelArtist: React.FC<myProps> = ({ content, album=true, nb, sort=false}: myProps) => {
  const [state, setState] = useState<any>([...content]);
  const dispatch = useDispatch();
  const {  } = bindActionCreators(
    actionCreator,
    dispatch
  );
  const updateLocal = (playlist: any) => {
    //updateAlbum(playlist);
    console.log('_update_');
  }

  return (
    <div>
      <div className={styles.header}>
        <span>Title</span>
        <span>{album ? 'Album' : ''}</span>
        {/* <p>Album</p> */}
        <span>Duration</span>
      </div>
      <ReactSortable list={state} setList={setState} className={sort ? styles.listSort : styles.list}
        chosenClass={styles.choose} disabled={!sort} onUpdate={() => updateLocal(state)}
      >
        {
          state?.map((e:any, i:any) => {
            return <ListItem key={i} item={e} nb={nb?i+1:undefined} album={album}/>;
          })
        }
      </ReactSortable>

    </div>
  );
};
export default ListItemContainerPanelArtist;
