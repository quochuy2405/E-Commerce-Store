import React, { useState } from 'react'
import Styles from '@/components/Navigation/Navigation.module.scss'
import TreeView from '../TreeView'
function Navigation() {
  const [active, setActive] = useState<boolean>()
  return (
    <div className={Styles.Navigation}>
      <TreeView active={active} setActive={setActive} sizeItem={3} />
      <TreeView active={active} setActive={setActive} sizeItem={3} />
      <TreeView active={active} setActive={setActive} sizeItem={3} />
      <TreeView active={active} setActive={setActive} sizeItem={3} />
    </div>
  )
}

export default Navigation
