import React from 'react';
import logo from '../../Assets/img/logo.png'

const ForgetPassword = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-xl-4 my-5">
                    <div className="text-center mb-5">
                        <img src={logo} height="50" alt="logo" />
                    </div>
                    <div className="card">
                        <div className="card-header bg-light">
                            <h4 className="card-header-title text-center">فراموشی رمز عبور</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>شماره موبایل</label>
                                    <input type="email" className="form-control" placeholder="×××××××××09" />
                                </div>
                                <a className="btn btn-lg btn-block btn-primary mb-3" href="#" data-toggle="modal"
                                    data-target="#terms">ادامه</a>
                                <button className="btn btn-lg btn-block btn-primary mb-3">ارسال رمز عبور</button>
                                <div className="modal fade" id="terms" tabIndex="-1" role="dialog" aria-labelledby="terms"
                                    aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h2 className="modal-title">قوانین سایت</h2>
                                            </div>
                                            <div className="modal-body">
                                                تست
                                        </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-dismiss="modal">ادامه</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ForgetPassword;