import Bar from '@/components/Bar'
import Styles from '@/components/BodyTree/Accounts/Overview/Overview.module.scss'
import { groupLink } from '@/components/Constant/ManageLink'
import { Link } from 'react-router-dom'

function OverView(): JSX.Element {
  return (
    <>
      <Bar>
        <Link to={groupLink.category.add}>
          <div className={Styles.btnAddAtribute}>
            <p>Add Account</p>
          </div>
        </Link>
      </Bar>
      <div className={Styles.categories}></div>
    </>
  )
}

export default OverView
