import React from 'react'
import PropTypes from 'prop-types'

import TableBody from './TableBody'
import TableHeader from './TableHeader'

function Table({ columns, data }) {
  return (
    <div className="table-responsive">
      <table className="border-collapse table-auto w-full text-sm">
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
}

export default Table
