import React from 'react'
import PropTypes from 'prop-types'

import TableBody from './TableBody'
import TableHeader from './TableHeader'

function Table({ columns }) {
  return (
    <div className="table-responsive">
      <table className="border-collapse table-auto w-full text-sm">
        <TableHeader columns={columns} />
        <TableBody />
      </table>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
}

export default Table
