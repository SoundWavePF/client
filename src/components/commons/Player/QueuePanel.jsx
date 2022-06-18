import React, { useState, useRef, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ReactSortable} from "react-sortablejs";

import * as actionCreator from '../../../redux/actions/action_player';
import { bindActionCreators } from "redux";


import style from './QueuePanel.module.css';

/* 
image_small
name
*/
const Song = (props)=>{
    const dispatch = useDispatch()
    const {playSong}  = bindActionCreators(actionCreator, dispatch);

    function handleClick(){
        playSong(props.item)
    }

    return (
        <div className={style.song } >
            <div className={style.name}  onClick={handleClick}>
                =
                <img className={style.image} src={props.item.image_small} alt="" /> 
                {props.index}. {props.item.name}
            </div>
            <div className={style.info}><img width={'20px'} src={'https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1655499956~hmac=b249cc39a084dc454c2b40090aea3340'}/> </div>
        </div>
    )
}

const QueuePanel = ()=>{
    const [open, setOpen] = useState(false);
    const queue = useSelector(state=>state.queue);
    const dispatch = useDispatch()
   
    const {sortQueue}  = bindActionCreators(actionCreator, dispatch)
    
    console.log('queue', queue)

    const container = useRef(null); 

    console.log(queue)

    function click(event) {
        if (!container.current.contains(event.target)) {
            setOpen(false);
        }
        console.log('Click Event', event.target)
    }

    useEffect(() => {
        document.body.addEventListener('click', click);
        return () => {
            document.body.removeEventListener('click', click);
        }
    }, [])

    function toggle(event) {
        setOpen(!open)
        console.log(event)
    }



    return (
    <div ref={container}>
        <div onClick={toggle}>
            <div className={style.notification} >{queue.length}</div>
            <img className={style.queueIcon} src={'https://prints.ultracoloringpages.com/e5522d83b1dff43a54152150fc1c1a01.png'} height='60px' width='60px' />
        </div>
        {
            !open ? null :
                <div className={style.box}>
                    <h4>Queue</h4>
                    <hr/>
                    <ReactSortable list={queue} setList={sortQueue} sort={true}>
                        {queue.map((song, index) => <Song key={index} item={song} index={index+1}  />
                        )}
                    </ReactSortable>
                </div>
        }
    </div>
    )
  }


export default QueuePanel;