import React, { useContext } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';


function Carousel() {

    const { apps, select_app_id } = useContext(AppContext);

    const handleAppClick = (app_id) => {
        select_app_id(app_id);
    };

    return (
        <div id="carousel-wrapper">
            <div id="carousel">
                <ReactCarousel showArrows={true} showThumbs={true}>
                    {
                        apps.map((app) => (
                            <div key={app.app_id}>
                                <Link to="#" onClick={() => handleAppClick(app.app_id)}>
                                    <h4>{app.app_name}</h4>
                                </Link>
                            </div>
                        ))
                    }
                </ReactCarousel>
            </div>
        </div>
    );
}

export default Carousel;