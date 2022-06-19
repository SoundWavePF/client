import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";
import * as actionCreator from "../../../../redux/actions/action_user";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";

interface myProps {
  item: any
}

const CardItemPanelArtist: React.FC<myProps> = (props: myProps) => {
  const [state, setState] = useState<any>(false);;
  const dispatch = useDispatch();
  const { } = bindActionCreators(actionCreator, dispatch);
  const toggleList = () => {
    //accion que pide el album y lo carga en store
    state ? setState(false) : setState(true);
  }
  return(
    <div className={styles.default}>
      <img src={props.item.image_medium} alt={props.item.name} onClick={toggleList}/>
      <p>{props.item.name}</p>
      <button>edit</button>
    </div>
  )
};
export default CardItemPanelArtist;
