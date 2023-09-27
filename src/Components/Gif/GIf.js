import React, { useContext } from 'react';
import GifStyles from './Gif.module.css';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../Store/SearchContext';


const Gif = React.forwardRef((props, ref) => {

    const {setPreviewGif} = useContext(SearchContext)

    const onClickHandler =  (e) => {
        // e.preventDefault();
       setPreviewGif(props)
       console.log(props);
    }
    let desc = props.desc && props.desc.split(" ").join("-");

        let img = <div className={GifStyles.img} style={{backgroundImage:`url(${props.gifUrl})`}}></div>


    return <React.Fragment>
                <Link to={`/preview-gif/${desc}`} ref={ref} className={GifStyles.gifContainer} onClick={onClickHandler}>
                        {/* <img src={props.gifUrl} alt=""/>                         */}
                        {img}
                    <span>{props.desc}</span>
                </Link>
            </React.Fragment>
})


export default Gif;