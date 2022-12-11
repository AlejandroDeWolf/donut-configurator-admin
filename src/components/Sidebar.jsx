import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { RiMenuFill, RiCloseFill, RiLayoutGridFill, RiSettings3Fill } from 'react-icons/ri'
import logo from '/assets/images/logo.png';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <IconContext.Provider value={{ color: "undefined" }}>
            <div className='navigation'>
                <Link to='#' className='menu-bars'>
                    <RiMenuFill onClick={showSidebar} />
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars menu__bars--close'>
                            <RiCloseFill />
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='/dashboard'>
                            <RiLayoutGridFill />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='/profile'>
                            <RiSettings3Fill />
                            <span>Profile</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default Sidebar