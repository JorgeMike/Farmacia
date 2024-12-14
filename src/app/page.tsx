import Carousel from '@/components/carousel';
import Hero from '@/components/hero';
import React from 'react';

export default function Page() {
    return (
        <main className='container'>
            <Hero />
            <Carousel />
        </main>
    );
}
