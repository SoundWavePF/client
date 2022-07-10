import React, { useState, useRef, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ReactSortable} from "react-sortablejs";
import { useAuth0 } from '@auth0/auth0-react';

import * as actionCreator from '../../../redux/actions/action_player';
import { bindActionCreators } from "redux";

import playlist from '../../../assets/playlist.png'
import bintrash from '../../../assets/bintrash.png'
import loopIcon from '../../../assets/looping-arrows.png'

import style from './QueuePanel.module.css';
import SoundWave from '../SoundWave/SoundWave';

const Song = (props)=>{
    const {user} = useAuth0() 
    const dispatch = useDispatch()
    const {deleteFromQueue}  = bindActionCreators(actionCreator, dispatch);
    const renderWave = useSelector( (state)=>{
        const {currentSongPosition, isPlaying} = state.player
        return state.queue[currentSongPosition]?.id === props.item.id && isPlaying
      })
    const queue = props.queue

    function handleClick(){
        props.setCurrentSong(props.index -1)
    }
    function handleDelete (){
        deleteFromQueue(props.item.id)
    }

    return (
        <div className={props.style} >
            <div className={style.name}  onClick={handleClick}>
                =
                <img className={style.image} src={props.item.image_small} alt="" />
                {props.index}. <span>{props.item.name}</span>
                {renderWave? <SoundWave/>: null}
            </div>
            <button onClick={handleDelete} className={style.delete}>✖</button>
        </div>
    )
}

const QueuePanel = (props)=>{
    const [open, setOpen] = useState(false);
    const queue = useSelector(state=>state.queue);
    const dispatch = useDispatch()

    const {sortQueue}  = bindActionCreators(actionCreator, dispatch)


    const container = useRef(null);

    function click(event) {
        if (!container.current.contains(event.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', click);
        return () => {
            document.body.removeEventListener('click', click);
        }
    }, [])

    function toggle(event) {
        setOpen(!open)
    }

    function setLoop(){
        props.setLoopPlaying(!props.loopPlaying)
        console.log('QUeue loop',props.loopPlaying)
    }

    return (
    <div ref={container}>
        <div onClick={toggle}>
            <div className={style.notification} >{queue.length}</div>
            <img className={style.queueIcon} src={playlist} height='60px' width='60px' />
        </div>
        {
            !open ? null :
                <div className={style.box}>
                    <h4>Queue</h4>
                    <button className={props.loopPlaying? style.buttonLoopActive: style.buttonLoop } onClick={setLoop}>
                        <img className={style.loopIcon} src={loopIcon}/>
                    </button>
                    <hr/>
                    <ReactSortable list={queue} setList={sortQueue} sort={true}>
                        {queue.map((song, index) => <Song
                          key={index}
                          item={song}
                          index={index+1}
                          style={ props.songPosition === index? style.currentSong: style.song }
                          setCurrentSong={props.setSongPosition}
                          queue={queue}
                        />
                        )}
                    </ReactSortable>
                </div>
        }
    </div>
    )
  }


export default QueuePanel;
