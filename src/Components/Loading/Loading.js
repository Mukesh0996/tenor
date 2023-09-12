import LoadingStyles from './Loading.module.css';
import ReactDOM from 'react-dom';

const Loading = () => {






    
   
    return    ReactDOM.createPortal(<div className={LoadingStyles.load}>
                                        <div className={LoadingStyles.loader}></div>
                                     </div>, document.getElementById('loading'));
}



export default Loading;