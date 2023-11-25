import React from 'react'

export default function Header() {
    return (
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="#" className="nav__logo firacode">{"<Harsh Bansal/>"}</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link">Work</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">Services</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Contact</a>
                        </li>
                    </ul>

                    <div className="__dark-mode">
                        <i className='bx bx-moon bx-sun' id="theme-button"></i>
                    </div>

                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="bx bx-grid-alt"></i>
                </div>
            </nav>
        </header>

    )
}