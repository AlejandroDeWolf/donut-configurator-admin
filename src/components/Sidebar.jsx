import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { RiMenuFill, RiCloseFill, RiLayoutGridFill, RiSettings3Fill } from 'react-icons/ri'
import logo from '/assets/images/logo.png';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <IconContext.Provider value={{ color: "undefined" }}>
            <div className='navigation'>
                <NavLink to='#' className='menu-bars'>
                    <RiMenuFill onClick={showSidebar} />
                </NavLink>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <NavLink to='#' className='menu-bars menu__bars--close'>
                            <RiCloseFill />
                        </NavLink>
                    </li>
                    {/* links to dashboard and profile with highlight class when active */}
                    <li className='nav-text'>
                        <NavLink to='/dashboard' activeClassName="active">
                            <RiLayoutGridFill />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className='nav-text'>
                        <NavLink to='/profile' activeClassName="active">
                            <RiSettings3Fill />
                            <span>Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default Sidebar