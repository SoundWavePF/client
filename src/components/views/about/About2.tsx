import { Link } from 'react-router-dom';
import Style from './About2.module.css'
import logo from '../../../assets/logo-nbg.png'
import ts from '../../../assets/about/typescript_logo.png'
import html from '../../../assets/about/html.png'
import css from '../../../assets/about/css.png'
import react from '../../../assets/about/react.png'
import bootstrap from '../../../assets/about/bootstrap.png'
import node from '../../../assets/about/node.png'
import postgres from '../../../assets/about/postgres.png'
import sequelize from '../../../assets/about/sequelize.png'
import express from '../../../assets/about/express.png'
import AboutCardContainer from './AboutTeam/CardContainer';
import AboutDesign from './AboutDesign/AboutDesign';
import AdminButton from '../../commons/AdminSideBar/AdminButton';



const  About2=( )=> {
  const toggleMode = () => {
    document.querySelector('#appSW')?.classList.toggle('light-mode')
    document.querySelector('#appSW')?.classList.toggle('dark-mode')
  }
  return (
    <div className={Style.about}>
      <Link to={'/'} className={Style.buttonHome}><button >Back to page</button></Link>
      <div className={Style.divNav}>
        <h1>SoundWave</h1> 
        <div className={Style.darkButton}><AdminButton/></div>
        {/* <button onClick={toggleMode}>tema</button> */}
      </div>
      <div className={Style.div1}>
        {/* <img src={logo} alt="logo" /> */}
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 558.406 1107.061">
            <path id="n" d="M776.1,1186.59l109.8-411.3c17.1,92.7,53.1,263.7,81.9,412.2,17.1,87.3,36,178.2,54.9,273.6l216.9-809.1H1146l-106.2,396c-22.5-113.4-43.2-217.8-62.1-312.3-33.3-160.2-66.6-333-73.8-377.1l-221.4,828h93.6Z" transform="translate(-681.844 -356.219)"/>
        </svg>
        <div className={Style.divInfo}>
          <h3>Quienes Somos?</h3>
          <p> Somos un grupo de programadores de Argentina y Colombia que nos conocimos en la instancia de bootcamp de Henry. En donde desde Marzo de 2022 formamos un grupo de trabajo y humano muy integro, en el cual de forma remota hemos adquirido conocimientos técnicos entre nosotros y, además conocer un poco más sobre la culturas de cada uno de nuestros compañeros. </p>
      </div>
      </div>
      <div className={Style.containerInfo}>
        <div className={Style.div2}>
          {/* <div className={Style.divInfo}>
            <h3>Retos de este proyecto</h3>
            <p> Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Dolores atque sequi reprehenderit officiis
                  veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                  tempore nisi aliquam a ea! Officia.</p>
          </div> */}
          <div className={Style.divInfo}>
            <h3>Trabajo en equipo</h3>
            <p> Para llevar a cabo este proceso utilizamos la metodoligia Scrum con el objetivo principal de trabajar de manera colaborativa, y para fomentar el trabajo en equipo. Con este método de trabajo lo que se pretende es alcanzar el mejor resultado de un proyecto determinado.</p>
          </div>
          <div className={Style.divInfo}>
            <h3>Diseño y Ejecucion de ideas</h3>
            <p> metodologia scrum gitHub etc Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Dolores atque sequi reprehenderit officiis
                  veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                  tempore nisi aliquam a ea! Officia.</p>
          </div>
        </div>
        <AboutDesign/>
        {/* <div className={Style.div2}>
          <div className={Style.divInfo}>
            <h3>Relaciones y rutas</h3>
            <p> Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Dolores atque sequi reprehenderit officiis
                  veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                  tempore nisi aliquam a ea! Officia.</p>
          </div>
        </div> */}
      </div>
      <div className={Style.containerInfo2}>
        <h3>Tecnologias utilizadas</h3>
        <div className={Style.techInfo}>
            <img src={ts} alt="ts" />
            <img src={html} alt="ts" />
            <img src={css} alt="ts" />
            <img src={react} alt="ts" />
            <img src={bootstrap} alt="ts" />
        </div>
        <div className={Style.techInfo}>
            <img src={node} alt="ts" />
            <img src={express} alt="ts" />
            <img src={postgres} alt="ts" />
            <img src={sequelize} alt="ts" />
        </div>
        </div>
        <h1>The Dream Team</h1>
        < AboutCardContainer/>
      </div>
    );
}

export default About2;