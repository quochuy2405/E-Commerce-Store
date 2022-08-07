import { AddCategory } from '../BodyTree/Categories'
import { AddProduct } from '../BodyTree/Products'
import { Table } from '../HPComponents'
import type { TreeItemSwitch } from '../Interface'

// List tree have body to render in body admin
// URL be will match with url setup in navigation tree
const ListTreeItem: Array<TreeItemSwitch> = [
  { parentURL: 'dashboard', opt: 'accounts', body: <>Tree dashboard accounts</> },
  { parentURL: 'dashboard', opt: 'promotion', body: <>Tree dashboard promotion</> },
  { parentURL: 'order', opt: 'checkout', body: <>Tree checkout order</> },
  { parentURL: 'order', opt: 'coupond', body: <>Tree coupond</> },
  { parentURL: 'order', opt: 'delivery', body: <>Tree delivery</> },
  { parentURL: 'product', opt: 'add', body: <AddProduct /> },
  { parentURL: 'product', opt: 'list', body: <>Tree details</> },
  { parentURL: 'product', opt: 'type', body: <>Tree type</> },
  { parentURL: 'customer', opt: 'accounts', body: <AddProduct /> },
  { parentURL: 'customer', opt: 'checkout', body: <>Tree checkout</> },
  { parentURL: 'customer', opt: 'type', body: <>Tree type</> },
  { parentURL: 'category', opt: 'add', body: <AddCategory /> },
  { parentURL: 'category', opt: 'checkout', body: <>Tree checkout</> },
  { parentURL: 'category', opt: 'type', body: <>Tree type</> },
  { parentURL: 'user', opt: 'expired', body: <>Tree expired</> }
]

export { ListTreeItem }
