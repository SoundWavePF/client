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
  slides?: boolean;
  autoplay?: boolean
}

const CardContainer: React.FC<myProps> = (props: myProps) => {
  const carrusel = useRef(document.createElement("div") )
  const slidesContainer = useRef(document.createElement("div") )
  const [state, setState] = useState<number>(0)

  const getScrollPosition= (arg: string) => {
        const gap = 10;//in px 
        const slideWidth = 270 //in px, width of the card
        const numberOfSlides = slidesContainer.current.children.length
        const numberOfSlidesToShow = Math.ceil(carrusel.current.offsetWidth/slideWidth)
        const maxScroll = (slideWidth + gap)*numberOfSlides - carrusel.current.offsetWidth

    console.log("slide count", slideWidth*numberOfSlidesToShow, maxScroll, slidesContainer.current.children.length)

        if (arg === "forward") {
            const x = state + slideWidth + gap;
            return x <= maxScroll? x : 0;
        } else if (arg === "backward") {
            const x = state - slideWidth - gap;
            return x >= 0 ? x : maxScroll;
        } else if (typeof arg === "number") {
            const x = arg * (slideWidth + gap);
            return x;
        }
        return 0
    }

  /*useEffect( ()=>{
   if(props.slides) {
    console.log("mount")
    const interval = setInterval( ()=>{
      const slides  = slidesContainer.current
      console.log("interval", state)
     setState(()=>{
          slides.style.transform = `translateX(-${getScrollPosition("forward")}px)`;
          return getScrollPosition("forward")
        })
    }, 4000)
    return ()=>clearInterval(interval)
   }
  }, [state])*/


  function handleClick(arg: string){
      return function (){
        console.log(carrusel.current.style)
        const slides  = slidesContainer.current
        console.log(slidesContainer.current.children.length)
        console.log("css", carrusel.current.offsetWidth)
        console.log("state", state)
        setState(()=>{
          slides.style.transform = `translateX(-${getScrollPosition(arg)}px)`;
          return getScrollPosition(arg)
        })
      }
  }

  return (
    <div className={styles.container} ref={carrusel}>
       {
        !props.slides? null:
        <>
          <button onClick={handleClick("forward")} className={`${styles.btn} ${styles.right}`}>→</button>
          <button onClick={handleClick("backward")} className={`${styles.btn} ${styles.left}`}>←</button>
        </>
       }
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
