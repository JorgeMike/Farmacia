import React from 'react';

export default function Stars({
    rating,
    comments,
}: {
    rating: number;
    comments: number;
}) {
    return (
        <div className='d-flex gap-2 my-1'>
            {[...Array(5)].map((_, i) => {
                const star = i + 1;
                let starClass = 'bi-star';
                if (star <= rating) {
                    starClass = 'bi-star-fill';
                } else if (star - 0.5 <= rating) {
                    starClass = 'bi-star-half';
                }
                return (
                    <i
                        key={i}
                        className={`bi text-warning ${starClass}`}
                    ></i>
                );
            })}
            {rating} <span className='text-muted'> ({comments}) </span>
        </div>
    );
}