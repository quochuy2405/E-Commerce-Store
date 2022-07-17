import { AddProduct } from '../BodyTree/Products'
import { Table } from '../HPComponents'
import type { TreeItemSwitch } from '../Interface'

// List tree have body to render in body admin
// URL be will match with url setup in navigation tree
const ListTreeItem: Array<TreeItemSwitch> = [
  { parentURL: 'dashboard', opt: '1', body: <>Tree dashboard1</> },
  { parentURL: 'dashboard', opt: '2', body: <>Tree dashboard2</> },
  { parentURL: 'product', opt: '1', body: <AddProduct /> },
  { parentURL: 'product', opt: '2', body: <>Tree user2</> },
  { parentURL: 'product', opt: '3', body: <>Tree user3</> },
  { parentURL: 'user', opt: '3', body: <>Tree user3</> },
  {
    parentURL: 'hello',
    opt: '1',
    body: <Table />
  },
  { parentURL: 'hello', opt: '2', body: <>Tree hello2</> },
  { parentURL: 'hello', opt: '3', body: <>Tree hello3</> }
]

export { ListTreeItem }
