import React from 'react';
import Wrapper from '../../Shared/Wrapper'
import Product from '../../UI/Product/Product';
import ComponentsLayout from '../ComponentsLayout/ComponentsLayout';
import Navbar from '../../UI/Navbar/TopNavbar/Navbar';
import Slider from '../../UI/Slider/Slider';

const Main = props => {
    return (
        <Wrapper>
            <Navbar />
            <ComponentsLayout >
                {/* <div className="col-6 col-md-3 col-xl-3 my-1">
                    <Product />
                </div>
                <div className="col-6 col-md-3 col-xl-3 my-1">
                    <Product />
                </div>
                <div className="col-6 col-md-3 col-xl-3 my-1">
                    <Product />
                </div>
                <div className="col-6 col-md-3 col-xl-3 my-1">
                    <Product />
                </div> */}
                <Slider />
            </ComponentsLayout>
        </Wrapper>

    )
}

export default Main;