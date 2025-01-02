import Carousel from '@/components/carousel';
import Hero from '@/components/hero';
import ProductCard from '@/components/product-card';
import React from 'react';
import toys from '@/assets/image551.png';
import toys2 from '@/assets/image563.png';
import Image from 'next/image';

export default function Page() {
    console.log('Page');
    return (
        <main className=''>
            <div className='container'>
                <Hero />
                <Carousel />
                <div className='d-flex justify-content-between'>
                    <h2 className='mt-5 fw-semibold'>Products</h2>
                    <a href='#' className='btn btn-link mt-5 fw-semibold'>
                        View all
                    </a>
                </div>
                <div className='g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2'>
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className='col-12 col-sm-6 col-md-4 col-lg-3'
                        >
                            <ProductCard />
                        </div>
                    ))}
                </div>
            </div>
            <section className='bg-light d-flex flex-column flex-md-row justify-content-evenly align-items-center mt-5 py-4'>
                <Image src={toys} alt='Toys' className='img-fluid' />
                <div className='my-5 my-md-0 text-center text-md-start'>
                    <h2 className='fw-semibold'>
                        Everything You Need for Your Baby&apos;s
                        <br />
                        Care, Comfort, and Happiness
                    </h2>

                    <button className='btn btn-primary'>
                        Explore Baby Section
                    </button>
                </div>
                <Image src={toys2} alt='Toys' className='img-fluid' width={300} />
            </section>
        </main>
    );
}
