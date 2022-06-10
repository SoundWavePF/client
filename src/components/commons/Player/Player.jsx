import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import play from '../../../assets/play.png';
import pause from '../../../assets/pause.png';
import next from '../../../assets/next.png';
import prev from '../../../assets/prev.png';
import nextvoid from '../../../assets/nextvoid.png';
import prevvoid from '../../../assets/prevvoid.png';
import muteicon from '../../../assets/mute.png';
import volume1 from '../../../assets/volume1.png';
import volume2 from '../../../assets/volume2.png';
import volume3 from '../../../assets/volume3.png';
import like from '../../../assets/likefull.png';
import styles from './Player.module.css';

export default function Player(){
  let songs = ['https://cdns-preview-7.dzcdn.net/stream/c-752f8fed9d345e4a13f001d84b8b461f-8.mp3', 'https://cdns-preview-7.dzcdn.net/stream/c-72696f0555122535b8c162ca9ffff9b4-8.mp3', 'https://cdns-preview-1.dzcdn.net/stream/c-16dc9be33bbef44979cdf3706bec4ecf-8.mp3']
  const player = useRef();
  const queue = useSelector(state => state.queue);
  // const prevPlay = useSelector(state => state.prevPlay)
  // useEffect(() => {
  //   chargeState();
  //   return () => dispatch(sendPrevPlay(isPlaying, currentTime, pos, volume))
  // }, [])
  // useEffect(() => updatePos(), [queue])
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [pos, setPos] = useState(0);
  const [volume, setVolume] = useState('100');
  // function chargeState(){
  //   setIsPlaying(prevPlay.isPlaying);
  //   setCurrentTime(prevPlay.currentTime);
  //   setPos(prevPlay.pos);
  //   setVolume(prevPlay.volume);
  // }
  // function updatePos(){
  //   if(pos < queue.length) setPos[0]
  // }
  function prettyTime(time){
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - (minutes * 60))
    if(seconds < 1) seconds = '00'
    else if(seconds < 10) seconds = '0' + seconds
    return `${minutes}:${seconds}`
  }
  function pausePlay(){
    setIsPlaying(!isPlaying);
  }
  function handleProgress(p){
    setCurrentTime(p.playedSeconds)
  }
  function prevSong(){
    if(songs[pos - 1]) setPos(pos - 1)
  }
  function nextSong(){
    if(songs[pos + 1]) setPos(pos + 1)
  }
  function mute(){
    if(volume === '0') setVolume('50')
    else setVolume('0')
  }
  function handleSeek(sec){
    player.current?.seekTo(sec, 'seconds')
  }
  return(
    <div className={styles.player}>
      <ReactPlayer
        url={songs[pos]}
        playing={isPlaying}
        onEnded= {nextSong}
        ref={player}
        volume={parseInt(volume)/100}
        progressInterval={500}
        onProgress={handleProgress}
        height={0}
        width={0}
      />
      <div className={styles.seekbar}>
        <input type='range' value={currentTime} min='0' max={player.current?.getDuration()} onChange={e => handleSeek(e.target.value)} className={styles.seek}></input>
      </div>
      <div className={styles.semicontainer}>
        <div className={styles.audioCtrl}>
          <button onClick={prevSong} className={styles.btn} disabled={songs[pos - 1] ? false : true}>{songs[pos - 1] ? <img src={prev} className={styles.btnImg}/> : <img src={prevvoid} className={styles.btnImg}/>}</button>
          <button onClick={pausePlay} className={styles.btn}>{isPlaying ? <img src={pause} className={styles.btnImg}/> : <img src={play} className={styles.btnImg}/>}</button>
          <button onClick={nextSong} className={styles.btn} disabled={songs[pos + 1] ? false : true}>{songs[pos + 1] ? <img src={next} className={styles.btnImg}/> : <img src={nextvoid} className={styles.btnImg}/>}</button>
          {prettyTime(currentTime)}/{player.current !== undefined ? prettyTime(player.current.getDuration()) : '0:00'}
        </div>
        <div className={styles.songInfo}>
          {queue[pos] ? <img src={queue[pos].album.cover_medium} className={styles.cover}/> : null}
          <div>
            <h3>{queue[pos]?.title}</h3>
            <span>{queue[pos] ? queue[pos].artist.name + ' • ' + queue[pos].album.title : null}</span>
          </div>
        </div>
        <div className={styles.volume}>
          <button className={styles.btn}><img src={like} className={styles.btnImg}/></button>
          <button onClick={mute} className={styles.btn}><img src={parseInt(volume) === 0 ? muteicon : parseInt(volume) < 33 ? volume1 : parseInt(volume) < 66 ? volume2 : volume3} className={styles.btnImg}/></button>
          <input type='range' value={volume} min='0' max='100' onChange={e => setVolume(e.target.value)} className={styles.volumeR}/>
        </div>
      </div>
    </div>
  )
}
