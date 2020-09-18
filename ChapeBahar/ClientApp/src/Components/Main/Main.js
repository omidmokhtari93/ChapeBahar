import React from 'react';
import Wrapper from '../../Shared/Wrapper'
import Product from '../../UI/Product/Product';
import ComponentsLayout from '../ComponentsLayout/ComponentsLayout';
import Navbar from '../../UI/Navbar/Navbar';

const Main = props => {
    return (
        <Wrapper>
            <ComponentsLayout >
                <Navbar />
                <div className="col-12 col-md-4 col-xl-4 my-5">
                    <Product />
                </div>
                <div className="col-12 col-md-4 col-xl-4 my-5">
                    <Product />
                </div>
                <div className="col-12 col-md-4 col-xl-4 my-5">
                    <Product />
                </div>
            </ComponentsLayout>
        </Wrapper>

    )
}

export default Main;