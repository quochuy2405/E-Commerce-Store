import Styles from '@/components/Navigation/Navigation.module.scss'
import ListTreeView from '../Constant/ListTreeView'
import TreeView from '../TreeView'

function Navigation(): JSX.Element {
  return (
    <div className={Styles.Navigation}>
      {ListTreeView?.map((item) => (
        <TreeView
          key={item.link + item.nameTree}
          link={item?.link}
          treeKey={item?.treeKey}
          sizeItem={item?.sizeItem}
          itemLinks={item?.itemLinks}
          titleTree={item?.titleTree}
          nameTree={item?.nameTree}
          icon={item?.icon}
        />
      ))}
    </div>
  )
}

export default Navigation
