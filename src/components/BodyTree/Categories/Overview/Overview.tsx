import Bar from '@/components/Bar'
import Styles from '@/components/BodyTree/Categories/Overview/Overview.module.scss'
import { groupLink } from '@/components/Constant/ManageLink'
import { Link } from 'react-router-dom'
import Category from '../Category'

function OverView(): JSX.Element {
  return (
    <>
      <Bar>
        <Link to={groupLink.category.add}>
          <div className={Styles.btnAddAtribute}>
            <p>Add Category</p>
          </div>
        </Link>
      </Bar>
      <div className={Styles.categories}>
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </>
  )
}

export default OverView
