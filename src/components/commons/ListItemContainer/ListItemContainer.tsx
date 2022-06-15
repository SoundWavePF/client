import styles from "./ListItemContainer.module.css";
import ListItem from './ListItem';

interface myProps {
  content: any;
  header?: boolean;
  artist?: boolean;
  cover?: string;
  nb?: boolean;
}

const ListItemContainer: React.FC<myProps> = ({ content, header=false, artist, cover, nb}: myProps) => {
  return (
    <div>
      {
        header &&
        <div className={styles.header}>
          <span>Title</span>
          <span>{!artist ? 'Artist' : ''}</span>
          {/* <p>Album</p> */}
          <span>Duration</span>
        </div>
      }
      <div className={styles.list}>
        {
          content?.map((e:any, i:any) => {
            return <ListItem key={i} item={e} cover={cover?cover:undefined} nb={nb?i+1:undefined}/>;
          })
        }
      </div>
    </div>
  );
};
export default ListItemContainer;
