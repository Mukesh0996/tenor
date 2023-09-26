import styles from'./PreviewGif.module.css';


const PreviewGif = (props) => {



    return <div className={styles.previewGif}>
                <h2>{props.gif.desc}</h2>
                <img src={props.gif.gifUrl} alt={props.gif.desc}/>
            </div> 


}


export default PreviewGif;