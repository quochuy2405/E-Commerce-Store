import Bar from '@/components/Bar'
import Styles from '@/components/BodyTree/Categories/Category/Category.module.scss'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <>
      <Bar>
        <Link to={'/admin/category/add'}>
          <div className={Styles.btnAddAtribute}>
            <p>Add Attribute</p>
          </div>
        </Link>
      </Bar>
    </>
  )
}

export default Category
