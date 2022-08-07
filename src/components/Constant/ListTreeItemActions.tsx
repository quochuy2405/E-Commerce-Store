import { AddVariant } from '../BodyTree/Products'
import { Table } from '../HPComponents'
import type { TreeItemAction } from '../Interface'

// List tree have body to render in body admin
// URL be will match with url setup in navigation tree
const ListTreeItemActions: Array<TreeItemAction> = [
  { parentURL: 'category', opt: 'category', action: 'add', body: <AddVariant /> },
  { parentURL: 'category', opt: 'checkout', action: 'details', body: <>Tree user2</> },
  { parentURL: 'category', opt: 'type', action: 'add', body: <>Tree user3</> },
  { parentURL: 'product', opt: 'product', action: 'add', body: <AddVariant /> },
  { parentURL: 'product', opt: '1', action: 'details', body: <>Tree user2</> },
  { parentURL: 'product', opt: '3', action: 'add', body: <>Tree user3</> }
]

export { ListTreeItemActions }
