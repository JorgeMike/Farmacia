import React from 'react';
import Navbar from './navbar';

export default function Header() {
    return (
        <header className='border-bottom'>
            <div className='py-4'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className=''>
                            <div className='fw-bold fs-3'>
                                <i className='bi bi-shop text-primary me-3'></i>
                                Farmacia
                            </div>
                        </div>

                        <div className='d-none d-lg-flex'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Buscar productos...'
                                aria-label='Buscar productos'
                            />
                            <button
                                className='btn btn-success ms-2'
                                type='button'
                            >
                                <i className='bi bi-search'></i>
                            </button>
                        </div>

                        <div className='d-flex align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div className='position-relative me-4'>
                                    <i className='bi bi-cart text-secondary fs-4'></i>
                                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success d-lg-none'>
                                        1
                                        <span className='visually-hidden'>
                                            unread messages
                                        </span>
                                    </span>
                                </div>
                                <div className='me-4 d-none d-lg-block'>
                                    <div className='fw-bold'>Carrito</div>
                                    <div className='text-muted'>
                                        1 productos
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <i className='bi bi-person-circle fs-4 text-secondary me-4'></i>
                                <div className='d-none d-lg-block'>
                                    <div className='fw-bold'>Usuario</div>
                                    <div className='text-muted'>Mi cuenta</div>
                                </div>
                            </div>
                            <div className='d-lg-none align-items-center'>
                                <button
                                    className='navbar-toggler'
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasExample"
                                    aria-controls="offcanvasExample"
                                >
                                    <i className='bi bi-three-dots fs-2 text-primary'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    );
}
