import styles from "./HomeContent.module.css";
import genres from './genres.json'
import CardItem from "../CardItem/CardItem";

const HomeContent = () => {
  let mockGenres = genres.data;

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Recently played</h1>
      </div>
      <div className={styles.section}>
        <h1>Your favourites</h1>
        <div className={styles.cardContainer}>
          {
            mockGenres.map((e, i) => {
              console.log(e);
              return (
                <CardItem key={i} item={e} isGenre={true}/>
              )
            })
          }
        </div>

      </div>
      <div className={styles.section}>
        <h1>Genres</h1>
        <div className={styles.cardContainer}>
          {
            mockGenres.map((e, i) => {
              console.log(e);
              return (
                <CardItem key={i} item={e} isGenre={false}/>
              )
            })
          }
        </div>

      </div>
    </div>
  );
};
export default HomeContent;
