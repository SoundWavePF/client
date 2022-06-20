import styles from "./PanelArtistContent.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_artist";
import ListItemContainerPanelArtist from "./ContainerList/ListItemContainer";
import { useState } from "react";
import searchIcon from "../../../assets/search_icon.png";

interface myProps {
  content?: any;
}

const PanelArtistSongs: React.FC<myProps> = ({ content }: myProps) => {
  const {songs} = useSelector((state: any) => state.artist);
  const dispatch = useDispatch();
  const {  } = bindActionCreators(actionCreator, dispatch);
  const [songsState, setSongsState] = useState([...songs])
  const [input, setInput] = useState("")
  const searchSong = ()=>{
    if(input=== ''){
      setSongsState(songs)
    } else{
      setSongsState(songs.filter((song:any)=>song.name.toLowerCase().includes(input.toLowerCase())))
      console.log(songsState)
    }
  }
  function handleChange(e: any): void {
    setInput(e.target.value);
    searchSong();
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setInput("");
  }
  return (
    <div className={styles.container}>
      <h1>My Songs</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.search}>
          <img src={searchIcon} width="20px" />
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Search Song"
            value={input}
            onChange={handleChange}
            />
        </div>
      </form>
      {
        songsState.length>0 ?
        <ListItemContainerPanelArtist content={songsState}/> 
        :
        <h1>no hay resultados</h1>
      }
    </div>
  )
};
export default PanelArtistSongs;
