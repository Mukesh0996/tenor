import { Link } from 'react-router-dom';
import headerStyle from  './Header.module.css'

const Header = () => {


    return <header className={headerStyle.header}>
                <nav className={headerStyle.navbar}>
                    <h6 className={headerStyle.heading}> 
                        <Link to='/tenor'>tenor</Link>
                    </h6>
                </nav>

           </header>

};


export default Header;