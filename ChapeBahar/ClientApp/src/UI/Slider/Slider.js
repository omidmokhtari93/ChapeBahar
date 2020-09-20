import React from 'react';
import Product from '../Product/Product';
import pic from '../../Assets/img/livan.jpg'
import Carousel from 'react-multi-carousel';


const Slider = prpos => {

    return (
        <div id="demo" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={pic} alt="Los Angeles" width="1100" height="500" />
                </div>
                <div className="carousel-item">
                <img src={pic} alt="Los Angeles" width="1100" height="500" />
                </div>
                <div className="carousel-item">
                <img src={pic} alt="Los Angeles" width="1100" height="500" />
                </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    );
}

export default Slider;