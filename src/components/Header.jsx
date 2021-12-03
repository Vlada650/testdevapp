import React, { useState } from "react";
import logo from '../assets/images/logo.png';

const Header = () => {
    const [hover, setHover] = useState(false);

    return (
        <> <div className="header">
            <img src={logo} style={{ width: 110, height: 32 }} alt="logotype" />
            <span className="menu__text">Menu</span>

            <div className="menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
                <span className="menu__text">Menu</span>

                <ul className="nav menu__box">
                    <li>
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">About us</a>
                    </li>

                    <li className="dropdown">
                        <label className="menu__second-button" for="menu__toggle">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Our services</a>
                        </label>
                        <input id="menu__toggle" type="checkbox" />
                        <ul>
                            <li><a className="subnav-link" href="#">Lorem ipsum</a></li>
                            <li><a className="subnav-link" href="#">Lorem ipsum</a></li>
                            <li><a className="subnav-link" href="#">Lorem ipsum</a></li>
                            <li><a className="subnav-link" href="#">Lorem ipsum</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Contact us</a>
                    </li>
                </ul>
            </div>

            <div className="light-btn-wrapper">
                <div className={hover ? { display: 'none' } : "light-btn-container"}>
                    <button className={hover ? 'light-btn-container__hover' : "light-btn-container__static"} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                        <a className="header-link" href="#">Call us</a>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;