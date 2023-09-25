import headerStyle from  './Header.module.css'

const Header = () => {


    return <header className={headerStyle.header}>
                <nav className={headerStyle.navbar}>
                    <h6 className={headerStyle.heading}> 
                        <a href='/'>tenor</a>
                    </h6>
                </nav>

           </header>

};


export default Header;