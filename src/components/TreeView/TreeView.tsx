import React from 'react'
import Styles from '@/components/TreeView/TreeView.module.scss'
import { TreeView as Model } from '@/components/Interface'
import { FiChevronRight } from 'react-icons/fi'
import { GoPrimitiveDot } from 'react-icons/go'
import classnames from 'clsx'
import { useState } from 'react'
import { maxHeight } from '@mui/system'

function TreeItem() {
  const [active, setActive] = useState(false)
  // const [active, setState] = useState(false)

  return (
    <div className={`${active && Styles.activeItem} ${Styles.treeItem}`} onClick={() => setActive((e) => !e)}>
      <GoPrimitiveDot />
      <p>TreeItem</p>
    </div>
  )
}

function TreeView(props: Model) {
  const { active, setActive, sizeItem } = props
  // const [active, setState] = useState(false)

  document.documentElement.style.setProperty('--max-HeightListTree', `${sizeItem * 40}px`)
  return (
    <div className={Styles.listTree}>
      <p className={Styles.titleTree}>Home</p>
      <div className={`${active && Styles.activeTree} ${Styles.treeView}`} onClick={() => setActive((e) => !e)}>
        <p>Treeview</p>
        <FiChevronRight className={classnames(active ? Styles.activeChevron : Styles.chevron)} size={18} />
        {}
      </div>
      <div className={`${active && Styles.activeListTree} ${Styles.listTreeItem}`}>
        <TreeItem />
        <TreeItem />
        <TreeItem />
      </div>
    </div>
  )
}

export default TreeView
