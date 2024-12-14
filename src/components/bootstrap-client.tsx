'use client';
import { useEffect } from 'react';

export default function BoostrapClient() {
    useEffect(() => {
        const loadBootstrap = async () => {
            if (typeof document !== 'undefined') {
                // @ts-expect-error: Bootstrap is loaded dynamically
                await import('bootstrap/dist/js/bootstrap.bundle.min.js');
                console.log('Bootstrap loaded');
            }
        };

        loadBootstrap();
    }, []);

    return null;
}
