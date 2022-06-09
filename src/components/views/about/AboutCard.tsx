import React from 'react';
import Style from './About.module.css'
import Git from '../../../assets/about/githubSvg.svg'
import Linkedin from '../../../assets/about/linkedinSvg.svg'

type AboutCard ={
    name?:string
    git?:string
    lin?:string
    img?:string
    group?:string

}

function AboutCard({name,git,lin,img,group}:AboutCard) {
    return (
        <div className={Style.AboutCard}>

        <img src={img} className={Style.img} alt="" />

        <div  className={Style.infoName}>
        <h1>{name}</h1>
        <h2>group: {group}</h2>
        </div>
        
        <div className={Style.containerAccounts}>

         <a href={git} >
         <img src={Git} className={Style.git}  alt="" />
         </a>

         <a href={lin}>
         <img src={Linkedin} className={Style.linkedin}  alt="" />
         </a>

         </div>


        </div>
    );
}

export default AboutCard;