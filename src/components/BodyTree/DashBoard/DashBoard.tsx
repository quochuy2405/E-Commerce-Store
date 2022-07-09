import React from 'react'
import Styles from '@/components/BodyTree/DashBoard/DashBoard.module.scss'

function DashBoard() {
  return (
    <div className={Styles.dashBoard}>
      <div className={Styles.boardChart}>
        <div className={Styles.mainChart}></div>
        <div className={Styles.earningConversion}>
          <div className={Styles.earning}></div>
          <div className={Styles.conversion}></div>
        </div>
        <div className={Styles.enterpriseClients}></div>
      </div>
      <div className={Styles.boardDetail}>
        <div className={Styles.dabitCard}></div>
        <div className={Styles.activityOverview}></div>
        <div className={Styles.visitor}></div>
      </div>
    </div>
  )
}

export default DashBoard
