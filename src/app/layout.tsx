import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/sass/custom.scss';
import '@/styles/css/global.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from '@/components/layout/header';
import BoostrapClient from '@/components/bootstrap-client';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'GioFarma',
    description:
        'Welcome to GioFarma, your trusted health center. Explore medical services, pharmaceutical products, and specialized care. Everything you need to support your well-being in one place.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <BoostrapClient />
                <Header />
                {children}
            </body>
        </html>
    );
}
