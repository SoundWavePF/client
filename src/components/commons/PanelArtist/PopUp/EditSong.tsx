import styles from "./PopUp.module.css";
import * as actionCreator from "../../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import {useAuth0} from '@auth0/auth0-react';

interface myProps {
  item?: any;
}

const EditSong: React.FC<myProps> = ({ item }: myProps) => {
  const dispatch = useDispatch();
  const { updateSong, launchPopUp, deleteSong } = bindActionCreators(actionCreator, dispatch)
  const {albums, pop_up} = useSelector((state: any) => state.panel_artist);
  const {email, artist} = useSelector((state: any) => state.user_info);
  const [name, setName] = useState<string>(pop_up.item?.name);
  const [album, setAlbum] = useState<string>(pop_up.item?.album?.name);
  // const { user } = useAuth0();
  // const email = user?.email;
  const saveChanges = async() => {
    let info = {
      email,
      id: pop_up.item?.id,
      name,
      album: albums?.find((e:any) => e.name === album)?.id,
    }
    updateSong(info);
    launchPopUp(false);
  }
  const deleteBtn = async() => {
    deleteSong(email, pop_up.item?.id);
    launchPopUp(false);
  }
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
          <button className={styles.btn} onClick={deleteBtn} style={{"backgroundColor":"red"}}>Delete</button>
          <button className={styles.btn} onClick={saveChanges}>Save</button>
          <button className={styles.btn} onClick={()=>launchPopUp(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
};
export default EditSong;
