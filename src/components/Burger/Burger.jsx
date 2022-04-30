import React from "react";
import Button from "../Button/Button";
import './Burger.scss';

const Burger = () => {
    return (
        <div
            id="burger-menu__btn"
            onClick={() => {
                const modal = document.querySelector('.burger-menu__modal');
                modal.classList.add('open');
                document.body.style.overflowY = 'hidden';
            }}>
            <svg className="burger-menu" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.750153" width="26.9167" height="3.16667" rx="1.58333" />
                    <rect y="10.9167" width="26.9167" height="3.16667" rx="1.58333" />
                    <rect y="21.0832" width="16.8889" height="3.16667" rx="1.58333" />
            </svg>
        </div>
    )
}

export default Burger;