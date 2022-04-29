import React from "react";
import Burger from "../Burger/Burger";

const Header = (props) => {
    return (
        <header className="header" data-header>
            <div className="container header__container">
                <p className="header__logo">Stellar Van</p>

                <Burger />
            </div>
        </header>
    )
}

export default Header;