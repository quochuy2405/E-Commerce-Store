import { AiOutlineSetting } from 'react-icons/ai'
import { BiCategoryAlt, BiLineChart } from 'react-icons/bi'
import { BsCart4 } from 'react-icons/bs'
import { IoStorefrontOutline } from 'react-icons/io5'
import { MdOutlineAccountBox, MdOutlineDashboard, MdOutlineSwitchAccount } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import {
  Customers,
  DashBoard,
  Categories,
  Products as ProductOverview,
  Revenue,
  Stores,
  Accounts
} from '../BodyTree'

import type { TreeView } from '../Interface'
import { Category as CategoryKey, Home, Order, Product, User, Store } from './ListTreeItemKey'

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
    body: <ProductOverview />
  },

  {
    link: '/admin/product',
    treeKey: 'product',
    sizeItem: Product?.length,
    titleTree: 'Manage Products',
    nameTree: 'Products',
    itemLinks: Product,
    icon: <BsCart4 size={18} />,
    body: <ProductOverview />
  },
  {
    link: '/admin/customer',
    treeKey: 'customer',
    sizeItem: User?.length,
    titleTree: 'Manager Customer',
    nameTree: 'Customer',
    itemLinks: User,
    icon: <MdOutlineAccountBox size={18} />,
    body: <Customers />
  },
  {
    link: '/admin/category',
    treeKey: 'category',
    sizeItem: CategoryKey?.length,
    titleTree: 'Manage Category',
    nameTree: 'Category',
    itemLinks: CategoryKey,
    icon: <BiCategoryAlt size={18} />,
    body: <Categories />
  },
  {
    link: '/admin/revenue',
    treeKey: 'revenue',
    sizeItem: Order?.length,
    titleTree: 'Manage Revenue',
    nameTree: 'Revenue',
    itemLinks: Order,
    icon: <BiLineChart size={18} />,
    body: <Revenue />
  },
  {
    link: '/admin/store',
    treeKey: 'store',
    sizeItem: Store?.length,
    titleTree: 'Manage Store',
    nameTree: 'Store',
    itemLinks: Store,
    icon: <IoStorefrontOutline size={18} />,
    body: <Stores />
  },
  {
    link: '/admin/account',
    treeKey: 'account',
    sizeItem: Order?.length,
    titleTree: 'Manage Account',
    nameTree: 'Account',
    itemLinks: Order,
    icon: <MdOutlineSwitchAccount size={18} />,
    body: <Accounts />
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
