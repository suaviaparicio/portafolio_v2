
import React, { useState } from "react";
import ToggleButtonComponent from "./ToggleButton";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
    <header>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    className="logo flex items-center space-x-3 rtl:space-x-reverse font-bold text-2xl"
                    href="#top"
                >
                    Lina Aparicio
                </a>

                <ToggleButtonComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

                <div
                    className={`w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}
                    id="navbar-default"
                >
                    <nav className="flex flex-row gap-x-10 md:p-0 mt-4 border border-gray-100 opacity-80 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-semibold text-lg">
                        <a href="#proyectos">Experiencia</a>
                        <a href="#proyectos">Proyectos</a>
                        <a href="#skills">Skills</a>
                        <a href="#contacto">Contacto</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
