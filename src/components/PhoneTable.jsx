import React from 'react'
import PropTypes from 'prop-types'

import Table from './common/Table'

function PhoneTable({ products }) {
  const columns = [
    {
      path: ['phone_images', 'phone_details.model', 'phone_title'],
      label: 'Model',
      columnNumber: 0,
    },
    {
      path: 'phone_details',
      label: 'Ram/Rom',
      columnNumber: 1,
    },
    { path: 'speciality', label: 'Tag', columnNumber: 2 },
    { path: 'phone_price', label: 'Price', columnNumber: 3 },
  ]

  return <Table columns={columns} data={products} />
}

PhoneTable.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
}
export default PhoneTable
