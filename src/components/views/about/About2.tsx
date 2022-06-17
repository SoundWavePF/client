import { Link } from 'react-router-dom';
import Style from './About2.module.css'
import AboutCard from './AboutCard';
import fran from '../../../assets/about/fran.png'
import javier from '../../../assets/about/javier.png'
import nano from '../../../assets/about/nano.png'
import harold from '../../../assets/about/harold.png'
import cris from '../../../assets/about/cris.png'
import joni from '../../../assets/about/joni.png'
import david from '../../../assets/about/david.png'
import gaston from '../../../assets/about/gaston.png'
import logo from '../../../assets/logo-nbg.png'


const  About2=( )=> {
  return (
    <div className={Style.about}>
          <h1>SoundWave</h1>
      <div className={Style.div1}>
        <div className={Style.divLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={Style.divInfo}>
          <h3>Quienes Somos?</h3>
          <p>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.</p>
        </div>
        <div className={Style.containerInfo}>
          <h3>Retos de este proyecto</h3>
          <p> Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.</p>
          <h4>Trabajo en equipo</h4>
          <p> metodologia scrum gitHub etc Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.</p>
          <h4>Diseño y Ejecucion de ideas</h4>
          <p> Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.</p>
          <h4>Relaciones y rutas</h4>
          <p> Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.</p>
        </div>
      </div>
      <Link to={'/'} className={Style.buttonHome}><button >back to page</button></Link>
          <h3>Tecnologias utilizadas</h3>
        <div className={Style.containerInfo}>
          <p>  Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.
                Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.
                Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.
                Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.
                Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.
                Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Dolores atque sequi reprehenderit officiis
                veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis,
                tempore nisi aliquam a ea! Officia.  
          </p>
        </div>
        <h3>The Team</h3>
        <div className={Style.cardContainer}>

            <div>
              <AboutCard 
              name={'Francisco Mansilla'}        
                group={'FrontEnd Developer'} 
                img={fran}      
                git={'https://github.com/FranciscoMansilla'} 
                lin={'https://www.linkedin.com/in/francisco-mansilla-5a6667237/'}></AboutCard>
                <AboutCard 
                name={'Cristian Vanegas'}           
                group={'BackEnd Developer'}  
                img={cris}                                                                                                                      
                git={'https://github.com/cristian18u'}       lin={''} ></AboutCard>
              <AboutCard 
                name={'Javier Ochoa'}              
                group={'BackEnd Developer'}  
                img={javier}      
                git={'https://github.com/JavierOchoa'}       
                lin={'https://www.linkedin.com/in/javierochoaalv/'}></AboutCard>
              <AboutCard 
                name={'Jonathan Jesus Hortman '}   
                group={'FrontEnd Developer'} img={joni}                                                                                                                                  
                git={'https://github.com/JonathanHortman'}   
                lin={'https://www.linkedin.com/in/jonathan-jesus-hortman-5ab210236/'}></AboutCard>
            </div>
            <div>
              <AboutCard 
                name={'Gastón Ríos'}               
                group={'FrontEnd Developer'} 
                img={gaston}      
                git={'https://github.com/riosgas'}           
                lin={'https://www.linkedin.com/in/gaston-rios/'} ></AboutCard>
              <AboutCard 
                name={'Ignacio Debórtoli'}         
                group={'FrontEnd Developer'} 
                img={nano}                                                                                                                      
                git={'https://github.com/nanodebortoli'}     
                lin={'https://www.linkedin.com/in/ignaciodebortoli'} ></AboutCard>
              <AboutCard 
                name={'Harold Riascos '}           
                group={'FrontEnd Developer'} 
                img={harold}      
                git={'https://github.com/Larryc8'}           
                lin={'https://www.linkedin.com/in/harold-andres-riascos-manyoma-980748238/'} ></AboutCard>
              <AboutCard 
                name={'David Natanael Gomez'}      
                group={'FrontEnd Developer'} 
                img={david}                                                                                 
                git={'https://github.com/davidnatanel'}      
                lin={'https://www.linkedin.com/in/david-natanael-gomez-348478216/'} ></AboutCard>
            </div>
          </div>
          </div>
    );
}

export default About2;