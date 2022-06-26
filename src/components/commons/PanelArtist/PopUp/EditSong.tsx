import styles from "./PopUp.module.css";
import * as actionCreator from "../../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";
import { useSelector } from "react-redux";

interface myProps {
  item?: any;
}

const EditSong: React.FC<myProps> = ({ item }: myProps) => {
  const dispatch = useDispatch();
  const { launchPopUp } = bindActionCreators(actionCreator, dispatch)
  const {albums, pop_up} = useSelector((state: any) => state.panel_artist);
  const [name, setName] = useState<string>(pop_up.item?.name);
  const [album, setAlbum] = useState<string>(pop_up.item?.album?.name);
  return (
    <div className={styles.background}>
      <div className={styles.floating}>
        <h3>Edit song</h3>
        <div className={styles.editSong}>
          <label>Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
          <label>Album</label>
          <select value={album} onChange={e=>setAlbum(e.target.value)}>
            {
              albums?.map((e:any, i:number) => (
                <option key={i} value={e.name}>{e.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <button className={styles.btn} onClick={undefined}>Save</button>
          <button className={styles.btn} onClick={()=>launchPopUp(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
};
export default EditSong;
