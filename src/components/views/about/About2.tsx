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
            <svg viewBox="0 0 81 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5334 0H10.7619L13.1617 7.51092H20.9333L14.6477 11.984L17.0475 19.5348C21.0922 16.5767 22.4192 12.0956 20.9333 7.50295L18.5334 0ZM0.590492 7.51092H8.36206L10.7619 0H2.9903L0.590492 7.51092C-0.895483 12.1036 0.431564 16.5846 4.47628 19.5428L6.87609 11.992L0.590492 7.51092ZM4.47628 19.5348L10.7619 23.9999L17.0475 19.5348L10.7619 14.99L4.47628 19.5348ZM63.1286 7.31956C61.293 7.31956 60.1169 8.15677 59.5686 9.52022H59.4256V3.34085H56.6682V19.5029H59.4891V12.4863C59.4891 10.7481 60.5619 9.75145 62.0797 9.75145C63.5577 9.75145 64.4318 10.7003 64.4318 12.3189V19.5029H67.2527V11.8484C67.2448 8.93816 65.6078 7.31956 63.1286 7.31956ZM74.8733 3.30895C71.0591 3.30895 68.7546 6.30694 68.7467 11.5136C68.7467 16.7361 71.0352 19.774 74.8733 19.774C78.7035 19.782 81 16.7441 81 11.5136C80.9921 6.31492 78.6876 3.30895 74.8733 3.30895ZM71.663 11.5136C71.6709 7.71026 72.9026 5.70894 74.8733 5.70894C76.2242 5.70894 77.2255 6.63385 77.7261 8.42786L71.7107 12.8132C71.6789 12.4146 71.663 11.976 71.663 11.5136ZM74.8733 17.3421C73.4827 17.3421 72.4576 16.3534 71.9729 14.4398L78.0201 10.0305C78.0678 10.493 78.0916 10.9873 78.0916 11.5215C78.0916 15.3488 76.8599 17.3421 74.8733 17.3421ZM43.9698 14.4557C43.9698 16.2816 42.6666 17.1906 41.419 17.1906C40.0602 17.1906 39.1623 16.2258 39.1623 14.7029V7.49498H36.3413V15.1415C36.3413 18.0278 37.9783 19.6624 40.3304 19.6624C42.1263 19.6624 43.3818 18.7135 43.9301 17.374H44.0572V19.5109H46.7908V7.49498H43.9698V14.4557ZM29.9603 7.31159C27.4413 7.31159 25.5104 8.43584 24.8906 10.6285L27.5208 11.0033C27.7989 10.182 28.5936 9.48035 29.9762 9.48035C31.2874 9.48035 32.0026 10.1501 32.0026 11.3302V11.378C32.0026 12.1913 31.1523 12.2312 29.0386 12.4544C26.7182 12.7016 24.4932 13.4033 24.4932 16.1062C24.4932 18.4664 26.2176 19.7182 28.4982 19.7182C30.3736 19.7182 31.494 18.8331 32.0105 17.8285H32.1059V19.479H34.8156V11.4418C34.8235 8.2684 32.2489 7.31159 29.9603 7.31159ZM32.0105 15.1654C32.0105 16.5049 30.9378 17.6371 29.2372 17.6371C28.0612 17.6371 27.2188 17.0949 27.2188 16.0584C27.2188 14.974 28.1645 14.5195 29.42 14.3361C30.159 14.2325 31.637 14.0491 32.0105 13.7461V15.1654ZM52.8142 4.48901H49.9932V7.49498H48.2847V9.75145H49.9932V16.4012C49.9773 18.6577 51.6143 19.774 53.7359 19.7102C54.3717 19.6943 54.8484 19.5906 55.1742 19.4949V17.2544C54.9597 17.2863 54.4591 17.3501 54.1015 17.3581C53.3942 17.374 52.8221 17.1109 52.8221 15.9627V9.75145H55.1742V7.50295H52.8142V4.48901Z" fill="#000"></path></svg>
        </div>
        </div>
        <h1>The Dream Team</h1>
        < AboutCardContainer/>
      </div>
    );
}

export default About2;