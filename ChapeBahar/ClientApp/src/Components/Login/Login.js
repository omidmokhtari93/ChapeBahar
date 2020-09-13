import React from 'react'
import './Login.module.scss'
import logo from '../../Assets/img/logo.png'

const Login = props => {
    console.log()
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-xl-4 my-5">
                    <div class="text-center mb-5">
                        <img src={logo} height="50" alt="logo" />
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-header-title text-center">ورود به حساب کاربری</h4>
                        </div>
                        <div class="card-body">
                            <form class="needs-validation" novalidate>
                                <div class="form-group">
                                    <label>نام کاربری</label>
                                    <input type="username" class="form-control" placeholder="09357892060" required />
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col">
                                            <label>رمز عبور</label>
                                        </div>
                                        <div class="col-auto">
                                            <a href="#" class="form-text small text-muted">فراموشی رمز عبور</a>
                                        </div>
                                    </div>
                                    <div class="input-group input-group-merge">
                                        <input type="password" class="form-control form-control-appended" required />
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <span class="fe fe-eye"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-success btn-lg btn-block mb-3">ورود</button>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="text-center">
                                <div class="text-muted text-center mb-3">حساب کاربری ندارید؟</div>
                            </div>
                            <a class="btn btn-primary btn-lg btn-block" href="#">ثبت نام</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;