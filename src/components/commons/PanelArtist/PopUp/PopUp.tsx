import { useSelector } from "react-redux";
import CreateAlbum from "./CreateAlbum";
import EditAlbum from "./EditAlbum";
import EditSong from "./EditSong";
import Upload from "./Upload";

const PopUp = () => {
  const {type, item } = useSelector((state: any) => state.panel_artist.pop_up);
  switch (type) {
    case 'CreateAlbum':
      return <CreateAlbum item={item}/>
    case 'EditAlbum':
        return <EditAlbum item={item}/>
    case 'EditSong':
      return <EditSong item={item}/>
    case 'Upload':
      return <Upload/>
    default:
      return <></>
  }
};
export default PopUp;
