import Image from 'next/image';
import React from 'react';

interface CardData {
    title: string; // Nombre del medicamento
    image: string; // Imagen del medicamento
    price: string; // Precio del medicamento
    dosage: string; // Dosis o presentación
}

interface CarouselItemProps {
    data: CardData;
}

export default function CarouselItem({ data }: CarouselItemProps) {
    return (
        <div className='card'>
            <Image
                src={data.image}
                alt={data.title}
                className='img-fluid'
                width={300}
                height={300}
            />
        </div>
    );
}
