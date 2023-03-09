import React from 'react'
import PropTypes from 'prop-types'

function TableBody({ data, columns }) {
  const createKey = (item, column) => item._id + (column.path || column.key)

  const renderCell = (item, column) => {
    if (typeof column.path === 'object') {
      return (
        <div className="flex items-center">
          <img
            className="w-[90px] h-[76px] mr-2.5 "
            src={item.phone_images[0]}
            alt={item.phone_title}
          />
          <div>
            <h3 className="font-semibold text-fs-18 text-davys-grey">
              {item.phone_details.model}
            </h3>
            <p className="font-normal text-fs-16 text-sonic-silver">
              {item.phone_title}
            </p>
          </div>
        </div>
      )
    }

    return <div>Hi</div>
  }

  return (
    <tbody>
      {data.map((item) => (
        <tr className="my-5" key={item._id}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  columns: PropTypes.instanceOf(Array).isRequired,
}

export default TableBody
