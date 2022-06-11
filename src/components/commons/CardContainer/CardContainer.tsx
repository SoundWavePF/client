import styles from "./CardContainer.module.css";
import CardItem from '../CardItem/CardItem';

interface item {
  id: number;
  name: string;
  picture_medium: string;
  type: string;
}
interface myProps {
  content: item[];
}

const CardContainer: React.FC<myProps> = (props: myProps) => {
  return (
    <div className={styles.container}>
      {
        props.content?.map((e, i) => {
          console.log(e);
          return <CardItem key={i} item={e}/>;
        })
      }
    </div>
  );
};
export default CardContainer;
