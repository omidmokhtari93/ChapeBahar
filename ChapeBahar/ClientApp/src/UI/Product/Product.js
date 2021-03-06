import React, { useEffect, useRef } from 'react';
import pic from '../../Assets/img/livan.jpg'
import './Product.scss';
import { isMobile } from 'react-device-detect'
const Product = props => {
    return (
        <div className="card product product-shadow pointer">
            <div className="img-container card-img-top" style={isMobile ? {width: '180px'}: null}>
                <img className="card-img-top zoom" src={pic} alt="..." />
            </div>
            <div className="card-body pt-0 pb-0 product-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                        <small>اندازه</small> <small>7 در 7 سانتی متر</small>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                        <small>ضد آب</small> <i className="fe fe-droplet text-danger"></i>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                        <small>ضد ضربه</small> <i className="fe fe-check-circle text-success"></i>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                        <small>قیمت</small> <small>5,000</small>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <div className="kanban-add">
                    <div className="text-center">
                        <a className="kanban-add-link" href="#!">اضافه کردن</a>
                    </div>
                    <form className="kanban-add-form d-none">
                        <div className="d-flex align-items-center">
                            <input type="text" className="form-control form-control-flush form-control-auto h4"
                                placeholder="تعداد" data-mask="000000" />

                            <button className="close close-sm ml-3" type="reset">
                                <i className="fe fe-x"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Product;