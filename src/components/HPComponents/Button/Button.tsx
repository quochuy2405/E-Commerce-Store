import React from 'react'
import Styles from '@/components/HPComponents/Button/Button.module.scss'
import type { Button as Type } from '../Interface'

function Button(props: Type) {
  const { handleOnCick, name, height, width } = props
  return (
    <div className={Styles.button} style={{ width: width, height: height }} onClick={handleOnCick}>
      <p> {name}</p>
    </div>
  )
}

export default Button
