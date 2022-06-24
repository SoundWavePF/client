import styles from "./PopUp.module.css";
import * as actionCreator from "../../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

interface myProps {
  item?: any;
}

const EditAlbum: React.FC<myProps> = ({ item }: myProps) => {
  const dispatch = useDispatch();
  const { launchPopUp } = bindActionCreators(actionCreator, dispatch)
  return (
    <div className={styles.background}>
      <div className={styles.floating}>
        <h3>Edit album</h3>
        <div>
          
        </div>
        <div>
          <button className={styles.btn} onClick={undefined}>Save</button>
          <button className={styles.btn} onClick={()=>launchPopUp(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
};
export default EditAlbum;
