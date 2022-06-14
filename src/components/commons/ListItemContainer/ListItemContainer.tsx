import styles from "./ListItemContainer.module.css";
import ListItem from './ListItem';

interface myProps {
  content: any;
  header?: boolean;
}

const ListItemContainer: React.FC<myProps> = ({ content, header=false}: myProps) => {
  return (
    <>
      {
        header &&
        <div className={styles.header}>
          <p>Title</p>
          <p>Artist</p>
          <p>Album</p>
          <p>Duration</p>
        </div>
      }
      <div className={styles.container}>
        {
          content?.map((e:any, i:any) => {
            return <ListItem key={i} item={e}/>;
          })
        }
      </div>
    </>
  );
};
export default ListItemContainer;
