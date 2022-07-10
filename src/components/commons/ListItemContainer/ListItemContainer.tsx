import styles from "./ListItemContainer.module.css";
import ListItem from './ListItem';
import { ReactSortable } from "react-sortablejs";
import { useEffect, useState } from "react";
import * as actionCreator from "../../../redux/actions/action_player";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

interface myProps {
  content: any;
  header?: boolean;
  artist?: boolean;
  nb?: boolean;
  sort?: boolean;
}

const ListItemContainer: React.FC<myProps> = ({ content, header=false, artist, nb, sort=false}: myProps) => {
  const [state, setState] = useState<any>([...content]);;
  const dispatch = useDispatch();
  const { updatePlaylist } = bindActionCreators(
    actionCreator,
    dispatch
  );
  const updateLocal = (playlist: any) => {
    updatePlaylist(playlist);
    console.log('_update_');
  }
  useEffect(()=>{
    updatePlaylist(state);
  },[state])
  return (
    <div>
      {
        header &&
        <div className={styles.header}>
          <span>Title</span>
          <span>{!artist ? 'Artist' : ''}</span>
          {/* <p>Album</p> */}
          <span>Duration</span>
        </div>
      }
      { false && state.length > 0 ?
        <div className={styles.list}>
          {
            content?.map((e:any, i:any) => {
              return <ListItem key={i} item={e} nb={nb?i+1:undefined}/>;
            })
          }
        </div>
      :
        <ReactSortable list={state} setList={setState} className={sort ? styles.listSort : styles.list}
          chosenClass={styles.choose} disabled={!sort}
        >
          {
            state?.map((e:any, i:any) => {
              return <ListItem key={i} item={e} nb={nb?i+1:undefined}/>;
            })
          }
        </ReactSortable>
      }

    </div>
  );
};
export default ListItemContainer;
