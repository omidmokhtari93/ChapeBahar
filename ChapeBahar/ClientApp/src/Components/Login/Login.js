import React from 'react'
import './Login.module.scss'
import logo from '../../Assets/img/logo.png'
import { withRouter } from 'react-router-dom'

const Login = props => {
    console.log()
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-xl-4 my-5">
                    <div className="text-center mb-5">
                        <img src={logo} height="50" alt="logo" />
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-header-title text-center">ورود به حساب کاربری</h4>
                        </div>
                        <div className="card-body">
                            <form className="needs-validation" noValidate>
                                <div className="form-group">
                                    <label>نام کاربری</label>
                                    <input type="username" className="form-control" placeholder="ایمیل یا شماره موبایل" required />
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
                                        <input type="password" className="form-control form-control-appended" required />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <span className="fe fe-eye"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success btn-lg btn-block mb-3">ورود</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="text-center">
                                <div className="text-muted text-center mb-3">حساب کاربری ندارید؟</div>
                            </div>
                            <a onClick={() => props.history.replace('/register')}
                                className="btn btn-primary btn-lg btn-block">ثبت نام</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Login);