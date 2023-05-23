import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import AppFrame from '../components/AppFrame';
import Footer from '../components/Footer';

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