import React from 'react';
import { Link } from 'react-router-dom';
import Style from './About.module.css'
import AboutCard from './AboutCard';


const  About=( )=> {
    return (


        <div className={Style.about}>

            <Link to={'/'} className={Style.buttonHome}>
            <button >
               {" Home"}
            </button>
            </Link>



        <div  className={Style.container}>
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

        <div className={Style.Cards}>
            
            <AboutCard name={'Francisco Mansilla'}        group={'Front'} img={'https://media-exp1.licdn.com/dms/image/C4D03AQE0OYnWj75HQw/profile-displayphoto-shrink_200_200/0/1650481284572?e=1660176000&v=beta&t=m_UFCP78GHRPhWhZp7j1R0W2aGSZEz8xg5Z3qEHl-HQ'}      git={'https://github.com/FranciscoMansilla'} lin={'https://www.linkedin.com/in/francisco-mansilla-5a6667237/'}></AboutCard>
            <AboutCard name={'Cristian Vanegas'}          group={'Back'}  img={'https://ca.slack-edge.com/TPRS7H4PN-U033U3E9XM4-44292d7e2718-512'}                                                                                                                      git={'https://github.com/cristian18u'}       lin={''} ></AboutCard>
            <AboutCard name={'Javier Ochoa'}              group={'Back'}  img={'https://media-exp1.licdn.com/dms/image/C4D03AQGV_T6BMAGcoA/profile-displayphoto-shrink_200_200/0/1649611603839?e=1660176000&v=beta&t=Kgz8-2Q0ouzpcCR9vbLsLYHQxhzjmtyt4qSmr2JxCRY'}      git={'https://github.com/JavierOchoa'}       lin={'https://www.linkedin.com/in/javierochoaalv/'}></AboutCard>
            <AboutCard name={'Jonathan Jesus Hortman '}   group={'Front'} img={'https://avatars.githubusercontent.com/u/99038380?v=4'}                                                                                                                                  git={'https://github.com/JonathanHortman'}   lin={'https://www.linkedin.com/in/jonathan-jesus-hortman-5ab210236/'}></AboutCard>
            <AboutCard name={'Gastón Ríos'}               group={'Front'} img={'https://media-exp1.licdn.com/dms/image/C4D03AQHxqyQe_iVtrw/profile-displayphoto-shrink_200_200/0/1653934193225?e=1660176000&v=beta&t=_K13LzSXI_ZdnCzFnpOq7tB08qNTIbDKQbkPD9ezzO8'}      git={'https://github.com/riosgas'}           lin={'https://www.linkedin.com/in/gaston-rios/'} ></AboutCard>
            <AboutCard name={'Ignacio Debórtoli'}         group={'Front'} img={'https://ca.slack-edge.com/TPRS7H4PN-U033T7JUUKE-99b5402a0783-512'}                                                                                                                      git={'https://github.com/nanodebortoli'}     lin={'https://www.linkedin.com/in/ignaciodebortoli'} ></AboutCard>
            <AboutCard name={'Harold Riascos '}           group={'Fornt'} img={'https://media-exp1.licdn.com/dms/image/C4E03AQGjftgCO1v3Dg/profile-displayphoto-shrink_200_200/0/1650793771461?e=1660176000&v=beta&t=Hp7MhYZpcxOjo5wUI3niYRn6KE-wd9POO_PS0Csij9s'}      git={'https://github.com/Larryc8'}           lin={'https://www.linkedin.com/in/harold-andres-riascos-manyoma-980748238/'} ></AboutCard>
            <AboutCard name={'David Natanael Gomez'}      group={'Front'} img={'https://avatars.githubusercontent.com/u/85590345?s=400&u=74b09abe47edccb3d887fcf62fa0d617c74e3856&v=4'}                                                                                 git={'https://github.com/davidnatanel'}      lin={'https://www.linkedin.com/in/david-natanael-gomez-348478216/'} ></AboutCard>
            
            </div>

            </div>


            
        </div>
    );
}

export default About;