/* eslint-disable @next/next/no-img-element */
import { Button, Input } from '@/components/HPComponents'
import Styles from '@/styles/page/Login.module.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginImage from '/image/login.svg'
import logo from '/image/logo.png'

function Login(): JSX.Element {
  const [validate, setValidate] = useState({
    userName: false,
    password: false
  })

  const [dataForm, setDataForm] = useState({
    userName: '',
    password: ''
  })

  // handle on change set form data and validate of field data is null
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    setValidate({ ...validate, [e.target.name]: !e.target.value })
  }

  return (
    <div className={Styles.login}>
      <div className={Styles.loginForm}>
        <div className={Styles.logo}>
          <img src={logo} alt="logo" />
          <p>NAME</p>
        </div>
        <div className={Styles.title}>Đăng nhập</div>
        <div className={Styles.inputForm}>
          <Input
            value={dataForm.userName}
            handelChange={handleOnChange}
            type="text"
            invalid={validate.userName}
            textInvalid="Hãy nhập tên đăng nhập"
            title="Tên đăng nhập"
            name="userName"
          />
          <Input
            value={dataForm.password}
            handelChange={handleOnChange}
            type="password"
            invalid={validate.password}
            textInvalid="Hãy nhập mật khẩu"
            title="Mật khẩu"
            name="password"
          />
        </div>
        <div className={Styles.forgot}>
          <div className={Styles.rememberMe}>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <p>Nhớ mật khẩu?</p>
          </div>
          <div className={Styles.forgotPasss}>Quên mật khẩu</div>
        </div>
        <div className={Styles.btnLogin}>
          <Link to="admin">
            <Button name="Đăng nhập" width="100%" height="40px" />
          </Link>
        </div>
      </div>
      <div className={Styles.imgLogin}>
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  )
}

export default Login
