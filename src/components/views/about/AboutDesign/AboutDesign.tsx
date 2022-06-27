import Style  from "./AboutDesign.module.css"


const AboutDesign = ()=>{

  return(
    <div className={Style.container}>
      <h3>Paleta de colores utilizada</h3>
        <div className={Style.colorContainer}>
          <div className={Style.swBlack}>#202020</div>
          <div className={Style.lightGray}>#D6D6D6</div> 
          <div className={Style.darkGray}>#333533</div>
          <div className={Style.lightYellow}>#FFEE32</div>
          <div className={Style.darkYellow}>#FFD100</div> 
        </div>
    </div>
  )
}
export default AboutDesign