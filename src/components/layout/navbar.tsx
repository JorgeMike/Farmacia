import React from 'react';

export default function Navbar() {
    return (
        <nav className='py-0 pb-lg-4 navbar navbar-expand-lg'>
            <div className='container'>
                <div
                    className='offcanvas offcanvas-lg offcanvas-start'
                    id='offcanvasExample'
                    tabIndex={-1}
                    aria-labelledby='offcanvasExampleLabel'
                >
                    <div className='offcanvas-header'>
                        <h5
                            className='offcanvas-title'
                            id='offcanvasExampleLabel'
                        >
                            MediCare
                        </h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='offcanvas'
                            aria-label='Close'
                        ></button>
                    </div>
                    <div className='offcanvas-body'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 gap-2'>
                            {/* Dropdown for Categorías */}
                            <li className='nav-item'>
                                <div className='dropdown'>
                                    <button
                                        className='btn btn-success dropdown-toggle fw-semibold'
                                        type='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        <i className='bi bi-grid me-2'></i>
                                        Categorías
                                    </button>
                                    <ul className='dropdown-menu'>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Medicamentos
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Vitaminas y Suplementos
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Cuidado de la Piel
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Cuidado del Cabello
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Cuidado del Bebé
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Dropdown for Marcas Populares */}
                            <li className='nav-item'>
                                <div className='dropdown'>
                                    <button
                                        className='btn btn-light dropdown-toggle'
                                        type='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        <i className='bi bi-star me-2'></i>
                                        Marcas Populares
                                    </button>
                                    <ul className='dropdown-menu'>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Aspirina
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Pfizer
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                La Roche-Posay
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Tylenol
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Dropdown for Servicios */}
                            <li className='nav-item'>
                                <div className='dropdown'>
                                    <button
                                        className='btn btn-light dropdown-toggle'
                                        type='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        <i className='bi bi bi-briefcase me-2'></i>
                                        Servicios
                                    </button>
                                    <ul className='dropdown-menu'>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Recetas Médicas
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Consultas Farmacéuticas
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Promociones
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Envío a Domicilio
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                href='#'
                                            >
                                                Suscripciones
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
