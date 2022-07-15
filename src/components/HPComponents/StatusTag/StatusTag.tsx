import React from 'react'
import type { StatusTag as Types } from '../Interface'
import Styles from './StatusTag.module.scss'

function StatusTag(props: Types): JSX.Element {
  const { title, type } = props

  return (
    <div
      className={`
      ${type === 'success' && Styles.success}
      ${type === 'error' && Styles.error} 
      ${type === 'warning' && Styles.warning}`}
    >
      {title}
    </div>
  )
}

export default StatusTag
