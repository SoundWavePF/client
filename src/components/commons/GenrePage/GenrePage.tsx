import styles from "./GenrePage.module.css";
import CardContainer from "../CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";
import { useParams } from "react-router";

const GenrePage = () => {
  const {id} = useParams()
  console.log(id)
  const dispatch = useDispatch();
  const { getGenre, cleanGenre } = bindActionCreators(actionCreator,dispatch);
  const genre = useSelector((state: any) => state.genre);

  useEffect(():any => {
    getGenre(id);
    return cleanGenre()
  }, []);

  if(genre.Albums){
    return (
        <div className={styles.container}>
          { genre.Albums.length > 0 &&
            <div className={styles.section}>
              <h1>{genre.name}</h1>
              <CardContainer content={genre.Albums} />
            </div>
          }
        </div>
    );
  } else{
    return(
      <div className={styles.container}>
            <div className={styles.section}>
              <h1>Loading...</h1>
            </div>
        </div>
    )
  }
};
export default GenrePage;