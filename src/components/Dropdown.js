import React, { useState, useEffect, useRef } from 'react';
import ArrowUpIcon from './Icons/ArrowUpIcon';
import ArrowDownIcon from './Icons/ArrowDownIcon';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false); // Controla si el menú está abierto o cerrado
    const [selectedOption, setSelectedOption] = useState('Público'); // Opción seleccionada
    const dropdownRef = useRef(null); // Referencia al contenedor del dropdown

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Alterna el estado de visibilidad del menú
    };

    const selectOption = (option) => {
        setSelectedOption(option); // Actualiza la opción seleccionada
        setIsOpen(false); // Cierra el menú
    };

    // Maneja el clic fuera del menú para cerrarlo
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="privacy-selector" ref={dropdownRef}>
            <button className="dropdown" onClick={toggleMenu}>
                {selectedOption} <span className="arrow">{isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-option" onClick={() => selectOption('Público')}>Público</div>
                    <div className="dropdown-option" onClick={() => selectOption('Solo para mi')}>Solo para mi</div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
