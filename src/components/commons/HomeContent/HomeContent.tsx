import styles from "./HomeContent.module.css";
import CardContainer from "../CardContainer/CardContainer";
import genres from './genres.json'
import albums from './albums.json'

const HomeContent = () => {

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Recently played</h1>
      </div>
      <div className={styles.section}>
        <h1>Your favourites</h1>
        <CardContainer content={albums.data}/>
      </div>
      <div className={styles.section}>
        <h1>Genres</h1>
        <CardContainer content={genres.data}/>
      </div>
    </div>
  );
};
export default HomeContent;
