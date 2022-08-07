import React from 'react'
import Styles from '@/components/BodyTree/Products/Overview/Overview.module.scss'
import Bar from '@/components/Bar'
import { Link } from 'react-router-dom'
import { groupLink } from '@/components/Constant/ManageLink'
function Product(): JSX.Element {
  return (
    <div className={Styles.product}>
      <Bar>
        <Link to={groupLink?.product?.add}>
          <div className={Styles.btnAddAtribute}>
            <p>Add Product</p>
          </div>
        </Link>
      </Bar>
      <div className={Styles.productMain}>
        <div className={Styles.newProduct}>
          <div className={Styles.boxNewProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
        </div>
        <div className={Styles.accountNumber}>
          <div className={Styles.boxAccountNumber}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
        </div>
        <div className={Styles.role}>
          <div className={Styles.boxRole}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
        </div>
        <div className={Styles.plan}>
          <div className={Styles.boxPlan}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
          <div className={Styles.boxProduct}></div>
        </div>
      </div>
    </div>
  )
}

export default Product
