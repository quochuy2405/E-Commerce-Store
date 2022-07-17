import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListTreeItem } from '../Constant/ListTreeItemSwitch'
import { ListTreeItemActions } from '../Constant/ListTreeItemActions'
import ListTreeView from '../Constant/ListTreeView'
function BodyView(): JSX.Element {
  const { slug, opt, action } = useParams()
  const [body, setBody] = useState<React.ReactElement>()

  // set body of tree view render from list tree view are setted from folder Constant
  useEffect(() => {
    if (!opt) {
      setBody(ListTreeView.find((e) => e.link == `/admin/${slug}`)?.body || <></>)
    } else {
      if (!action) {
        setBody(ListTreeItem.find((e) => e.parentURL === slug && e.opt === opt)?.body || <></>)
      } else {
        setBody(
          ListTreeItemActions.find(
            (e) => e.parentURL === slug && e.opt === opt && e.action === action
          )?.body || <></>
        )
      }
    }
  }, [slug, opt, action])

  return <>{body}</>
}

export default BodyView
