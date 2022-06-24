import { useState, useRef, useEffect} from "react";


import styles from "./CardContainer.module.css";
import CardItem from './CardItem';

interface item {
  id: number;
  name: string;
  picture_medium: string;
  type: string;
}
interface myProps {
  content: item[];
  slides?: boolean
}

const CardContainer: React.FC<myProps> = (props: myProps) => {
  const carrusel = useRef(document.createElement("div") )
  const slidesContainer = useRef(document.createElement("div") )
  const [state, setState] = useState<number>(0)

  /*useEffect( ()=>{
    console.log("mount")
    const interval = setInterval( ()=>{
      const slides  = slidesContainer.current
      console.log("interval", state)
      setState( ()=>{
        if(state+100 < 300){
          slides.style.transform = `translateX(-${state+100}%)`;
          console.log("setState", state+100)
          return state+100
        }
        slides.style.transform = `translateX(-${0}%)`;
        return 0
      })
    }, 5000)
    return ()=>clearInterval(interval)
  }, [state])*/

  /*
  const getNewScrollPosition = (arg: string) => {
        const gap = 10;
        const slideWidth = 300
        const maxScrollLeft = carrusel.current.offsetWidth - slideWidth*(carrusel.current.offsetWidth/slideWidth);
        if (arg === "forward") {
            const x = slideContainerEl.scrollLeft + slideWidth + gap;
            return x <= maxScrollLeft ? x : 0;
        } else if (arg === "backward") {
            const x = slideContainerEl.scrollLeft - slideWidth - gap;
            return x >= 0 ? x : maxScrollLeft;
        } else if (typeof arg === "number") {
            const x = arg * (slideWidth + gap);
            return x;
        }
    }*/



  function handleClick(){
    console.log(carrusel.current.style)
    const slides  = slidesContainer.current
    console.log(slidesContainer.current.children.length)
    console.log("css", carrusel.current.offsetWidth)
    slides.style.transform = `translateX(-${state}%)`;
    setState(()=>{
      if(state+100 < 300){
        slides.style.transform = `translateX(-${state+100}%)`;
        console.log("setState", state+100)
        return state+100
      }
      slides.style.transform = `translateX(-${0}%)`;
      return 0
    })
  }

  return (
    <div className={styles.container} ref={carrusel}>
       <button onClick={handleClick} className={`${styles.btn} ${styles.right}`}>right</button>
       <button className={`${styles.btn} ${styles.left}`}>left</button>
      <div className={props.slides? styles.inner: styles.inner2} ref={slidesContainer}>
        {
          props.content?.map((e:any, i:any) => {
            return <CardItem key={i} item={e}/>;
          })
        }
      </div>
    </div>
  );
};
export default CardContainer;
