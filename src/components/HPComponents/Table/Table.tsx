import Styles from '@/components/HPComponents/Table/Table.module.scss'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { TbTableExport } from 'react-icons/tb'
import { toast, ToastContainer } from 'react-toastify'
import { memo, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import StatusTag from '../StatusTag'

const listTitle = [
  {
    name: 'Home'
  },
  {
    name: 'About'
  },
  {
    name: 'Price'
  },
  {
    name: 'Total'
  },
  {
    name: 'Total1'
  },
  {
    name: 'Total2'
  },
  {
    name: 'Total3'
  },
  {
    name: 'Total4'
  }
]

function Table(): JSX.Element {
  const [navigation, setNavigation] = useState({
    _limit: 5,
    _start: 1,
    _page: 1,
    _total: 10
  })

  //copy information of record to clipboard
  const handelCopyToBoard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Đã copy')
    toast.clearWaitingQueue()
  }

  // set number and loading data from db
  const setPageOfTable = (number: number) => {
    setNavigation({ ...navigation, _page: number })
  }

  // prev navigation page of table
  const prevPage = () => {
    setNavigation({ ...navigation, _page: navigation._page - 1 <= 0 ? 1 : navigation._page - 1 })
  }

  // next navigation page of table
  const nextPage = () => {
    setNavigation({
      ...navigation,
      _page: navigation._page + 1 >= navigation._total ? navigation._total : navigation._page + 1
    })
  }

  // caculator Page Start navigation page of table
  const caculatorPageStart = (number: number) => {
    const value = Math.floor((number - 1) / navigation._limit) * navigation._limit + 1
    return value
  }

  return (
    <>
      <ToastContainer limit={1} autoClose={500} hideProgressBar pauseOnFocusLoss={false} />
      <div className={Styles.table}>
        <div className={Styles.optionTable}>
          <p className={Styles.title}>Name Table</p>
          <div className={Styles.groupButton}>
            <IoSettingsOutline size={20} />
            <div className={Styles.buttonItem}>Export to CSV</div>
            <div className={Styles.buttonItem}>
              <p>Export</p> <TbTableExport size={16} />
            </div>
          </div>
        </div>

        <div className={Styles.tableHeader}>
          {listTitle.map((item) => (
            <div key={item.name} className={Styles.tableTH}>
              <p>{item.name} </p>
            </div>
          ))}
        </div>
        <div className={Styles.tableBody}>
          <div className={Styles.tableTR}>
            {listTitle.map((item) => (
              <div key={item.name} className={Styles.tableTD}>
                <StatusTag title={item.name} type="error" />
              </div>
            ))}
          </div>
          <div className={Styles.tableTR}>
            {listTitle.map((item) => (
              <div
                key={item.name}
                className={Styles.tableTD}
                onClick={() => handelCopyToBoard(item.name)}
              >
                <StatusTag title={item.name} type="warning" />
              </div>
            ))}
          </div>
          <div className={Styles.tableTR}>
            {listTitle.map((item) => (
              <div
                key={item.name}
                className={Styles.tableTD}
                onClick={() => handelCopyToBoard(item.name)}
              >
                <StatusTag title={item.name} type="success" />
              </div>
            ))}
          </div>
        </div>
        <div className={Styles.navigation}>
          <div className={Styles.pageTable} onClick={prevPage}>
            <FiChevronLeft />
          </div>
          {caculatorPageStart(navigation._page) + navigation._limit - 1 >
            navigation._total - navigation._limit && <p className={Styles.dot}>...</p>}
          {Array.from({ length: navigation._total }, (_, i) => i + 1)
            .slice(
              caculatorPageStart(navigation._page) - 1,
              caculatorPageStart(navigation._page) + navigation._limit - 1
            )
            .map((number) => (
              <div
                key={number}
                className={`${Styles.pageTable} ${navigation._page === number && Styles.active}`}
                onClick={() => setPageOfTable(number)}
              >
                <p>{number}</p>
              </div>
            ))}
          {caculatorPageStart(navigation._page) + navigation._limit - 1 < navigation._total && (
            <p className={Styles.dot}>...</p>
          )}
          <div className={Styles.pageTable} onClick={nextPage}>
            <FiChevronRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Table)
