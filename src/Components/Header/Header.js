import headerStyle from  './Header.module.css'

const Header = () => {


    return <header className={headerStyle.header}>
                <nav className={headerStyle.navbar}>
                    <h6 className={headerStyle.heading}> 
                        <a href='/'>tenor</a>
                    </h6>
                    <div>
                        <a href='/' className={headerStyle.createBtn}>

                            Create
                            </a>
                        <a href='/' className={headerStyle.signInBtn}>Sign In</a>
                    </div>
                </nav>

           </header>

};


export default Header;