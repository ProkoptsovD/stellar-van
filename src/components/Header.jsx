import React from "react";
import Burger from "./Burger";

const Header = (props) => {
    return (
        <header className="header header--hidden" data-header>
            <div className="container header__container">
                <p className="header__logo">Stellar Van</p>

                <Burger />
            </div>
        </header>
    )
}

export default Header;