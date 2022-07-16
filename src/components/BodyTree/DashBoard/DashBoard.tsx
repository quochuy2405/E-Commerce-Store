import React from 'react'
import Styles from '@/components/BodyTree/DashBoard/DashBoard.module.scss'
import { ChartBox } from '@/components/HPComponents'

function DashBoard() {
  return (
    <div className={Styles.dashBoard}>
      <div className={Styles.boardChart}>
        <div className={Styles.mainChart}>
          <ChartBox size={1} type={'line'} />
        </div>
        <div className={Styles.earningConversion}>
          <div className={Styles.earning}>
            <ChartBox size={1} type={'line'} />
          </div>
          <div className={Styles.conversion}>
            <ChartBox size={1} type={'bar'} />
          </div>
        </div>
        <div className={Styles.enterpriseClients}>
          <ChartBox size={1} type={'line'} />
        </div>
      </div>
      <div className={Styles.boardDetail}>
        <div className={Styles.dabitCard}>
          <ChartBox size={1} type={'line'} />
        </div>
        <div className={Styles.activityOverview}>
          <ChartBox size={1} type={'line'} />
        </div>
        <div className={Styles.visitor}>
          <ChartBox size={1} type={'line'} />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
