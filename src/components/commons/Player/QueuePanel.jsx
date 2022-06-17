import React, { useState, useRef, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {ReactSortable} from "react-sortablejs"

import style from './QueuePanel.module.css';

/* 
image_small
name
*/
const Song = (props)=>{

    function handleClick(){
        alert('play')
    }

    return (
        <div className={style.song } >
            <div className={style.name}  onClick={handleClick}>
                <img className={style.image} src={props.item.image_small} alt="" /> 
                {props.index} {props.item.name}
            </div>
            <div className={style.info}><img width={'20px'} src={'https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1655499956~hmac=b249cc39a084dc454c2b40090aea3340'}/> </div>
        </div>
    )
}

const QueuePanel = ()=>{
    const [open, setOpen] = useState(false);
    const queue = useSelector(state=>state.queue)
    const [state, setState] = useState(queue);
    
    console.log('state', state)
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
                    <ReactSortable list={state} setList={setState}>
                        {state.map((song) => {
                            console.log('state', state)
                            return <Song item={song} index={1} />
                        } )}
                    </ReactSortable>
                </div>
        }
    </div>
    )
  }


export default QueuePanel;