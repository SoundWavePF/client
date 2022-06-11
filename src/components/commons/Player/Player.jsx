import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { sendPrevPlay, addToQueue } from '../../../redux/actions/action_player';

export default function Player(){
  const player = useRef();
  const dispatch = useDispatch();
  const queue = useSelector(state => state.queue);
  const prevPlay = useSelector(state => state.prevPlay)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [pos, setPos] = useState(0);
  const [volume, setVolume] = useState('100');
  useEffect(() => {
    chargeState();
  }, [])
  useEffect(() => updatePos(), [queue]);
  useEffect(() => {
    return () => dispatch(sendPrevPlay(isPlaying, currentTime, pos, volume));
  }, [volume, currentTime])
  function chargeState(){
    if (prevPlay.pos !== undefined) setPos(prevPlay.pos);
    if (prevPlay.volume !== undefined) setVolume(prevPlay.volume);
    if (prevPlay.currentTime !== undefined) setCurrentTime(prevPlay.currentTime);
    if (prevPlay.isPlaying !== undefined) setIsPlaying(prevPlay.isPlaying);
  }
  function updatePos(){
    if(pos > queue.length){
      setPos(0);
      setCurrentTime(0);
    }
  }
  function prettyTime(time){
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - (minutes * 60));
    if(seconds < 1) seconds = '00';
    else if(seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
  }
  function pausePlay(){
    setIsPlaying(!isPlaying);
  }
  function handleProgress(p){
    setCurrentTime(p.playedSeconds);
  }
  function prevSong(){
    if(queue[pos - 1]){
      setCurrentTime(0);
      setPos(pos - 1);
    }
  }
  function nextSong(){
    if(queue[pos + 1]){
      setCurrentTime(0);
      setPos(pos + 1);
    }
  }
  function mute(){
    if(volume === '0') setVolume('50');
    else setVolume('0');
  }
  function handleSeek(sec){
    player.current?.seekTo(sec, 'seconds');
  }
  return(
    <div className={styles.player}>
      <button onClick={() => dispatch(addToQueue())}>PLAY</button>
      <ReactPlayer
        url={queue[pos]?.preview}
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
          <button onClick={prevSong} className={styles.btn} disabled={queue[pos - 1] ? false : true}>{queue[pos - 1] ? <img src={prev} className={styles.btnImg}/> : <img src={prevvoid} className={styles.btnImg}/>}</button>
          <button onClick={pausePlay} className={styles.btn}>{isPlaying ? <img src={pause} className={styles.btnImg}/> : <img src={play} className={styles.btnImg}/>}</button>
          <button onClick={nextSong} className={styles.btn} disabled={queue[pos + 1] ? false : true}>{queue[pos + 1] ? <img src={next} className={styles.btnImg}/> : <img src={nextvoid} className={styles.btnImg}/>}</button>
          {prettyTime(currentTime)}/{player.current !== undefined ? prettyTime(player.current.getDuration()) : '0:00'}
        </div>
        <div className={styles.songInfo}>
          {queue[pos] ? <img src={queue[pos].album.image_medium} className={styles.cover}/> : null}
          <div>
            <h3>{queue[pos]?.title}</h3>
            <span>{queue[pos] ? queue[pos].artist + ' • ' + queue[pos].album.title : null}</span>
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