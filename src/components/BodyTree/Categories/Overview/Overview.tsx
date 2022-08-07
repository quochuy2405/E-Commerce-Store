import Bar from '@/components/Bar'
import Styles from '@/components/BodyTree/Categories/Overview/Overview.module.scss'
import { StatusTag } from '@/components/HPComponents'
import { FcNext } from 'react-icons/fc'
import { useParams } from 'react-router-dom'

function Overview() {
  return (
    <>
      <Bar />
      <div>
        <div className="bar"></div>
      </div>
    </>
  )
}

export default Overview
