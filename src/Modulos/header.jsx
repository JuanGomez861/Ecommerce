import './header.css'
import { useState } from 'react'
export function Header() {
    const [menu, setMenu] = useState(false)
    const classIconMenu = `icon_menu ${menu ? 'close' : 'drop'}`
    const navClass = `nav ${menu ? 'nav_visible' : ''}`

    const getMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className="header">
            <section className='section_header'>

                <section className='header_menu_area'>
                    <section className={classIconMenu} onClick={() => getMenu()}></section>
                </section>

                <figure className="header_container_img">
                    <img src="../images/logo.svg" alt="" className='header_img' />
                </figure>
                <nav className={navClass}>
                    <ul className='nav_list'>
                        <li className='nav_list_item'><p>Collections</p></li>
                        <li className='nav_list_item'><p>Men</p></li>
                        <li className='nav_list_item'><p>Women</p></li>
                        <li className='nav_list_item'><p>About</p></li>
                        <li className='nav_list_item'><p>Contact</p></li>

                    </ul>
                </nav>
                <section className="header_icons">
                    <img src="../images/icon-cart.svg" alt="" className='cart_icon' />
                    <img src="../images/image-avatar.png" alt="" className='icon_avatar' />
                </section>
            </section>
        </header>
    )
}