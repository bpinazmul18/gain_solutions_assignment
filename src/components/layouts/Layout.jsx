import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="xl:container m-auto px-6 md:px-12">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
