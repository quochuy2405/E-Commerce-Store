import type { KeyNameTree } from '../Interface'

const Home: Array<KeyNameTree> = [
  {
    name: 'Accounts',
    key: 'accounts'
  },
  {
    name: 'Promotion',
    key: 'promotion'
  }
]
const User: Array<KeyNameTree> = [
  {
    name: 'Accounts',
    key: 'accounts'
  },
  {
    name: 'Checkout Order',
    key: 'checkout'
  }
]

const Products: Array<KeyNameTree> = [
  {
    name: 'Add Product',
    key: 'add'
  },
  {
    name: 'Product List',
    key: 'list'
  },
  {
    name: 'Manager Types',
    key: 'type'
  },
  {
    name: 'Product Expired',
    key: 'expired'
  }
]
const Order: Array<KeyNameTree> = [
  {
    name: 'Category',
    key: 'category'
  },
  {
    name: 'Check Out',
    key: 'checkout'
  },
  {
    name: 'Coupond',
    key: 'coupond'
  },
  {
    name: 'Delivery',
    key: 'delivery'
  }
]
const Category: Array<KeyNameTree> = [
  {
    name: 'Add Category',
    key: 'add'
  }
]
export { Home, User, Order, Products, Category }
