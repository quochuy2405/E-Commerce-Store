import React from 'react'
import Styles from '@/components/BodyTree/Products/ProductList/ProductList.module.scss'
import { TableEditView } from '@/components/HPComponents/Table'
import Bar from '@/components/Bar'

function ProductList() {
  return (
    <>
      <Bar />
      <div className={Styles.table}>
        <TableEditView
          datas={[
            { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' },
            { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' },
            { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' },
            { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' },
            { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' }
          ]}
          title={['1', '2', '3', '4', '5', '6']}
          key={0}
          limit={10}
        />
      </div>
    </>
  )
}

export default ProductList
