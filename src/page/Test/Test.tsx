import TreeView from '@/components/TreeView'
import React from 'react'
import { useState } from 'react'

function Test() {
  const [active, setActive] = useState<boolean>()
  return (
    <div>
      <TreeView active={active} setActive={setActive} />
    </div>
  )
}

export default Test
