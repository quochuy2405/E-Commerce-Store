import Styles from '@/components/HPComponents/Dialog/Dialog.module.scss'
import React, { useState } from 'react'
import type { Dialog as Types } from '../Interface'

function Dialog(props: Types): JSX.Element {
  const { children, style, open, setOpen } = props

  return (
    <>
      <div
        className={`${Styles.overLay}  ${open && Styles.open}`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`${Styles.dialog} ${!open && Styles.close} ${open && Styles.open}`}
        style={style}
      >
        {children}
      </div>
    </>
  )
}

export default Dialog
