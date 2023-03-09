import React from 'react'
import PropTypes from 'prop-types'

import Table from './common/Table'

function PhoneTable({ products }) {
  const columns = [
    {
      path: ['phone_images', 'phone_details.model', 'phone_title'],
      label: 'Model',
    },
    { path: 'phone_details', label: 'Ram/Rom' },
    { path: 'tag', label: 'Tag' },
    { path: 'price', label: 'Price' },
  ]

  return <Table columns={columns} data={products} />
}

PhoneTable.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
}
export default PhoneTable
