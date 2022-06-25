import styles from "./PanelArtistProfile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as actionCreator from '../../../redux/actions/action_artist';
import { bindActionCreators } from "redux"; 
import axios from 'axios';
//import { Button } from "react-bootstrap/lib/InputGroup";

import Button from '../Button/Button' 

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
    <svg className="css-i6dzq1" stroke-linejoin="round" 
      stroke-linecap="round" fill="gray" stroke-width="2" 
      stroke="black" height="24" width="24" viewBox="0 0 24 24">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
    Edit
</button>
  )
}


const PanelArtistProfile: React.FC<myProps> = ({ content }: myProps) => {
  const {name, username, email, artist} = useSelector((state: any) => state.user_info);
  const {description, totalFavoriteCount, n_albums, n_songs, totalPlayCount, totalPlaylistCount, stripe_Id} = useSelector((state: any) => state.panel_artist.info);
  const dispatch = useDispatch();
  const { changeAbout } = bindActionCreators(actionCreator, dispatch);
  // const imageHC = 'https://e-cdns-images.dzcdn.net/images/artist/5e17a1209254de68d7edcf9cccccdf67/250x250-000000-80-0-0.jpg';
  // const nameHC = 'Maluma';
  // const textHC = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi placeat exercitationem vel sit maxime,\nab obcaecati architecto sint molestiae unde amet quasi harum iusto, beatae esse. Iste, quasi perferendis?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam perspiciatis impedit, nisi quasi provident,<br/> possimus repellat cupiditate totam mollitia non magni expedita? Aut quo vel sed cum, optio nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore animi aperiam ad consectetur saepe, vero expedita fugit, necessitatibus distinctio odio eum repellendus illum dolor eaque vitae libero eveniet! Iure, inventore. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
  const [edit, setEdit] = useState<boolean>(false);
  const [about, setAbout] = useState<string>(artist.description);
  function cancel(){
    setEdit(false);
    setAbout(description);
  }
  function handleSubmit(){
    setEdit(false);
    changeAbout(email, about);
  }
  async function handleEnableDonation(){
    const {data} = await axios.post('https://www.javierochoa.me/linkPayment', {email: email})
    window.location.href = data.url;
  }

  return (
    <div className={styles.container}>
      <Button/>
      <img src={artist.image_medium} alt={username} />
      <span>{artist.name}</span>
      {stripe_Id ? <p>(Donations enabled)</p> :  <button onClick={()=>handleEnableDonation()} className={styles.btn}>Enable Donations</button> }
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
      </div>
      {
        edit ? 
        <div>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} className={styles.textarea} required>
          </textarea>
          <button onClick={handleSubmit} className={styles.btn}>OK</button>
          <button onClick={cancel} className={styles.btn2}>Cancel</button>
        </div>
        :
        <div>
          <p>{about}</p>
          <EditButton action={setEdit} state={edit}/>
        </div>}
      
    </div>
  )
};
export default PanelArtistProfile;
