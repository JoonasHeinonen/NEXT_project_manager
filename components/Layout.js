import React from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className='content'>
            <Head>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
                <title>Next project manager</title>
            </Head>
            <Header />
            { children }
            <Footer />
        </div>
    );
};

export default Layout;