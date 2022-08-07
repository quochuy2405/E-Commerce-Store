import Bar from '@/components/Bar'
import Styles from '@/components/BodyTree/Stores/Overview/Overview.module.scss'
import { groupLink } from '@/components/Constant/ManageLink'
import { Link } from 'react-router-dom'
import Store from '../Store'

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
        <Store />
        <Store />
        <Store />
        <Store />
      </div>
    </>
  )
}

export default OverView
