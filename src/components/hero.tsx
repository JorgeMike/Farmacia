import React from 'react';
import doctors from '@/assets/doctors.png';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className='row align-items-center py-5 flex-row-reverse'>
            {/* Imagen */}
            <div className='col-md-6 text-center position-relative my-4 my-lg-0'>
                <div className='hero-image-background'></div>
                <Image
                    src={doctors}
                    alt='Doctors'
                    width={700}
                    className='img-fluid position-relative'
                />
            </div>

            {/* Texto */}
            <div className='col-md-6 text-center text-md-start'>
                <h1 className='display-4 fw-bold mb-4'>
                    Bienvenido a tu centro de salud{' '}
                    <span className='text-primary'>MediCare</span>
                </h1>
                <p className='lead text-muted mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores possimus nostrum deleniti, suscipit perspiciatis
                    repudiandae?
                </p>
                <a
                    href='#services'
                    className='btn btn-primary btn-lg text-white'
                >
                    Ver servicios
                </a>
            </div>
        </section>
    );
}
