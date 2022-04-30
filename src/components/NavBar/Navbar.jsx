import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.scss';

const Navbar = () => {
    return (
        <nav className="get-started">
            <div className="container">
                <h2 className="get-started__title">
                    Pickup a category
                </h2>
                <ul className="category-list">
                    <li className="category-list__item">
                        <NavLink to="/space-images" className="category-list__link">
                            Space images
                        </NavLink>
                    </li>
                    <li className="category-list__item">
                        <NavLink to="/articles" className="category-list__link">
                            Articles
                        </NavLink>
                    </li>
                    <li className="category-list__item">
                        <NavLink to="/weather-on-mars" className="category-list__link">
                            Weather on Mars
                        </NavLink>
                    </li>
                    <li className="category-list__item">
                        <NavLink to="/space-weather" className="category-list__link">
                            Space weather
                        </NavLink>
                    </li>
                    <li className="category-list__item">
                        <NavLink to="/exoplanets" className="category-list__link">
                            Exoplanets
                        </NavLink>
                    </li>
                    <li className="category-list__item">
                        <NavLink to="/polychromatic-images-of-earth" className="category-list__link">
                            Polychromatic Images of Earth
                        </NavLink>
                    </li>
                    <li className="category-list__item">
                        <NavLink to="/asteroids-near-earth" className="category-list__link">
                            Asteroids near Earth
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;