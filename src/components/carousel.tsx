'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import React, { useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselItem from './carousel-item';

export default function Carousel() {
    const swiperRef = useRef<SwiperCore>(null);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (
        <div className='row align-items-center mb-5'>
            <div className='col-lg-3'>
                <div>
                    <h2>Our Best Sellers</h2>
                    <p className='text-muted'>
                        The most popular destinations for our customers. Find
                        out what
                    </p>
                    <div className='d-flex gap-3 text-white justify-content-center'>
                        <div
                            className='rounded btn btn-secondary text-white'
                            onClick={handlePrev}
                        >
                            <i className='bi bi-arrow-left'></i>
                        </div>
                        <div
                            className='rounded btn btn-secondary text-white'
                            onClick={handleNext}
                        >
                            <i className='bi bi-arrow-right'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-9 mt-3 mt-lg-0'>
                <Swiper
                    watchSlidesProgress={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    className='mySwiper'
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                        <SwiperSlide key={index}>
                            <CarouselItem
                                data={{
                                    title: `Card ${item}`,
                                    image: `https://via.placeholder.com/300x300`,
                                    price: `$${item * 10}`,
                                    dosage: `${item * 10} mg`,
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
