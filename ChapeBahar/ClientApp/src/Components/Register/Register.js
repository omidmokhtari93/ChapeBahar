import React from 'react';
import logo from '../../Assets/img/logo.png'
import Alert from '../../UI/Alert/Alert';

const Register = props => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-xl-4 my-5">
                    <Alert message="با موفقیت انجام شد" type="success" show/>
                    <div className="text-center mb-5">
                        <img src={logo} height="60" alt="logo" />
                    </div>
                    <h1 className="display-4 text-center mb-3">ثبت نام</h1>
                    <p className="text-muted text-center mb-5">ثبت نام در سایت</p>
                    <form>
                        <div className="form-group">
                            <label>نام و نام خانوادگی</label>
                            <input type="name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>شماره موبایل</label>
                            <input type="mobile" className="form-control" />
                        </div>
                        <button className="btn btn-lg btn-block btn-primary mb-3">ثبت نام</button>
                        <div className="text-center">
                            <small className="text-muted text-center">
                                حساب کاربری دارید؟ <a href="#">ورود</a>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;