import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <IconContext.Provider value={{ color: "undefined" }}>
            <div className='navigation'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars menu__bars--close'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='/dashboard'>
                            <AiIcons.AiFillHome />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='/profile'>
                            <AiIcons.AiFillHome />
                            <span>Profile</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default Sidebar