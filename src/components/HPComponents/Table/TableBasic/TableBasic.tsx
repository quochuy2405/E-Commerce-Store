/* eslint-disable @next/next/no-img-element */
import Styles from '@/components/HPComponents/Table/TableBasic/TableBasic.module.scss'
import type { Product } from '@/types'
import React, { memo, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { KeyValue, Table as Types } from '../../Interface'

function TableBasic(props: Types): JSX.Element {
  const { datas } = props
  const [checkList, setCheckList] = useState<KeyValue[]>([])
  const [checkAll, setCheckAll] = useState(false)
  const [navigation, setNavigation] = useState({
    _limit: 5,
    _start: 1,
    _page: 1,
    _total: 20
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

  // set check all
  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === false) {
      setCheckList([])
    }
    setCheckAll(event.target.checked)
  }

  // set check for each input checkbox and uncheck all
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, key: string | undefined) => {
    const data = checkList.find((e) => e.key === key)
    if (!data) {
      setCheckList([...checkList, { key: key, value: event.target.checked }])
    } else {
      const checkNews = checkList.filter((e) => e.key !== key)
      setCheckList([...checkNews])
    }
  }

  // listen check all when click all check
  useEffect(() => {
    if (checkList.length === datas?.length) {
      setCheckAll(true)
    }
  }, [checkList.length, datas?.length])

  return (
    <>
      <div className={Styles.table}>
        <ToastContainer limit={1} autoClose={500} hideProgressBar pauseOnFocusLoss={false} />
        <div className={Styles.tableHeader}>
          <input type={'checkbox'} checked={checkAll} onChange={(e) => handleCheckAll(e)} />
          {datas?.length &&
            Object.keys(datas[0]).map((key: string) => (
              <div key={key} className={Styles.tableTH}>
                <p>{key} </p>
              </div>
            ))}
        </div>
        <div className={Styles.tableBody}>
          {datas?.map((item: Product | any, index) => (
            <div className={Styles.tableTR} key={item.toString()}>
              <input
                type={'checkbox'}
                checked={
                  checkAll ||
                  checkList.find((e) => e?.key === index.toString())?.value?.toString() === 'true'
                }
                onChange={(e) => handleCheck(e, index.toString())}
              />
              {Object.keys(item).map((key, index) => (
                <div key={index} className={Styles.tableTD}>
                  <p></p>
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
    </>
  )
}

export default memo(TableBasic)
