import m from './AdminStats.module.css'

const AdminStats = ({pageStats}:any)=>{
  return(
    <div>
      <div className={m.cardContainer}>
        <div>
          <h2>Total Songs: {pageStats.totalsongs}</h2>
        </div>
        <div>
          <h2>Total Admin Users: {pageStats.totaladminusers}</h2>
        </div>
        <div>
          <h2>Total Regular Users: {pageStats.totalregularusers}</h2>
        </div>
        <div>
          <h2>Total Users: {pageStats.totalusers}</h2>
        </div>
        <div>
          <h2>Total Albums: {pageStats.totalalbums}</h2>
        </div>
        <div>
          <h2>Total Artists: {pageStats.totalartists}</h2>
        </div>        
        <div>
          <h2>Total Genres: {pageStats.totalgenres}</h2>
        </div>
        <div>
          <h2>Total Playlists: {pageStats.totalplaylists}</h2>
        </div>
        <div>
          <h2>Play Count: {pageStats.totalplaycount}</h2>
        </div>
      </div>
    </div>
  )

//LIGHT MODE
//--text-contrast-secundary:   black;

//DARK MODE
//--text-contrast-secundary:  var(--yellow-light);





}
export default AdminStats