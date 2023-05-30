import React, { useContext } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import './Carousel.css';


function Carousel() {

    const { apps, select_app_id } = useContext(AppContext);

    const handleAppClick = (app_id) => {
        select_app_id(app_id);
    };

    const setId = (app_id) => {
        const id = `${app_id}-thumb`
        return id
    }

    return (
        <div id="carousel-wrapper">
            <div id="carousel">
                <ReactCarousel showArrows={true} showThumbs={false}>
                    {
                        apps.map((app) => (
                            <div key={app.app_id}>
                                <Link to="#" onClick={() => handleAppClick(app.app_id)} className='link'>
                                    <img className="carousel-image" id={setId(app.app_id)} />
                                    <h2 className="carousel-legend">{app.app_name}</h2>
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