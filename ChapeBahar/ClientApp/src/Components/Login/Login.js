import React, { useState } from 'react'
import './Login.module.scss'
import logo from '../../Assets/img/logo.png'
import { withRouter } from 'react-router-dom'
import { store } from 'react-notifications-component';
import { notifConfig } from '../../UI/Notification/Notification.config'
import { userService } from '../../Services/User.Service';
import Loading from '../../UI/Loading/Loading';

const Login = props => {
    let [inputType, showPassword] = useState('password');
    let [userData, handleChange] = useState({ Username: '', Password: '' });
    let [show, showLoading] = useState(false)
    const loginUser = () => {
        showLoading(true)
        if (userData.Username.trim() == '' || userData.Password.trim() == '') {
            store.addNotification({
                ...notifConfig,
                message: "نام کاربری و رمز عبور را وارد کنید",
                type: "danger"
            });
            showLoading(false)
        } else {
            userService.login(userData).then(auth => {
                console.log(auth)
                showLoading(false)
            })
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-xl-4 my-5">
                    <div className="text-center mb-5">
                        <img src={logo} height="50" alt="logo" />
                    </div>
                    <div className="card">
                        <div className="card-header bg-light">
                            <h4 className="card-header-title text-center">ورود به حساب کاربری</h4>
                        </div>
                        <div className="card-body">
                            <form className="needs-validation">
                                <div className="form-group">
                                    <label>نام کاربری</label>
                                    <input type="username" className="form-control" placeholder="ایمیل یا شماره موبایل" autoComplete="off"
                                        onChange={e => handleChange({ ...userData, Username: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>رمز عبور</label>
                                        </div>
                                        <div className="col-auto">
                                            <a onClick={() => props.history.replace('/forget')}
                                                className="form-text small text-muted pointer">فراموشی رمز عبور</a>
                                        </div>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input type={inputType} className="form-control form-control-appended" autoComplete="off"
                                            onChange={e => handleChange({ ...userData, Password: e.target.value })} />
                                        <div className="input-group-append pointer"
                                            onClick={() => (inputType == 'password')
                                                ? showPassword('text')
                                                : showPassword('password')}>
                                            <span className="input-group-text">
                                                <span className={inputType == 'password' ? 'fe fe-eye' : 'fe fe-eye-off'}></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success btn-lg btn-block" type="button"
                                    onClick={() => loginUser()}>ورود</button>
                            </form>
                            <Loading show={show} />
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