import React from "react";
import styles from './Footer.module.scss';
import icons from '../../images/icons.svg';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <NavLink to="/">
                <svg>
                    <use href={`${icons}#home`} />
                </svg>
            </NavLink>
            <NavLink to="/favouirite">
                <svg>
                    <use href={`${icons}#favourites`} />
                </svg>
            </NavLink>
            <NavLink to="/notifications">
                <svg>
                    <use href={`${icons}#notification`} />
                </svg>
            </NavLink>
        </footer>
    );
}

export default Footer;