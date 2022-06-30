import { useState, useRef, useEffect} from "react";
import styles from "./CardContainer.module.css";
import CardItem from "./CardItem";

interface myProps {
  content: any;
  slides?: boolean;
  autoplay?: boolean
}

const CardContainer: React.FC<myProps> = (props: myProps) => {

  const carrusel = useRef(document.createElement("div") )
  const slidesContainer = useRef(document.createElement("div") )
  const [state, setState] = useState<number>(0)

  const gap = 10;//in px 
  const slideWidth = 270 //in px, width of the card
  const numberOfSlides = slidesContainer.current.children.length
  const numberOfSlidesToShow = Math.ceil(carrusel.current.offsetWidth/slideWidth)

  const getScrollPosition= (arg: string | number) => {
        const maxScroll = (slideWidth + gap)*numberOfSlides - carrusel.current.offsetWidth


        if (arg === "forward") {
            const x = state + slideWidth + gap;
            console.log('carrusel',x,  maxScroll, x <= maxScroll, carrusel.current.offsetWidth, (slideWidth + gap)*numberOfSlides)
            return x <= Math.abs(maxScroll)? x : 0;
        } else if (arg === "backward") {
            const x = state - slideWidth - gap;
            return x >= 0 ? x : maxScroll;
        } else if (typeof arg === "number") {
            const x = arg * (slideWidth + gap);
            return x;
        }
        return 10
  }

  useEffect( ()=>{
    const slides  = slidesContainer.current
    window.addEventListener('resize', ()=> setState(()=>{
      slides.style.transform = `translateX(-${getScrollPosition(0)}px)`;
      return getScrollPosition(0)
    }));
  }, [])

  function handleClick(arg: string){
      return function (){
        const slides  = slidesContainer.current
        setState(()=>{
          slides.style.transform = `translateX(-${getScrollPosition(arg)}px)`;
          return getScrollPosition(arg)
        })
      }
  }

  console.log(slidesContainer.current.children.length, numberOfSlidesToShow)
  return (
    <div className={styles.container} ref={carrusel}>
       {
        !props.slides? null:
          slidesContainer.current.children.length < numberOfSlidesToShow? null: 
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
