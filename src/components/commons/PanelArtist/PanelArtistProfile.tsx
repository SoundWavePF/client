import styles from "./PanelArtistProfile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as actionCreator from '../../../redux/actions/action_artist';
import { bindActionCreators } from "redux"; 
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
//import { Button } from "react-bootstrap/lib/InputGroup";
import Table from 'react-bootstrap/Table';

import pencil from '../../../assets/pencil.svg'

interface myProps {
  content?: any;
}
interface buttonProps {
  action: any;
  state: boolean
}

const EditButton: React.FunctionComponent<buttonProps>  = (props)=>{
  return (
    <button onClick={()=>props.action(!props.state)}  className={styles.button}>
      <img src={pencil} width='22px' />
        Edit
    </button>
  )
}


const PanelArtistProfile: React.FC<myProps> = ({ content }: myProps) => {
  const {username, email, artist} = useSelector((state: any) => state.user_info);
  const {name, image_medium, description, totalFavoriteCount, n_albums, n_songs, totalPlayCount, totalPlaylistCount, stripe_Id, donations} = useSelector((state: any) => state.panel_artist.info);
  const dispatch = useDispatch();
  const { changeAbout } = bindActionCreators(actionCreator, dispatch);
  // const imageHC = 'https://e-cdns-images.dzcdn.net/images/artist/5e17a1209254de68d7edcf9cccccdf67/250x250-000000-80-0-0.jpg';
  // const nameHC = 'Maluma';
  // const textHC = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi placeat exercitationem vel sit maxime,\nab obcaecati architecto sint molestiae unde amet quasi harum iusto, beatae esse. Iste, quasi perferendis?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam perspiciatis impedit, nisi quasi provident,<br/> possimus repellat cupiditate totam mollitia non magni expedita? Aut quo vel sed cum, optio nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore animi aperiam ad consectetur saepe, vero expedita fugit, necessitatibus distinctio odio eum repellendus illum dolor eaque vitae libero eveniet! Iure, inventore. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
  const [edit, setEdit] = useState<boolean>(false);
  const [about, setAbout] = useState<string>(description);
  const [stateName, setStateName] = useState<string>(name);
  const [stateImage, setStateImage] = useState<string>(image_medium);
  const [file, setFile] = useState<any>('');
  const navigate = useNavigate()
  
  function cancel(){
    setEdit(false);
    setAbout(description);
    setStateName(name);
    setStateImage(image_medium);
  }
  function handleSubmit(){
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "album_image");
    if (file) {
      changeAbout(email, about, stateName, stateImage, data);
    } else {
      changeAbout(email, about, stateName, stateImage);
    }
    setEdit(false);
  }
  async function handleEnableDonation(){
    const {data} = await axios.post('https://api-production-b004.up.railway.app/linkPayment', {email: email})
    window.location.href = data.url;
  }
  return (
    <div className={styles.container}>
      {/* <button className={styles.button} onClick={()=>navigate('/home')}>
        <span>home</span>
      </button> */}
      <div className={styles.details}>
        <div>
          <div className={styles.upload}>
            <img src={stateImage} alt="cover"/>
            <label style={!edit?{"display":"none"}:{}}>
              <span></span>
              <input type="file" accept="image/*" onChange={(e)=>{
                setFile(e.target.files);
                let local = e.target.files;
                if (local) {setStateImage(URL.createObjectURL(local[0]))};
              }}/>
            </label>
          </div>
          {
            stripe_Id ?
            <button disabled={true} style={{"opacity":".5"}}>(Donations enabled)</button>
            :
            <button onClick={()=>handleEnableDonation()} className={styles.btn} style={{"width":"10rem"}}>Enable Donations</button>
          }
        </div>
        <div>
          {
            edit ?
            <input type="text" value={stateName} onChange={(e:any)=>setStateName(e.target.value)}/>
            :
            <h1>{stateName}</h1>
          }
          {
            edit ? 
            <div>
              <textarea value={about} onChange={(e) => setAbout(e.target.value)} className={styles.textarea} required>
              </textarea>
            </div>
            :
            <div>
              <p>{about}</p>
            </div>
          }
        </div>
      </div>
      {/* <img src={stateImage} alt={username} /> */}
      {
        !edit ?
        <div>
          <EditButton action={setEdit} state={edit}/>
        </div>
        :
        <div>
          <button onClick={handleSubmit} className={styles.btn}>OK</button>
          <button onClick={cancel} className={styles.btn2}>Cancel</button>
        </div>
      }
      {/* stats harcodeadas */}
      <div className={styles.statContainer}>
        <div className={styles.statInfo}>
            <div className={styles.title}>Songs</div>
            <div className={styles.value}>{n_songs}</div>
        </div>
        <div className={styles.statInfo}>
            <div className={styles.title}>Likes</div>
            <div className={styles.value}>{totalFavoriteCount}</div>
        </div>
        <div className={styles.statInfo}>
            <div className={styles.title}>Albums</div>
            <div className={styles.value}>{n_albums}</div>
        </div>
        <div className={styles.statInfo}>
            <div className={styles.title}>Play Count</div>
            <div className={styles.value}>{totalPlayCount}</div>
        </div>
        <div className={styles.statInfo}>
            <div className={styles.title}>Playlist</div>
            <div className={styles.value}>{totalPlaylistCount}</div>
        </div>
        <div className={styles.statInfo}>
            <div className={styles.title}>Donations</div>
            <div className={styles.value}>${donations?.map((donation: any)=>Number(donation.amount)).reduce((a:number, b:number)=>a+b, 0)}</div>
        </div>
      </div>

    <Table className={styles.tablita} striped bordered size="sm" style={{"backgroundColor":"transparent"}}>

      <thead>
        <tr className={'table-secondary'}>
          <th>Donation ID</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {donations !== undefined && donations?.map((donation:any)=>{
            return (
              <tr>
                <td>{donation.id}</td>
                <td>${donation.amount}</td>
                <td>{donation.createdAt.split('T')[0]}</td>
              </tr>
            )
          }
        )}
      </tbody>
    </Table>

    </div>
  )
};
export default PanelArtistProfile;
