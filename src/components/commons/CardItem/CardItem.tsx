import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";

interface item {
  id: number;
  name: string;
  picture_medium: string;
  type: string;
}
interface myProps {
  item: item;
}

const CardItem: React.FC<myProps> = (props: myProps) => {
  //const idLink = () =>{}
  
  return (
    <div className={props.item.type === 'genre' ? styles.alt : styles.default}>
      <Link to={`/${props.item.type}/${props.item.id}`}>
        <img src={props.item.picture_medium} alt={props.item.name}/>
      </Link>
      <h2>{props.item.name}</h2>
    </div>
  );
};
export default CardItem;
