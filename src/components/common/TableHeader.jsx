import React from 'react'
import PropTypes from 'prop-types'
import createKey from '../../utils'

function TableHeader({ columns }) {
  return (
    <thead>
      <tr className="border-b border-ghost-white">
        {columns.map((column) => (
          <th
            className="font-normal text-fs-16 text-sonic-silver text-left pb-4"
            key={createKey(column)}
            scope="col"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
}

export default TableHeader
