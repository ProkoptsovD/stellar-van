import React from "react";
import './Header.scss'
import Burger from "../Burger/Burger";

const Header = (props) => {
    return (
        <header className="header" data-header>
            <div className="container header__container">
                <img
                    src={require('../../images/logo/logo.png')}
                    alt="Application logo"
                    className="header__logo"
                />
                <p className="header__title">Stellar Van</p>

                <Burger />
            </div>
        </header>
    )
}

export default Header;