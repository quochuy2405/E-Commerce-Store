import { AiOutlineSetting } from 'react-icons/ai'
import { BiCategoryAlt, BiLineChart } from 'react-icons/bi'
import { BsCart4 } from 'react-icons/bs'
import { IoStorefrontOutline } from 'react-icons/io5'
import { MdOutlineAccountBox, MdOutlineDashboard, MdOutlineSwitchAccount } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { DashBoard, User as BodyUser } from '../BodyTree'
import { Overview as CategoryOverview } from '../BodyTree/Categories'
import type { TreeView } from '../Interface'
import { Category, Home, Order, Products, User } from './ListTreeItemKey'

// list review will be render main tag for each object
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
    link: '/admin/order',
    treeKey: 'order',
    sizeItem: Order?.length,
    titleTree: 'Manage Order',
    nameTree: 'Order',
    itemLinks: Order,
    icon: <TbTruckDelivery size={18} />,
    body: <p>Over view Order</p>
  },

  {
    link: '/admin/product',
    treeKey: 'product',
    sizeItem: Products?.length,
    titleTree: 'Manage Products',
    nameTree: 'Products',
    itemLinks: Products,
    icon: <BsCart4 size={18} />,
    body: <BodyUser />
  },
  {
    link: '/admin/customer',
    treeKey: 'customer',
    sizeItem: User?.length,
    titleTree: 'Manager Customer',
    nameTree: 'Customer',
    itemLinks: User,
    icon: <MdOutlineAccountBox size={18} />,
    body: <BodyUser />
  },
  {
    link: '/admin/category',
    treeKey: 'category',
    sizeItem: Category?.length,
    titleTree: 'Manage Category',
    nameTree: 'Category',
    itemLinks: Category,
    icon: <BiCategoryAlt size={18} />,
    body: <CategoryOverview />
  },
  {
    link: '/admin/revenue',
    treeKey: 'revenue',
    sizeItem: Order?.length,
    titleTree: 'Manage Revenue',
    nameTree: 'Revenue',
    itemLinks: Order,
    icon: <BiLineChart size={18} />,
    body: <p>Order2</p>
  },
  {
    link: '/admin/store',
    treeKey: 'store',
    sizeItem: Order?.length,
    titleTree: 'Manage Store',
    nameTree: 'Store',
    itemLinks: Order,
    icon: <IoStorefrontOutline size={18} />,
    body: <p>Order2</p>
  },
  {
    link: '/admin/account',
    treeKey: 'account',
    sizeItem: Order?.length,
    titleTree: 'Manage Account',
    nameTree: 'Account',
    itemLinks: Order,
    icon: <MdOutlineSwitchAccount size={18} />,
    body: <p>Order2</p>
  },
  {
    link: '/admin/setting',
    treeKey: 'setting',
    sizeItem: Order?.length,
    titleTree: 'Settings',
    nameTree: 'General',
    itemLinks: Order,
    icon: <AiOutlineSetting size={18} />,
    body: <p>Order2</p>
  }
]

export default ListTreeView
