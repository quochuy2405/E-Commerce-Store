/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ListTreeItemActions } from '../Constant/ListTreeItemActions'
import { ListTreeItem } from '../Constant/ListTreeItemSwitch'
import ListTreeView from '../Constant/ListTreeView'
function BodyView(): JSX.Element {
  const { slug, opt, action } = useParams()
  const navigate = useNavigate()
  const [body, setBody] = useState<React.ReactElement>(<>Default</>)

  // set body of tree view render from list tree view are setted from folder Constant
  useEffect(() => {
    if (!opt) {
      setBody(ListTreeView.find((e) => e.link == `/admin/${slug}`)?.body || <></>)
    } else {
      if (!action) {
        const Element = ListTreeItem.find((e) => e.parentURL === slug && e.opt === opt)
        if (!Element) {
          navigate('/notfound', { replace: false })
        } else {
          setBody(Element?.body || <></>)
        }
      } else {
        const Element = ListTreeItemActions.find(
          (e) => e.parentURL === slug && e.opt === opt && e.action === action
        )
        if (!Element) {
          navigate('/notfound', { replace: false })
        } else {
          setBody(Element?.body || <></>)
        }
      }
    }
  }, [slug, opt, action])

  return <>{body}</>
}

export default BodyView
