import Style  from "./AboutDesign.module.css"


const AboutDesign = ()=>{

  return(
    <div className={Style.container}>
      <h4>Diseño y Ejecucion de ideas</h4>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores atque sequi reprehenderit officiis veritatis culpa soluta consequatur quo ex odit cumque at et, perspiciatis, tempore nisi aliquam a ea! Officia.</p>
      <h5>Paleta de colores utilizada</h5>
      <div>
        <div className={Style.colorContainer}>
          <div className={Style.swBlack}>#202020</div>
          <div className={Style.lightGray}>#D6D6D6</div> 
          <div className={Style.darkGray}>#333533</div>
          <div className={Style.lightYellow}>#FFEE32</div>
          <div className={Style.darkYellow}>#FFD100</div> 
        </div>
      </div>
    </div>
  )
}
export default AboutDesign