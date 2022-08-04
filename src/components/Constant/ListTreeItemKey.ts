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
    name: 'Product Details',
    key: 'details'
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
export { Home, User, Order, Products }
