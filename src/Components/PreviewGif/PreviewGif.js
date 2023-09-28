import React, { useState } from 'react';
import styles from'./PreviewGif.module.css';


const PreviewGif = (props) => {

    const [isCopying, setIsCopying] = useState(false)

    const copyUrlHandler = async () => {

        try {
            setIsCopying(true);
            await navigator.clipboard.writeText(props.gif.gifUrl);
            setTimeout(()=> {
                setIsCopying(false);
            }, 200);
        } catch(e) {
            console.log(e);
        }
    }



    return <React.Fragment>
                <div className={styles.previewGif}>
                    <h2>{props.gif.description}</h2>
                    <img src={props.gif.gifUrl} alt={props.gif.desc}/>
                </div> 
                <div className={styles.url}>
                    <h3>
                        Share URL
                    </h3>
                    <div className={styles.urlContainer} onClick={copyUrlHandler}>
                        {props.gif.gifUrl}
                    { isCopying && <div className={styles.status}>Copied Successfully!</div>}
                    </div>
                </div>
            </React.Fragment>
}

export default PreviewGif;