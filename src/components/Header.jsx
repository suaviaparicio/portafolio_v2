
import React, { useState } from "react";
import ToggleButtonComponent from "./ToggleButton";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
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
                    <nav className="flex flex-col md:flex-row gap-x-10 gap-y-5 md:p-0 mt-4 p-4 border border-gray-100 bg-gray-200 md:bg-transparent opacity-80 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-semibold text-lg ">
                        <a href="#experiencia" className="hover:underline ">Experiencia</a>
                        <a href="#proyectos" className="hover:underline ">Proyectos</a>
                        <a href="#skills" className="hover:underline">Skills</a>
                        <a href="#contacto" className="hover:underline">Contacto</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
