import React, { useState } from "react";
import ToggleButtonComponent from "./ToggleButton";

const Header = ({ currentLang }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Mapa de traducciones
    const navItems = {
        es: [
            { id: "experiencia", label: "Experiencia" },
            { id: "proyectos", label: "Proyectos" },
            { id: "skills", label: "Habilidades" },
            { id: "contacto", label: "Contacto" },
        ],
        en: [
            { id: "experiencia", label: "Experience" },
            { id: "proyectos", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "contacto", label: "Contact" },
        ],
    };

    // Helper para cambiar idioma
    const targetLang = currentLang === "es" ? "en" : "es";
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const newPath = path.replace(/^\/(es|en)(?=\/|$)/, "");
    const switchHref = targetLang === "es" ? newPath || "/" : `/en${newPath}`;

    return (
        <header className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    className="logo flex items-center space-x-3 rtl:space-x-reverse font-bold text-2xl"
                    href={currentLang === "es" ? "#top" : "/en#top"}
                >
                    Lina Aparicio
                </a>

                <ToggleButtonComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

                <div
                    className={`w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "" : "hidden"
                        }`}
                    id="navbar-default"
                >
                    <nav className="flex flex-col md:flex-row gap-x-10 gap-y-5 md:p-0 mt-4 p-4 border border-gray-100 bg-gray-200 md:bg-transparent opacity-80 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-semibold text-lg">
                        {navItems[currentLang].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => {
                                    sessionStorage.setItem("scrollY", window.scrollY.toString());
                                }}
                                className="hover:underline"
                            >
                                {item.label}
                            </a>

                        ))}

                        {/* Botón de cambio de idioma */}
                        <a
                            href={switchHref}
                            data-astro-prefetch
                            onClick={() => {
                                sessionStorage.setItem("scrollY", window.scrollY.toString());
                            }}
                            className="border border-gray-400 rounded-md px-3 py-1 text-sm hover:scale-105 transition"
                            aria-label={`Cambiar a ${targetLang === "en" ? "inglés" : "español"}`}
                        >
                            {targetLang.toUpperCase()}
                        </a>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
