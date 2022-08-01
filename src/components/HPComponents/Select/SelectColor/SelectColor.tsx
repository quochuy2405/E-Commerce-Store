import type { Attribute } from '@/components/Interface'
import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import type { SelectColor as Types } from '../../Interface'
import Styles from './SelectColor.module.scss'

function SelectColor(props: Types): JSX.Element {
  // set check color
  const setCheckColor = (color: string | undefined) => {
    const event = new Event('change')
    props.handelChange(event, 'Color', color)
  }

  return (
    <div>
      <div className={Styles.selectColor}>
        <p className={Styles.titleInput}>Select color</p>
        <div className={Styles.boxColor}>
          {props?.data.map((item) => (
            <div key={item?.key?.toString()} className={Styles.itemColor}>
              <div
                className={Styles.colors}
                onClick={() => setCheckColor(item?.value?.toString())}
                style={{ backgroundColor: item?.value?.toString() }}
              >
                {props.value === item.value && <BsCheck size={18} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectColor
