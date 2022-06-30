import styles from "./PopUp.module.css";
import * as actionCreator from "../../../../redux/actions/action_artist";
import * as actionCreatorPlayer from "../../../../redux/actions/action_player";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import defaultImg from '../../../../assets/playlistFran.png'
import { useSelector } from "react-redux";

interface myProps {
  item?: any;
}

const EditAlbum: React.FC<myProps> = ({ item }: myProps) => {
  const {email} = useSelector((state: any) => state.user_info);
  const {genres} = useSelector((state: any) => state.home);
  const {pop_up} = useSelector((state: any) => state.panel_artist);
  const dispatch = useDispatch();
  const { launchPopUp, updateAlbum, deleteAlbum } = bindActionCreators(actionCreator, dispatch);
  const { getGenres } = bindActionCreators(actionCreatorPlayer, dispatch);
  const [name, setName] = useState<string>(pop_up.item?.name);
  const [date, setDate] = useState<any>(pop_up.item?.release_date);
  const [img, setImg] = useState<string>(pop_up.item?.image_medium);
  const [file, setFile] = useState<any>('');
  const [genre, setGenre] = useState<string>(pop_up.item?.genres[0]?.id);
  const editAlbum = async () => {
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "album_image");
    file?
    updateAlbum({email, id:pop_up.item?.id, name, date, genre}, data)
    :
    updateAlbum({email, id:pop_up.item?.id, name, date, genre}, data, img)
    // await new Promise(res => setTimeout(res,1500));
    // getPanelInfo(artist?.id, email);
    launchPopUp(false);
  }
  const deleteBtn = async() => {
    deleteAlbum(email, pop_up.item?.id);
    launchPopUp(false);
  }
  useEffect(()=>{
    getGenres();
  },[])
  return (
    <div className={styles.background}>
      <div className={styles.floating} style={{'width': '600px', 'height': '420px'}}>
        <h3>Create an album</h3>
        <div className={styles.createAlbum}>
          <div className={styles.upload}>
            <div>
              <img src={img?img:defaultImg} alt="album"/>
            </div>
            <label>
              <span></span>
              <input type="file" accept="image/*" onChange={(e)=>{
                setFile(e.target.files);
                let local = e.target.files;
                if (local) {setImg(URL.createObjectURL(local[0]))};
                // console.log('___subido',file)
              }}/>
            </label>
          </div>
          <label>Name
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
          </label>
          <label>Release date
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} max={new Date().toLocaleDateString('en-CA')}/>
          </label>
          <label>Genre
            <select value={genre} onChange={e=>setGenre(e.target.value)}>
              <option value=''></option>
              {
                genres?.map((e:any, i:number) => (
                  <option key={i} value={e.id}>{e.name}</option>
                ))
              }
            </select>
          </label>
        </div>
        <div>
          <button className={styles.btn} onClick={deleteBtn} style={{"backgroundColor":"red"}}>Delete</button>
          <button className={styles.btn} onClick={editAlbum}>Edit</button>
          <button className={styles.btn} onClick={()=>launchPopUp(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
};
export default EditAlbum;
