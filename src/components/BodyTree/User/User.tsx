import React from 'react'
import Styles from '@/components/BodyTree/User/User.module.scss'
function User() {
  return (
    <div className={Styles.user}>
      <div className={Styles.fillter}></div>
      <div className={Styles.userMain}>
        <div className={Styles.newUser}>
          <div className={Styles.boxNewUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
        </div>
        <div className={Styles.accountNumber}>
          <div className={Styles.boxAccountNumber}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
        </div>
        <div className={Styles.role}>
          <div className={Styles.boxRole}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
        </div>
        <div className={Styles.plan}>
          <div className={Styles.boxPlan}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
          <div className={Styles.boxUser}></div>
        </div>
      </div>
    </div>
  )
}

export default User
