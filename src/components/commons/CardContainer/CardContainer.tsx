import styles from "./CardContainer.module.css";
import CardItem from '../CardItem/CardItem';

interface item {
  id: number;
  name: string;
  picture_medium: string;
  type: string;
  Songs:any
}
interface myProps {
  content: any;
}

const CardContainer: React.FC<myProps> = (props: myProps) => {
  return (
    <div className={styles.container}>
      {
        props.content.Songs?.map((e:any, i:any) => {
          console.log(e);
          return <CardItem key={i} item={e}/>;
        })
      }
    </div>
  );
};
export default CardContainer;
