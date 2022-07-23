import type React from 'react'

interface KeyNameTree {
  name: string
  key: string
}
interface TreeView {
  link: string
  sizeItem: number
  treeKey: string
  titleTree?: string
  nameTree?: string
  itemLinks?: Array<KeyNameTree>
  icon?: React.ReactElement
  body?: React.ReactElement
}
interface TreeItem {
  link: string
  itemKey: string
  treeItemName?: string
}
interface TreeItemSwitch {
  parentURL: string
  opt: string
  body?: React.ReactElement
}

interface TreeItemAction {
  parentURL: string
  opt: string
  action: string
  body?: React.ReactElement
}
interface FileView {
  id: string
  path: string
  preview: string
}
interface DropFile {
  index: number
  size: number
  fileImages: FileView[]
  setFileImages: React.Dispatch<React.SetStateAction<FileView[]>>
}

export type { TreeView, TreeItem, KeyNameTree, TreeItemSwitch, TreeItemAction, DropFile, FileView }
