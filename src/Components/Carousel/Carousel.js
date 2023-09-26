import { useEffect, useRef, useState } from 'react';
import CarouselStyles from './Carousel.module.css';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = (props) => {

    const leftRef = useRef();
    const rightRef = useRef();

    const carouselRef = useRef();
    let leftAlign = useRef(0);

    const [restrictLeftMove, setRestrictLeftMove] = useState(false);
    const [restrictRightMove, setRestrictRightMove] = useState(false);


    useEffect(() => {
        setRestrictRightMove(true);
    },[])

    const handlerCarouselMovement = (direction) => {

        if(direction === 'left') {
            if(leftAlign.current !== -3656) {

                leftAlign.current = leftAlign.current - (3656/4);
                carouselRef.current.style =  `left:${leftAlign.current}px`;
                setRestrictRightMove(false);

            } else if(leftAlign.current <= -3656) {  
                setRestrictLeftMove(true);      
                setRestrictRightMove(false);  
            }

        } else {

            if(leftAlign.current !== 0) {
                leftAlign.current = leftAlign.current + (3656/4);
                carouselRef.current.style =  `left:${leftAlign.current}px`;
                setRestrictLeftMove(false);

            } else if( leftAlign.current === 0 ) {
                setRestrictRightMove(true);
                setRestrictLeftMove(false);
            } 
        }
    };

    return <div className={CarouselStyles.carouselContainer}>
                    <div className={`${CarouselStyles.carouselCtrl} ${CarouselStyles.left} ${restrictRightMove && CarouselStyles.disabled}`} onClick={()=> handlerCarouselMovement('right')} ref={leftRef}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </div>    
                    <div className={CarouselStyles.carouselDiv}>
                        <div className={CarouselStyles.carousel}  ref={carouselRef}>
                        {
                            props.children
                        }
                        </div>
                    </div>
                    <div className={`${CarouselStyles.carouselCtrl} ${CarouselStyles.right} ${restrictLeftMove && CarouselStyles.disabled}`}  onClick={()=> handlerCarouselMovement('left')} ref={rightRef}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>    
                </div>

};




export default Carousel;