import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`p-4 ${darkMode ? "bg-black text-white font-bold w-full" : "bg-gray text-black font-bold w-full"}`}>
     <div className="max-w-screen-xl mx-auto px-4 py-4">      
      <ul className="flex flex-wrap justify-center gap-6">
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Sobre mí</a></li>
        <li><a href="/projects">Proyectos</a></li>
        <li><a href="/skills">Habilidades</a></li>
        <li><a href="/contact-form">Contacto</a></li>
      </ul>
      </div>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="ml-4 p-2 border rounded"
      >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </nav>
  );
};

export default Navbar;
