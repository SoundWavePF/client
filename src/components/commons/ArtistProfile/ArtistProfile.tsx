import ItemList from "../CardsComponents/ItemList/ItemList";
import style from './ArtistProfile.module.css'

import React, {useState, useEffect} from 'react';
import { NavLink, Outlet, Route } from "react-router-dom";
import axios from 'axios';

interface statistics {
    value: string;
    title: string
}

interface card {
    item: any
}

const profileImg = "https://pbs.twimg.com/profile_images/1517482924077207553/KVYNrafL_400x400.jpg"  

const labels: string[] = ['streams', 'listeners', 'saves', 'added date']
const stats: string[] = ['2M', '3M', '4M',  '2 7 2000']

const Profile: React.FunctionComponent = ()=>{
    const stats: statistics[] = [
        {title: 'Songs', value: '980'}, 
        {title: 'views', value: '980'}, 
        {title: 'Likes', value: '980'},
        {title: 'Albums', value: '6'}
    ]

    return (
        <div>
            <div className={style.profile}>
                <div className="d-flex align-items-center">
                <div className="image">
                    <img 
                        className={style.profileImg} width="155"
                        src={profileImg}/>
                </div>

                <div className="ml-3 w-100">
                   <h4 className="mb-0 mt-0">{'Artist'}</h4>
                   <span>info</span>
                   <div className={style.statContainer}>
                        {
                            stats.map( (stat)=>{
                                return (
                                    <div className="d-flex flex-column">
                                        <span className={style.title}>{stat.title}</span>
                                        <span className={style.value}>{stat.value}</span>
                                    </div>
                                )
                            })
                        }
                   </div>
                </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

const Song: React.FunctionComponent<card> = (props)=>{
  

    return (
        <tr >
                <td className={style.name}>
                    <img className={style.image} src={props.item.image_small} alt="" />
                    <div>{props.item.name}</div> 
                </td>
                {
                    stats.map( (stat)=> <td >{stat}</td>)
                }
            
        </tr>
    )
}

const Stats: React.FunctionComponent = ()=>{
    return (
        <div>
            <h3>29M Strams globally</h3>
        </div>
    )
}

const ArtistProfile: React.FunctionComponent = ()=>{
    const [songs, setSongs] = useState([])

    useEffect( ()=>{
        axios.get('http://143.198.158.238:3001/search?all=amor')
        .then( (res)=>res.data.songData)
        .then( songs => setSongs(songs))
    }, [])

    return (
        <div className={style.container}>
            <h1>Music</h1>
            <Profile/>
            <Stats />
                 <div>
                    <NavLink to='stats'>stats</NavLink>
                    <NavLink to='songs'>songs</NavLink>
                 </div>
            <table className={style.table}>
                    <h3>Songs</h3>
                <tr>
                    <td><span>#title</span></td>
                    { labels.map( (label)=>  <td>{label}</td>)}
                </tr>

                { songs?.map( (song: any)=>  <Song item={song} />) }
            </table>
        </div>
    )
}

export  default ArtistProfile;