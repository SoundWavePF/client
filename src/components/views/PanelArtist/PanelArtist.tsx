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
import PopUp from "../../commons/PanelArtist/PopUp/PopUp";

const PanelArtist = () => {
  const [page, setPage] = useState(1)
  const { email, rol, artist } = useSelector((state: any) => state.user_info);
  const dispatch = useDispatch();
  const { getPanelInfo } = bindActionCreators(actionCreator, dispatch);
  // const idTest = '63ab0aae-f562-4f5a-af65-97d14c8d5100';
  useEffect(()=>{
    getPanelInfo(artist?.id, email);
  },[]);
  useEffect(()=>{
    getPanelInfo(artist?.id, email);
  },[email])

  function handlePage(page: number) {
    setPage(page);
  }
  return (
    rol === 'artist' ?
    <div className={styles.container}>
        <FloatButton />
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
        <PopUp/>
      </div>
    :
    <Error404/>
  );
}
export default PanelArtist