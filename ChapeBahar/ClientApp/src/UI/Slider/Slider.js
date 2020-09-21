import React, { useEffect, useRef, useState } from 'react';
import Product from '../Product/Product';
import pic from '../../Assets/img/livan.jpg'
import './Slider.scss'
import { isMobile } from 'react-device-detect';


const ProductsSlider = prpos => {
    let sliderWrapper = useRef(null);
    var documentWidth = document.body.clientWidth

    useEffect(() => {
        if (sliderWrapper.current) {
            if (isMobile) {
                sliderWrapper.current.style.width = documentWidth - 30 + 'px';
            }
        }
    })
    return (
        <div className="slide-wrap" ref={sliderWrapper}>
            <div className="slider">
                <div className="slide" id="slide-1">
                    <Product />
                </div>
                <div className="slide" id="slide-2">
                    <Product />
                </div>
                <div className="slide" id="slide-3">
                    <Product />
                </div>
                <div className="slide" id="slide-4">
                    <Product />
                </div>
                <div className="slide" id="slide-5">
                    <Product />
                </div>
            </div>
            {/* <div className="dots">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
                <a href="#slide-4"></a>
                <a href="#slide-5"></a>
            </div> */}
        </div>

    )
}

export default ProductsSlider;