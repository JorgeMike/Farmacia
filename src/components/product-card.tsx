import React from 'react';
import Stars from './stars';

export default function ProductCard() {
    return (
        <div className='card product-card'>
            <div className='card-body'>
                <div className='position-relative'>
                    <img
                        src='https://via.placeholder.com/250x250'
                        alt='Placeholder'
                        className='card-img-top rounded mb-3'
                    />
                    <span className='small text-muted'>category</span>
                    <h6 className='card-title fw-bold mb-0'>
                        Lorem, ipsum dolor
                    </h6>
                    <Stars rating={4.5} comments={132} />
                    <div className='position-absolute top-0 end-0 badge text-bg-success m-2'>
                        30% off
                    </div>
                </div>
                <span className='fs-5 d-flex align-items-center justify-content-between'>
                    <span className='fw-bold'>$19.99
                    <span className='text-muted ms-1'>
                        (<del>$29.99</del>)
                    </span>
                    </span>
                    <button className='btn btn-primary float-end'>
                        <i className='bi bi-basket2-fill'></i>
                    </button>
                </span>
            </div>
        </div>
    );
}
