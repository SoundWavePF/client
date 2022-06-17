import React from 'react';
import { Link } from 'react-router-dom';
import Style from './About.module.css'
import AboutCard from './AboutCard';
import fran from '../../../assets/about/fran.png'
import javier from '../../../assets/about/javier.png'
import nano from '../../../assets/about/nano.png'
import harold from '../../../assets/about/harold.png'
import cris from '../../../assets/about/cris.png'
import joni from '../../../assets/about/joni.png'
import david from '../../../assets/about/david.png'
import gaston from '../../../assets/about/gaston.png'



const  About=( )=> {
  return (
    <div className={Style.about}>
      <Link to={'/'} className={Style.buttonHome}><button >Home</button></Link>
        <div  className={Style.container}>
          <div className={Style.Cards}>
              <AboutCard 
                name={'Francisco Mansilla'}        
                group={'Front'} 
                img={fran}      
                git={'https://github.com/FranciscoMansilla'} 
                lin={'https://www.linkedin.com/in/francisco-mansilla-5a6667237/'}></AboutCard>
              <AboutCard 
                name={'Cristian Vanegas'}           
                group={'Back'}  
                img={cris}                                                                                                                      
                git={'https://github.com/cristian18u'}       lin={''} ></AboutCard>
              <AboutCard 
                name={'Javier Ochoa'}              
                group={'Back'}  
                img={javier}      
                git={'https://github.com/JavierOchoa'}       
                lin={'https://www.linkedin.com/in/javierochoaalv/'}></AboutCard>
              <AboutCard 
                name={'Jonathan Jesus Hortman '}   
                group={'Front'} img={joni}                                                                                                                                  
                git={'https://github.com/JonathanHortman'}   
                lin={'https://www.linkedin.com/in/jonathan-jesus-hortman-5ab210236/'}></AboutCard>
              <AboutCard 
                name={'Gastón Ríos'}               
                group={'Front'} 
                img={gaston}      
                git={'https://github.com/riosgas'}           
                lin={'https://www.linkedin.com/in/gaston-rios/'} ></AboutCard>
              <AboutCard 
                name={'Ignacio Debórtoli'}         
                group={'Front'} 
                img={nano}                                                                                                                      
                git={'https://github.com/nanodebortoli'}     
                lin={'https://www.linkedin.com/in/ignaciodebortoli'} ></AboutCard>
              <AboutCard 
                name={'Harold Riascos '}           
                group={'Front'} 
                img={harold}      
                git={'https://github.com/Larryc8'}           
                lin={'https://www.linkedin.com/in/harold-andres-riascos-manyoma-980748238/'} ></AboutCard>
              <AboutCard 
                name={'David Natanael Gomez'}      
                group={'Front'} 
                img={david}                                                                                 
                git={'https://github.com/davidnatanel'}      
                lin={'https://www.linkedin.com/in/david-natanael-gomez-348478216/'} ></AboutCard>
          </div>
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
        </div>
    </div> 
    );
}

export default About;