import React from "react";
import styles from './Footer.module.css';
import icons from '../../images/icons.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <svg>
                <use href={`${icons}#home`} />
            </svg>
            <svg>
                <use href={`${icons}#favourites`} />
            </svg>
            <svg>
                <use href={`${icons}#notification`} />
            </svg>
        </footer>
    );
}

export default Footer;