import type { TreeItem as ModelItem, TreeView as Model } from '@/components/Interface'
import Styles from '@/components/TreeView/TreeView.module.scss'
import classnames from 'clsx'
import { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { GoPrimitiveDot } from 'react-icons/go'
import { Link, useParams } from 'react-router-dom'

function TreeItem(props: ModelItem) {
  const { link, itemKey, treeItemName } = props
  const { slug, opt } = useParams()
  return (
    <Link
      to={link}
      className={`${itemKey === opt && link === `/admin/${slug}/${opt}` && Styles.activeItem} ${
        Styles.treeItem
      }`}
    >
      <GoPrimitiveDot />
      <p>{treeItemName}</p>
    </Link>
  )
}

function TreeView(props: Model) {
  const { link, treeKey, sizeItem, titleTree, nameTree, itemLinks, icon } = props
  const [openTreeItem, setOpenTreeItem] = useState(false)
  const { slug } = useParams()

  document.documentElement.style.setProperty('--max-HeightListTree', `${sizeItem * 40}px`)
  return (
    <div className={Styles.listTree}>
      <p className={Styles.titleTree}>{titleTree}</p>
      <Link to={link}>
        <div
          className={`${treeKey === slug && Styles.activeTree} ${Styles.treeView}`}
          onClick={() => setOpenTreeItem((e) => !e)}
        >
          <div className={Styles.nameTree}>
            {icon}
            <p>{nameTree}</p>
          </div>
          <FiChevronRight
            className={classnames(treeKey === slug ? Styles.activeChevron : Styles.chevron)}
            size={18}
          />
          {}
        </div>
      </Link>

      <div className={`${openTreeItem && Styles.activeListTree} ${Styles.listTreeItem}`}>
        {itemLinks?.map((item) => (
          <TreeItem
            key={`${link}/${item.key}`}
            link={`${link}/${item.key}`}
            treeItemName={item.name}
            itemKey={item.key}
          />
        ))}
      </div>
    </div>
  )
}

export default TreeView
