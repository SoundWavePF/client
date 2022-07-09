import style from './ArtistProfile.module.css'

import React, {useState, useEffect} from 'react';
import { NavLink, Outlet, Route } from "react-router-dom";
import { ButtonGroup, ToggleButton  } from 'react-bootstrap';
//import {Line} from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import axios from 'axios';

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";

interface statistics {
    value: string;
    title: string
}


interface LineProps {
    options: ChartOptions<'line'>;
    data: ChartData<'line'>;
  }

interface card {
    item: any;
    index: number
}

const profileImg = "https://pbs.twimg.com/profile_images/1517482924077207553/KVYNrafL_400x400.jpg"  

const labels: string[] = ['#title', 'streams', 'listeners', 'saves', 'added date']
const stats: string[] = ['2M', '3M', '4M',  '2 7 2000']
const radios = [
    { name: 'Songs', value: '1' },
    { name: 'Releases', value: '2' },
    { name: 'playlist', value: '3' },
  ];

const SideBarArtist: React.FunctionComponent =  ()=>{
    const options = ['Audience', 'Works', 'stats', 'donations']

    return (
        <aside className={style.sidebar}>
            <nav className={style.nav}>
            <div>
              { options.map( option => <div className={style.links}><NavLink  className={style.link} to={option}>{option}</NavLink></div>)}
            </div>
            </nav>
        </aside>
    )
}

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
                                    <div className={style.statInfo}>
                                        <div className={style.title}>{stat.title}</div>
                                        <div className={style.value}>{stat.value}</div>
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
        <tr className={style.song}>
            <td className={style.name}>
                <img className={style.image} src={props.item.image_small} alt="" />
                <div>{props.index}. {props.item.name}</div> 
            </td>
                {stats.map( (stat)=> <td className={style.info}>{stat}</td>)}
        </tr>
    )
}

const Stats: React.FunctionComponent = ()=>{
    const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

return (
    <div>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
    </div>  
)

}

const ArtistProfile: React.FunctionComponent = ()=>{
    const [songs, setSongs] = useState([])
    const [radioValue, setRadioValue] = useState('1');
    const [searchWord, setSearchWord] = useState('')

    useEffect( ()=>{
        axios.get('https://api-production-b004.up.railway.app/search?all=amor')
        .then( (res)=>res.data.songData)
        .then( songs => setSongs(songs))
    }, [])

    return (
        <>
        {/* <SideBarArtist/> */}
        <div className={style.container}>
            <h1>Music</h1>
            <Profile/>
                <hr/>
                <ButtonGroup className="mb-2">
                    {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
                <hr/>
                {
                    radioValue === '1'? <Stats /> :
                    <>
                    <div>
                        <input type='text' name='search_song'  value={searchWord}  onChange={(event)=>setSearchWord(event.target.value)} /> 
                    </div>
                    <table className={style.table}>
                        <h3>Songs</h3>
                        <tr className={style.labels}>
                            { labels.map( (label)=>  <td className={style.info}>{label}</td>)}
                        </tr>
                        { songs?.map( (song: any,  index)=>  <Song item={song} index={index+1} />) }
                    </table>
                    </>
                }
        </div>
        </>
    )
}

export  default ArtistProfile;
