import style from './ArtistCardContainer.module.css'
import { useSelector } from 'react-redux'
import CardContainer from './../../CardContainer/CardContainer';
import ListItem from '../../ListItemContainer/ListItem'

const ArtistCardContainer = ({ props }: any) => {
  const artist = useSelector((state: any) => state.artist)
  const artistTop = useSelector((state: any) => state.artistTop)
  switch (props) {
    case 'Top':
      return (
        <div>
          {artistTop.length > 0 ? artistTop.slice(0, 5).map((song: any, index:number) => <div key={index} className={style.listDiv}><ListItem item={song} /></div>) : <h1>cargando</h1>}
        </div>
      )
    case 'Albums':
      return (
        <div>
          {<CardContainer content={artist.albums} />}
        </div>
      )
    case 'Singles':
      return (
        <div>
          {artist.songs.length > 0 ? artist.songs.map((song: any, index: number) => <div key={index} className={style.listDiv} ><ListItem item={song} /></div>) : <h1>cargando</h1>}
        </div>
      )
    case 'Description':
      return (
        <div className={style.descriptionContainer}>
          <p>{artist.description}</p>
        </div>
      )
    case 'Donations':
      return (
        <div>
          {artist.donations.length > 0 ? artist.donations.slice(0, 5).map((song: any, index:number) => <div key={index} className={style.listDiv}><ListItem item={song} /></div>) : <h1>No one has donated to this artist</h1>}
        </div>
      )
    default:
      return (<></>)
  }



}
export default ArtistCardContainer
