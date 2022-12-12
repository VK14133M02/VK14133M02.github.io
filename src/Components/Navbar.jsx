import React from 'react'
import DrawerNav from './Drawer'
import Sidebar from './Sidebar'
import Styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div>
            <div className={Styles.drawer}>
                <DrawerNav />
            </div>
            <div className={Styles.nav}>
                <Sidebar />
            </div>
        </div>
    )
}

export default Navbar
