import styles from "./PanelArtistProfile.module.css";
import { useSelector } from "react-redux";

interface myProps {
  content?: any;
}

const PanelArtistProfile: React.FC<myProps> = ({ content }: myProps) => {
  const {id, username, email, image_avatar} = useSelector((state: any) => state.user_info);
  const imageHC = 'https://ca.slack-edge.com/TPRS7H4PN-U033J87QWUE-d32d957d0868-512';
  const nameHC = 'Miguel Garcia';
  const textHC = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi placeat exercitationem vel sit maxime,\nab obcaecati architecto sint molestiae unde amet quasi harum iusto, beatae esse. Iste, quasi perferendis?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam perspiciatis impedit, nisi quasi provident,<br/> possimus repellat cupiditate totam mollitia non magni expedita? Aut quo vel sed cum, optio nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore animi aperiam ad consectetur saepe, vero expedita fugit, necessitatibus distinctio odio eum repellendus illum dolor eaque vitae libero eveniet! Iure, inventore. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';

  return (
    <div className={styles.container}>
      <img src={imageHC} alt={username} />
      <span>{nameHC}</span>
      {/* stats harcodeadas */}
      <div className={styles.statContainer}>
        <div className={styles.statInfo}>
            <div className={styles.title}>Songs</div>
            <div className={styles.value}>33</div>
        </div>
        <div className={styles.statInfo}>
            <div className={styles.title}>Likes</div>
            <div className={styles.value}>5130</div>
        </div>
        <div className={styles.statInfo}>
            <div className={styles.title}>Albums</div>
            <div className={styles.value}>9</div>
        </div>
        <div className={styles.statInfo}>
            <div className={styles.title}>Views</div>
            <div className={styles.value}>15000</div>
        </div>
      </div>
      <p>{textHC}</p>
    </div>
  )
};
export default PanelArtistProfile;
