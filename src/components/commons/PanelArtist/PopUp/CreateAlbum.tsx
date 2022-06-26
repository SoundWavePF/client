import styles from "./PopUp.module.css";
import * as actionCreator from "../../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";
import defaultImg from '../../../../assets/playlistFran.png'

interface myProps {
  item?: any;
}

const CreateAlbum: React.FC<myProps> = ({ item }: myProps) => {
  const dispatch = useDispatch();
  const { launchPopUp } = bindActionCreators(actionCreator, dispatch);
  const [name, setName] = useState<string>('');
  const [img, setImg] = useState<string>('');
  return (
    <div className={styles.background}>
      <div className={styles.floating} style={{'width': '600px'}}>
        <h3>Create an album</h3>
        <div className={styles.createAlbum}>
          <div className={styles.upload}>
            <div>
              <img src={img?img:defaultImg} alt="album"/>
            </div>
            <label>
              <span></span>
              <input type="file" accept="image/*" onChange={(e)=>{
                let file = e.target.files
                if (file) {setImg(URL.createObjectURL(file[0]))}
              }}/>
            </label>
          </div>
          <label>Name
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
          </label>
          <label>Release date
            <input type="date" onChange={e=>setName(e.target.value)}/>
          </label>
        </div>
        <div>
          <button className={styles.btn} onClick={undefined}>Save</button>
          <button className={styles.btn} onClick={()=>launchPopUp(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
};
export default CreateAlbum;
