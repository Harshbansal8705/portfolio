import React from 'react'

export default function Header() {
    return (
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="#" className="nav__logo firacode"><span>&lt;</span><h1>Harsh Bansal</h1><span>/&gt;</span></a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">Projects</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">Skills</a>
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