import { MdOutlineAccountBox, MdOutlineAssignment, MdOutlineDashboard } from 'react-icons/md'
import { DashBoard, User as BodyUser } from '../BodyTree'
import type { TreeView } from '../Interface'
import { Hello, Home, User } from './ListTreeItemKey'
const ListTreeView: Array<TreeView> = [
  {
    link: '/admin/dashboard',
    treeKey: 'dashboard',
    sizeItem: Home?.length,
    itemLinks: Home,
    titleTree: 'Home',
    nameTree: 'Dashboard',
    icon: <MdOutlineDashboard size={18} />,
    body: <DashBoard />
  },
  {
    link: '/admin/user',
    treeKey: 'user',
    sizeItem: User?.length,
    titleTree: 'User',
    nameTree: 'User',
    itemLinks: User,
    icon: <MdOutlineAccountBox size={18} />,
    body: <BodyUser />
  },
  {
    link: '/admin/hello',
    treeKey: 'hello',
    sizeItem: Hello?.length,
    titleTree: 'Hello',
    nameTree: 'Hello',
    itemLinks: Hello,
    icon: <MdOutlineAssignment size={18} />,
    body: <p>Hello</p>
  },
  {
    link: '/admin/helloo',
    treeKey: 'helloo',
    sizeItem: Hello?.length,
    titleTree: 'Hello',
    nameTree: 'Hello',
    itemLinks: Hello,
    icon: <MdOutlineAssignment size={18} />,
    body: <p>Hello2</p>
  }
]

export default ListTreeView
