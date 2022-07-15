import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListTreeItem } from '../Constant/ListTreeItemSwitch'
import ListTreeView from '../Constant/ListTreeView'
function BodyView(): JSX.Element {
  const { slug, opt } = useParams()
  const [body, setBody] = useState<React.ReactElement>()

  // set body of tree view render from list tree view are setted from folder Constant
  useEffect(() => {
    if (!opt) setBody(ListTreeView.find((e) => e.link == `/admin/${slug}`)?.body || <></>)
    else setBody(ListTreeItem.find((e) => e.parentURL === slug && e.opt === opt)?.body || <></>)
  }, [slug, opt])

  return <>{body}</>
}

export default BodyView
