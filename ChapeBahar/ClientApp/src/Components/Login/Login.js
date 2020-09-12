import React from 'react'
import './Login.css'
import cover from '../../Assets/img/covers/auth-side-cover.jpg'

const Login = props => {
    console.log()
    return (
        <React.Fragment>
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
                    <h1 className="display-4 text-center mb-3">صفحه ورود</h1>
                    <p className="text-muted text-center mb-5">پنل سفارش گیری چاپ بهار</p>
                    <form>
                        <div className="form-group">
                            <label>نام کاربری</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label>رمز عبور</label>
                                </div>
                                <div className="col-auto">
                                    <a href="#" className="form-text small text-muted">فراموشی رمز عبور</a>
                                </div>
                            </div>
                            <div className="input-group input-group-merge">
                                <input type="password" className="form-control form-control-appended" />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fe fe-eye"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-block btn-primary mb-3">ورود</button>
                        <p className="text-center">
                            <small className="text-muted text-center">
                                هنوز اکانت ندارید؟ <a href="sign-up-cover.html">ثبت نام</a>
                            </small>
                        </p>
                    </form>
                </div>
                <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
                    <div className="bg-cover vh-100 mt-n1 mr-n3" style={{ backgroundImage: `url(${cover})` }}></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Login;