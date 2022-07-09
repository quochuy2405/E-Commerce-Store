import { Table } from '../HPComponents'
import type { TreeItemSwitch } from '../Interface'

const ListTreeItem: Array<TreeItemSwitch> = [
  { parentURL: 'dashboard', opt: '1', body: <>Tree dashboard1</> },
  { parentURL: 'dashboard', opt: '2', body: <>Tree dashboard2</> },
  { parentURL: 'user', opt: '1', body: <>Tree user1</> },
  { parentURL: 'user', opt: '2', body: <>Tree user2</> },
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
