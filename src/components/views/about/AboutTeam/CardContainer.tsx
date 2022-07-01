import Style from './CardContainer.module.css'
import AboutCard from './AboutCard';
import fran from '../../../../assets/about/fran.png'
import javier from '../../../../assets/about/javier.png'
import nano from '../../../../assets/about/nano.png'
import harold from '../../../../assets/about/harold.png'
import cris from '../../../../assets/about/cris.png'
import joni from '../../../../assets/about/joni.png'
import david from '../../../../assets/about/david.png'
import gaston from '../../../../assets/about/gaston.png'




const  AboutCardContainer=( )=> {
  return (
        <div className={Style.cardContainer}>
          <AboutCard 
            name={'Francisco Mansilla'}        
            group={'FrontEnd Developer'} 
            img={fran}      
            git={'https://github.com/FranciscoMansilla'} 
            lin={'https://www.linkedin.com/in/FranciscoMansilla/'}></AboutCard>
          <AboutCard 
            name={'Cristian Vanegas'}           
            group={'BackEnd Developer'}  
            img={cris}                                                                                                                      
            git={'https://github.com/cristian18u'}       
            lin={'https://www.linkedin.com/in/cristian-vanegas/'} ></AboutCard>
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
    );
}

export default AboutCardContainer;