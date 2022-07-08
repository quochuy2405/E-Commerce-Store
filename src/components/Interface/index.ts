import { Dispatch, SetStateAction } from 'react'

interface TreeView {
  active?: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean | undefined>>
  sizeItem: number
}

export type { TreeView }
