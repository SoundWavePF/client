import styles from "./PopUp.module.css";
import * as actionCreator from "../../../../redux/actions/action_artist";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Upload = () => {
  const dispatch = useDispatch();
  const { launchPopUp, uploadMusic, uploadNewAlbum } = bindActionCreators(actionCreator, dispatch);
  const {albums} = useSelector((state: any) => state.panel_artist);
  const {email} = useSelector((state: any) => state.user_info);
  const [files, setFiles] = useState<any>([]);
  const [sameAlbum, setSameAlbum] = useState<boolean>(false);
  const [albumForAll, setAlbumForAll] = useState<string>('');
  const [newAlbum, setNewAlbum] = useState<boolean>(false);
  // useEffect(()=>{
    
  // },[files])
  const playPause = (e:any) => {
    e.classList.toggle(styles.btnPlay);
    e.classList.toggle(styles.btnPause);
    let player = e.firstChild;
    if (player.paused) player.play()
    else {
      player.pause();
      player.currentTime = 0;
    }
  }
  const changeKey = (key: string, value:string|boolean, i:number) => {
    let newFiles = [...files];
    newFiles[i] = {
      ...newFiles[i],
      [key]: value
    }
    setFiles(newFiles);
    // console.log(files)
  }
  const removeItem = (i:number) => {
    let newFiles = [...files];
    newFiles.splice(i, 1);
    setFiles(newFiles);
  }
  const checkFields = () => {

  }
  const saveMusic = async () => {

    var sameAlbumId = albums.find((e:any)=>e.name===albumForAll)?.id
    let songsAlbum = []
    for (let i = 0; i < files.length; i++) {
      const song = files[i];
      const data = new FormData();
      data.append("file", song.data);
      data.append("upload_preset", "new_songs");
      if (!sameAlbum){
        let albumId = albums.find((e:any)=>e.name===song.album)?.id
        let obj = {email, name:song.name, albumId}
        console.log(`compo ${i}. `, obj)
        if (song.isSingle){
          uploadMusic({email, name:song.name}, data)
        } else {
          uploadMusic({email, name:song.name, albumId}, data)
        }
      } else if (!newAlbum) {
        let obj = {email, name:song.name, albumId: sameAlbumId}
        console.log(`compo ${i}. `, obj)
        uploadMusic({email, name:song.name, albumId: sameAlbumId}, data);
      } else {
        let obj = {name:song.name, albumName: albumForAll}
        console.log(`compo ${i}. `, obj)
        songsAlbum.push({name:song.name, data})
        // uploadMusic({email, name:song.name, albumName: albumForAll}, data);
        // await new Promise(res => setTimeout(res,500));
      }
    }
    if (sameAlbum && newAlbum) uploadNewAlbum(email, albumForAll, songsAlbum);
    launchPopUp(false);
  }
  return (
    <div className={styles.background}>
      <div className={styles.floating} style={{'width': '800px', 'height': 'auto', 'minHeight':'350px'}}>
        <h3>Upload your music</h3>
        <div className={styles.uploadMusic}>
          <label className={styles.selectFiles}>Select files
            <input type="file" accept="audio/*" multiple onChange={(e)=>{
              let local = e.target.files;
              if (local?.length) {
                let newFiles: any[] = [];
                for (let i = 0; i < local.length || 0; i++) {
                  console.log('a file ',local[i])
                  newFiles.push({audio: URL.createObjectURL(local[i]), album: '', name:local[i].name?.split('.mp3')[0], isSingle:false, data:local[i]});
                }
                setFiles([...files, ...newFiles]);
              };
            }}/>
          </label>
          {
            files.length>0 &&
            <div className={styles.albumOptions}>
              <label>Same album</label>
              <input type="checkbox" checked={sameAlbum} onChange={(e:any) => setSameAlbum(e.target.checked)}/>    
              <select value={sameAlbum&&!newAlbum?albumForAll:''} disabled={newAlbum||!sameAlbum} onChange={(e:any)=>setAlbumForAll(e.target.value)}>
                {
                  albums.length>0 &&
                  <option value=''>{!sameAlbum?'':newAlbum?'':'select album'}</option>
                }
                {
                  albums?.map((e:any, i:number) => (
                    <option key={i} value={e.name}>{e.name}</option>
                  ))
                }
              </select>
              <label style={!sameAlbum?{'opacity':'30%'}:{}}>New album</label>
              <input type="checkbox" checked={newAlbum} disabled={!sameAlbum} onClick={()=>setAlbumForAll('')} onChange={(e:any) => setNewAlbum(e.target.checked)}/>
              <input type="text" value={newAlbum?albumForAll:''} placeholder={newAlbum?'Album title...':''} disabled={!newAlbum||!sameAlbum} 
              onChange={(ev:any) => setAlbumForAll(ev.target.value)}/>
            </div>
          }
          <div>
          { files.length>0 &&
            files.map((e:any,i:number) => (
              <div className={styles.itemUpload}>
                <button className={styles.btnPlay} onClick={(e:any) => playPause(e.target)}>
                  <audio key={i} src={e.audio} controls style={{"display":"none"}}></audio>
                </button>
                <input type="text" value={e.name} placeholder='Song title...' onChange={(ev:any) => changeKey('name', ev.target.value, i)}/>
                <select value={sameAlbum?'':!e.isSingle?e.album:e.name?.trim()?e.name+' - Single':''} disabled={sameAlbum || e.isSingle}
                onChange={(ev:any) => changeKey('album', ev.target.value, i)}>
                  { 
                    albums?.length>0 &&
                    <option value=''>{sameAlbum?'':!e.isSingle?'select album':e.name?.trim()?e.name+' - Single':'Single'}</option>
                  }
                  {
                    albums?.map((e:any, i:number) => (
                      <option key={i} value={e.name}>{e.name}</option>
                    ))
                  }
                </select>
                <label>single

                <input type="checkbox" disabled={sameAlbum} checked={e.isSingle} onChange={(ev:any) => changeKey('isSingle', ev.target.checked, i)}/>
                </label>
                <button className={styles.btnRemove} onClick={()=>removeItem(i)}></button>
              </div>
            ))
          }
          </div>
        </div>
        <div>
          <button className={styles.btn} onClick={saveMusic}>Upload</button>
          <button className={styles.btn} style={{"backgroundColor":"orange"}} onClick={()=>launchPopUp(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
};
export default Upload;
