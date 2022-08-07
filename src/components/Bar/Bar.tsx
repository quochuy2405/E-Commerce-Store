import React from 'react'
import { FcNext } from 'react-icons/fc'
import { useParams } from 'react-router-dom'
import { StatusTag } from '../HPComponents'
import Styles from '@/components/Bar/Bar.module.scss'
import type { Bar as Types } from '../Interface'

function Bar(props: Types): JSX.Element {
  const { slug, opt, action } = useParams()
  return (
    <div className={Styles.bar}>
      <div className={Styles.routeLink}>
        <StatusTag title={'admin'} type={'success'} />
        {slug && (
          <>
            <FcNext />
            <StatusTag title={slug?.toString() || ''} type={'warning'} />
          </>
        )}

        {opt && (
          <>
            <FcNext />
            <StatusTag title={opt?.toString() || ''} type={'error'} />
          </>
        )}

        {action && (
          <>
            <FcNext />
            <StatusTag title={action?.toString() || ''} type={'success'} />
          </>
        )}
      </div>
      {props?.children}
    </div>
  )
}

export default Bar
