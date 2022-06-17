import styles from "./TopPage.module.css";
import CardContainer from "../CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";
import { useParams } from "react-router";
import TopCard from "./TopCard";

const TopPage = () => {
  const {id} = useParams()
  console.log(id)
  const dispatch = useDispatch();
  const { getTop } = bindActionCreators(actionCreator,dispatch);
  const top = useSelector((state: any) => state.top);
  const topTen = top.slice(0,10).reverse()
  useEffect(():any => {
    getTop();
  }, []);

  if(topTen.length>0){
    //let top = {num:0};
    return (
        <div className={styles.container}>
          { topTen.length > 0 &&
            <div className={styles.section}>
              <h1 >TOP 10</h1>
            </div>
          }
          <div className={styles.cardContainer}>
            {topTen.map((song:any)=><TopCard props={{...song,...{num: topTen.indexOf(song)+1}}}/>)}
          </div>
        </div>
    );
  } else{
    return(
      <div className={styles.container}>
            <div className={styles.sectionLoading}>
              <div className="spinner-border"  role="status"></div>
            </div>
        </div>
    )
  }
};
export default TopPage;