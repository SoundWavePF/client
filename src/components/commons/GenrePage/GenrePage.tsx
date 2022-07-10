import styles from "./GenrePage.module.css";
import CardContainer from "../CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";
import { useParams } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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

  if(genre.albums){
    return (
        <div className={styles.container}>
          <h1>{genre.name}</h1>
          { genre.albums.length > 0 &&
            <div className={styles.section}>
              <CardContainer content={genre.albums} />
            </div>
          }
        </div>
    );
  } else{
    return(
      <LoadingSpinner/>
    )
  }
};
export default GenrePage;