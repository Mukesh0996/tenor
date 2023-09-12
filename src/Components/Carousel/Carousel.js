import { useRef } from 'react';
import CarouselStyles from './Carousel.module.css';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Carousel = (props) => {


    const leftRef = useRef();
    const rightRef = useRef();
    const carouselRef = useRef();
    let leftAlign = useRef(0);


    const handlerCarouselMovement = (direction) => {

        if(direction === 'left') {

            if(leftAlign.current !== -4380) {

                leftAlign.current = leftAlign.current - (4580/8);
                carouselRef.current.style =  `left:${leftAlign.current}px`;

            }  
        } else {

            if(leftAlign.current !== 0) {

                leftAlign.current = leftAlign.current + (4380/8);
                carouselRef.current.style =  `left:${leftAlign.current}px`;

            }
          
        }
    };

    return <div className={CarouselStyles.carouselContainer}>
                    <div className={`${CarouselStyles.carouselCtrl} ${CarouselStyles.left}`} onClick={()=> handlerCarouselMovement('right')} ref={leftRef}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </div>    
                    <div className={CarouselStyles.carouselDiv}>
                        <div className={CarouselStyles.carousel}  ref={carouselRef}>
                        {
                            props.children
                        }
                        </div>
                    </div>
                    <div className={`${CarouselStyles.carouselCtrl} ${CarouselStyles.right}`}  onClick={()=> handlerCarouselMovement('left')} ref={rightRef}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>    
                </div>

};




export default Carousel;