import React from "react";
import Navbar from "../NavBar/Navbar";
import Button from "../Button/Button";
import './MenuModal.scss';

const MenuModal = () => {
    return (
        <div
            className="burger-menu__modal"
            onClick={() => {
                const modal = document.querySelector('.burger-menu__modal');
                modal.classList.remove('open');
                document.body.style.overflowY = 'auto';
            }}>
            <Navbar />
            <Button
                className={['burger-menu__close-modal-btn']}
                text='&#10006;'
            />
        </div>
    )
}

export default MenuModal;