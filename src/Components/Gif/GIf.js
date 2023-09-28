import React, { useContext } from 'react';
import GifStyles from './Gif.module.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Store/SearchContext';


const Gif = React.forwardRef((props, ref) => {

    const { stateDispatcher } = useContext(AppContext)

    const onClickHandler =  () => {
        stateDispatcher({type:'SET_PREVIEW_GIF', value: props})
    }

    let description = props.description && props.description.split(" ").join("-");
    let img = <div className={GifStyles.img} style={{backgroundImage:`url(${props.gifUrl})`}}></div>


    return <React.Fragment>
                <Link to={`/preview-gif/${description}`} ref={ref} className={GifStyles.gifContainer} onClick={onClickHandler}>
                        { img }
                    <span style={{fontSize:'1rem'}}>{props.description}</span>
                </Link>
            </React.Fragment>
})


export default Gif;