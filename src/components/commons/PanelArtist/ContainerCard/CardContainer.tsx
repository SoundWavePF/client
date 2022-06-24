import styles from "./CardContainer.module.css";
import CardItem from './CardItem';

interface myProps {
  content: any;
}

const CardContainerPanelArtist: React.FC<myProps> = (props: myProps) => {
  return (
    <div className={styles.container}>
      {
        props.content?.map((e:any, i:any) => {
          return <CardItem key={i} item={e}/>;
        })
      }
      <CardItem item='' create={true}/>
    </div>
  );
};
export default CardContainerPanelArtist;
