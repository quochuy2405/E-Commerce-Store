import { Footer, Header } from '@/components'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layouts(): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default Layouts
