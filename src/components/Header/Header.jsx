import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://uploads-ssl.webflow.com/5f8f7f6f45a2ba8926f2e652/5f9acb9b4c0d417a29a8dfbe_Exemplifi_Branding.png'
                alt=''/>
        </header>
    )
}

export default Header;