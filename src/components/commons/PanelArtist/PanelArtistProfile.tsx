import styles from "./PanelArtistContent.module.css";
import { useSelector } from "react-redux";

interface myProps {
  content?: any;
}

const PanelArtistProfile: React.FC<myProps> = ({ content }: myProps) => {
  const {id, username, email, image_avatar} = useSelector((state: any) => state.user_info);
  return (
    <div className={styles.container}>
      <span>{username}</span>
      <img src={image_avatar} alt={username} />
    </div>
  )
};
export default PanelArtistProfile;
