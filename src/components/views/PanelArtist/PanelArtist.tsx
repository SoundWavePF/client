import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import admin from "../../../assets/admin.png";
import music from "../../../assets/music.png";
import info from "../../../assets/more-info.webp";
import styles from "./PanelArtist.module.css";
import sidebar from "./Sidebar.module.css";
import * as actionCreator from "../../../redux/actions/action_artist";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Error404 from "../error404/error404";
import UserMenu from "../../commons/SearchBar/MenuUser";
import { useEffect, useState } from "react";
import ArtistProfile from "../../commons/ArtistProfile/ArtistProfile";
import PanelArtistProfile from "../../commons/PanelArtist/PanelArtistProfile";
import PanelArtistSongs from "../../commons/PanelArtist/PanelArtistSongs";
import PanelArtistAlbums from "../../commons/PanelArtist/PanelArtistAlbums";
import Player from "../../commons/Player/Player";
import FloatButton from "../../commons/FloatButton/FloatButton";

const PanelArtist = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const { getArtist } = bindActionCreators(actionCreator, dispatch)
  const { rol, id } = useSelector((state: any) => state.user_info);
  const idTest = '39c2137e-990c-44b3-878c-442d2f2d8442';
  useEffect(()=>{
    getArtist(idTest)
  },[])
  function handlePage(page: number) {
    setPage(page);
  }
  return (
    rol === "user" ?
      <div>
        <div className={sidebar.container}>
          <div>
            <img src={logo} alt="SoundWave logo" className={sidebar.logo} />
            <span>SoundWave</span>
          </div>
          <div className={sidebar.button} onClick={()=>handlePage(1)}>
            <img src={admin} alt="prof" className={sidebar.img} />
            Profile
          </div>
          <div className={sidebar.button} onClick={()=>handlePage(2)}>
            <img src={music} alt="music" className={sidebar.img} />
            Songs
          </div>
          <div className={sidebar.button} onClick={()=>handlePage(3)}>
            <img src={music} alt="music" className={sidebar.img} />
            Albums
          </div>
          <div className={sidebar.button} onClick={()=>handlePage(4)}>
            <img src={info} alt="info" className={sidebar.img} />
            Stats
          </div>
        </div>
        <div className={styles.usermenu}>
          <UserMenu username={"username"}/>
        </div>
        { 
          page === 1 ?
          <div className={styles.content}>
            <PanelArtistProfile/>
          </div>
          : page === 2 ?
          <div className={styles.content}>
            <PanelArtistSongs/>
          </div>
          : page === 3 ?
          <div className={styles.content}>
            <PanelArtistAlbums/>
          </div>
          :
          <div className={styles.content}>
            <ArtistProfile/>
          </div>
        }
        <Player/>
        <FloatButton />
      </div>
    :
    <Error404/>
  );
}
export default PanelArtist