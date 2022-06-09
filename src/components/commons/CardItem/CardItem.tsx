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
  isGenre: boolean;
}

const CardItem: React.FC<myProps> = (props: myProps) => {
  const idLink = () =>{

  }
  
  return (
    <div className={props.isGenre ? styles.alt : styles.default}>
      <Link to={`/${props.item.type}/${props.item.id}`}>
        <img src={props.item.picture_medium}/>
      </Link>
      <h2>{props.item.name}</h2>
    </div>
  );
};
export default CardItem;