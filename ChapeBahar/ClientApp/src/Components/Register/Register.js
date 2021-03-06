import React, { useState } from 'react';
import logo from '../../Assets/img/logo.png'
import { withRouter } from 'react-router-dom';
import Loading from '../../UI/Loading/Loading';
import ComponentsLayout from '../ComponentsLayout/ComponentsLayout';

const Register = props => {

    return (
        <ComponentsLayout>
            <div className="col-12 col-md-5 col-xl-4 my-5">
                <div className="text-center mb-5">
                    <img src={logo} height="50" alt="logo" /></div>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-header-title text-center">ایجاد حساب کاربری</h4>
                    </div>
                    <div className="card-body">
                        <form className="needs-validation" noValidate>
                            <div className="form-group">
                                <label>نام و نام خانوادگی</label>
                                <input type="name" className="form-control" placeholder="حروف فارسی" required />
                            </div>
                            <div className="form-group">
                                <label>شماره موبایل</label>
                                <input type="username" className="form-control" placeholder="×××××××××09" required />
                            </div>
                            <div className="form-group">
                                <label>کد معرف</label>
                                <input type="username" className="form-control" placeholder="اختیاری" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="cardToggle"
                                        data-toggle="chart" data-target="#conversionsChart" data-trigger="change"
                                        data-action="add" data-dataset="1" />
                                    <label className="custom-control-label" htmlFor="cardToggle"></label>
                                    <a className="text-muted" href="#" data-toggle="modal" data-target="#terms"
                                        style={{ lineHeight: '1.8' }}>قوانین را خوانده ام و آن را قبول دارم</a>
                                </div>
                            </div>
                            <div className="modal fade" id="terms" tabIndex="-1" role="dialog" aria-labelledby="terms"
                                aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="modal-title">قوانین سایت</h2>
                                        </div>
                                        <div className="modal-body">تست</div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-dismiss="modal">ادامه</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-success btn-lg btn-block mb-3">ثبت نام</button>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="text-center">
                            <div className="text-muted text-center mb-3">حساب کاربری دارید؟ </div>
                        </div>
                        <a className="btn btn-primary btn-lg btn-block"
                            onClick={() => props.history.replace('/login')}>ورود</a>
                    </div>
                </div>
            </div>
        </ComponentsLayout>
    )
}

export default withRouter(Register);