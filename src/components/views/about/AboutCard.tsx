import React from 'react';
import Style from './AboutCard.module.css'
import Git from '../../../assets/about/git.png'
import Linkedin from '../../../assets/about/linked.png'

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
            <img src={img} alt="fotoTeam" />
            <div  className={Style.infoName}>
                <h4>{name}</h4>
                <label>{group}</label>
            </div>
            <div className={Style.containerAccounts}>
                <a href={git} ><img src={Git} className={Style.git}  alt="" /></a>
                <a href={lin}><img src={Linkedin} className={Style.linkedin}  alt="" /></a>
            </div>
        </div>
    );
}

export default AboutCard;