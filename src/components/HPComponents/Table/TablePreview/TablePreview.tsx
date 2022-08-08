/* eslint-disable @next/next/no-img-element */
import Styles from '@/components/HPComponents/Table/TablePreview/TablePreview.module.scss'
import type { Product } from '@/types'
import { useSnackbar } from 'notistack'
import { memo, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { Table as Types } from '../../Interface'

function TableBasic(props: Types): JSX.Element {
  const { datas, title, limit } = props
  const { enqueueSnackbar } = useSnackbar()

  const [navigation, setNavigation] = useState({
    _limit: limit || 0,
    _page: 1,
    _limit_page: 5,
    _total: datas.length
  })

  //copy information of record to clipboard
  const handelCopyToBoard = (text: string) => {
    enqueueSnackbar('Đã copy', { variant: 'warning' })
  }

  // set number and loading data from db
  const setPageOfTable = (number: number) => {
    setNavigation({ ...navigation, _page: number })
  }

  // prev navigation page of table
  const prevPage = () => {
    setNavigation({
      ...navigation,
      _page: navigation._page - 1 <= 0 ? 1 : navigation._page - 1
    })
  }

  // next navigation page of table
  const nextPage = () => {
    setNavigation({
      ...navigation,
      _page:
        navigation._page + 1 >= caculatorTotalPage() ? caculatorTotalPage() : navigation._page + 1
    })
  }

  // caculator Page Start navigation page of table
  const caculatorPageStart = (number: number) => {
    const value = Math.floor((number - 1) / navigation._limit_page) * navigation._limit_page + 1
    return value
  }

  // caculator total page
  const caculatorTotalPage = () => {
    return Math.floor(datas.length / (limit || 1)) + (datas.length % (limit || 1) === 0 ? 0 : 1)
  }

  return (
    <>
      <div className={Styles.table}>
        <div className={Styles.tableHeader}>
          <div className={Styles.tableTH}>
            <p>Xóa </p>
          </div>
          {title.map((key: string) => (
            <div key={key} className={Styles.tableTH}>
              <p>{key} </p>
            </div>
          ))}
        </div>

        {!datas?.length && <p className={Styles.noItem}>No item</p>}

        <div className={Styles.tableBody}>
          {datas
            ?.slice(
              (navigation._page - 1) * navigation._limit,
              (navigation._page - 1) * navigation._limit + navigation._limit
            )
            .map((item: Product | any) => (
              <div className={Styles.tableTR} key={item.toString()}>
                <div className={Styles.tableTD}>
                  <p className={Styles.btnDelete}>
                    <BsTrash size={24} />
                  </p>
                </div>
                {Object.keys(item).map((key, index) => (
                  <div key={key} className={Styles.tableTD}>
                    {key.toLocaleLowerCase().includes('url') ? (
                      <img src={item[key][0]} alt="product" style={{ borderRadius: '3px' }} />
                    ) : (
                      <p>{item[key]}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      <div className={Styles.navigation}>
        <div className={Styles.pageTable} onClick={prevPage}>
          <FiChevronLeft />
        </div>
        {caculatorPageStart(navigation._page) - navigation._limit_page > 0 && (
          <p className={Styles.dot}>...</p>
        )}
        {Array.from(
          {
            length: caculatorTotalPage()
          },
          (_, i) => i + 1
        )
          .slice(
            caculatorPageStart(navigation._page) - 1,
            caculatorPageStart(navigation._page) + navigation._limit_page - 1
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
        {caculatorPageStart(navigation._page) + navigation._limit_page - 1 <
          caculatorTotalPage() && <p className={Styles.dot}>...</p>}
        <div className={Styles.pageTable} onClick={nextPage}>
          <FiChevronRight />
        </div>
      </div>
    </>
  )
}

export default memo(TableBasic)
