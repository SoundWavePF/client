import styles from "./PanelArtistContent.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_artist";
import ListItemContainerPanelArtist from "./ContainerList/ListItemContainer";
import { useEffect, useState } from "react";
import searchIcon from "../../../assets/search_icon.png";

interface myProps {
  content?: any;
}

const PanelArtistSongs: React.FC<myProps> = ({ content }: myProps) => {
  const {songs, filtered} = useSelector((state: any) => state.panel_artist);
  const dispatch = useDispatch();
  const { setFiltered } = bindActionCreators(actionCreator, dispatch);
  const [input, setInput] = useState("");
  useEffect(() => {
    if (!input) {
      setFiltered(songs);
    } else {
      let filter = songs.filter((song:any)=>song.name.toLowerCase().includes(input.toLowerCase()))
      setFiltered(filter)
    }
  },[input, songs])

  function handleChange(e: any): void {
    setInput(e.target.value);
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
        filtered?.length>0 ?
        <ListItemContainerPanelArtist content={filtered} nb={true}/>
        :
        <h1>no hay resultados</h1>
      }
    </div>
  )
};
export default PanelArtistSongs;
