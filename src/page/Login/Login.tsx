import React from 'react'
import Styles from '@/styles/page/Login.module.scss'
function Login() {
  return (
    <div className={Styles.login}>
      <div className={Styles.logo}></div>
      <div className={Styles.loginForm}>
        <div className={Styles.title}>Sign in</div>
        <div className={Styles.inputForm}>
          <div className={Styles.boxInput}>
            <p>Email</p>
            <input type="text" className={Styles.inputControll} />
          </div>
          <div className={Styles.boxInput}>
            <p>Password</p>
            <input type="text" className={Styles.inputControll} />
          </div>
        </div>
      </div>
      <div className={Styles.imgLogin}></div>
    </div>
  )
}

export default Login
