import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";

interface myProps {
  item: any
}

const CardItem: React.FC<myProps> = (props: myProps) => {
  //const idLink = () =>{}
  let typeCard = props.item.type;
  return (
    typeCard === 'genre' ?
    <div className={styles.alt}>
      <Link to={`/${props.item.type}/${props.item.id}`}>
        <img src={props.item.image} alt={props.item.name}/>
      </Link>
      <h2>{props.item.name}</h2>
    </div>
    :
    <div className={styles.default}>
      <Link to={`/${props.item.type}/${props.item.id}`}>
        <img src={typeCard === 'album' ? props.item.image_medium: ''} alt={typeCard === 'album'? props.item.title : props.item.name}/>
      </Link>
      <h2>{typeCard === 'album'? props.item.title : props.item.name}</h2>
    </div>
  );
};
export default CardItem;
