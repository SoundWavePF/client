import React, { useEffect, useState } from 'react'
import ItemList from '../../commons/CardsComponents/ItemList/ItemList';
import s from './SongByGenre.module.css'

const initialState = [
    {
        position: 1,
        image: 'http://i.pravatar.cc/150?u=under',
        name: 'Under Pressure',
        timeLapse: "290"
    },
    {
        position: 2,
        image: 'http://i.pravatar.cc/150?u=modern',
        name: 'Modern Love (2018 Remaster)',
        timeLapse: "310"
    },
    {
        position: 3,
        image: 'http://i.pravatar.cc/150?u=starman',
        name: 'Starman (2012 Remaster)',
        timeLapse: "270"
    },
    {
        position: 4,
        image: 'http://i.pravatar.cc/150?u=dance',
        name: 'Lets Dance (2018 Remaster)',
        timeLapse: "320"
    },
    {
        position: 5,
        image: 'http://i.pravatar.cc/150?u=china',
        name: 'China Girl (2018 Remaster)',
        timeLapse: "340"
    },
    {
        position: 6,
        image: 'http://i.pravatar.cc/150?u=rebel',
        name: 'Rebel Rebel (1999 Remaster)',
        timeLapse: "300"
    },
    {
        position: 7,
        image: 'http://i.pravatar.cc/150?u=mars',
        name: 'Life on Mars? (2015 Remaster)',
        timeLapse: "242"
    },
]

interface Item {
    position: number;
    image: string;
    name: string;
    timeLapse: string;
}


const SongsByGenre = () => {


    const [info, setInfo] = useState<Array<Item>>([])

    useEffect(() => {
        setInfo(initialState)
    }, [])


    return (
        <>
        </>
        // <div className={s.containerCard}>
        //     <div>
        //         {
        //             info.map(song => {
        //                 return <ItemList position={song.position} image={song.image} name={song.name} timeLapse={song.timeLapse} />
        //             })
        //         }
        //     </div>
        // </div>
    )
}

export default SongsByGenre