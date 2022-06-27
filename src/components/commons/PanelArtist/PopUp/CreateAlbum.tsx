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

const CreateAlbum: React.FC<myProps> = ({ item }: myProps) => {
  const {email, artist} = useSelector((state: any) => state.user_info);
  const {genres} = useSelector((state: any) => state.home);
  const dispatch = useDispatch();
  const { launchPopUp, createAlbum, getPanelInfo } = bindActionCreators(actionCreator, dispatch);
  const { getGenres } = bindActionCreators(actionCreatorPlayer, dispatch);
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<any>(new Date().toLocaleDateString('en-CA'));
  const [img, setImg] = useState<string>('');
  const [file, setFile] = useState<any>('');
  const [genre, setGenre] = useState<string>('');
  const saveAlbum = async () => {
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "album_image");
    createAlbum({email, name, date, genre}, data);
    // await new Promise(res => setTimeout(res,1500));
    // getPanelInfo(artist?.id, email);
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
          <button className={styles.btn} onClick={saveAlbum}>Save</button>
          <button className={styles.btn} onClick={()=>launchPopUp(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
};
export default CreateAlbum;
