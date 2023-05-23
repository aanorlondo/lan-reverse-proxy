import React from 'react';
import Header from '../components/Header.js';
import Carousel from '../components/Carousel.js';
import AppFrame from '../components/AppFrame.js';
import Footer from '../components/Footer.js';

function Home({ apps }) {
    return (
        <div id="home">
            <Header />
            <Carousel apps={apps} />
            <AppFrame />
            <Footer />
        </div>
    );
}

export default Home;