import React from 'react'
import PropTypes from 'prop-types'

function TableBody({ data, columns }) {
  const createKey = (item, column) => item._id + (column.path || column.key)

  const renderCell = (item, column) => {
    if (column.columnNumber === 0) {
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

    if (column.columnNumber === 1) {
      return (
        <div className="font-medium text-fs-16 text-sonic-silver">
          {item[column.path].ram}/{item[column.path].internal_storage}
        </div>
      )
    }

    if (column.columnNumber === 2) {
      return (
        <div className="w-96 flex items-center flex-wrap">
          {item[column.path].map((tag) => (
            <div className="font-normal text-fs-12 py-1 px-[18px]" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )
    }

    return <div>TK {item[column.path]}</div>
  }

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
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
