import styles from "./ListItemContainer.module.css";
import ListItem from './ListItem';
import { ReactSortable } from "react-sortablejs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface myProps {
  content: any;
  header?: boolean;
  artist?: boolean;
  nb?: boolean;
  playlist?: boolean;
}

const ListItemContainer: React.FC<myProps> = ({ content, header=false, artist, nb, playlist}: myProps) => {
  const [state, setState] = useState<any>([...content]);
  // useEffect(()=>{
  //   setState(content)
  // },[]);
  // useEffect(()=>{
    
  //   console.log('_Updated')
  // },[state])

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
        <ReactSortable list={state} setList={setState} className={styles.list} 
        chosenClass={styles.red}>
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
