import React from 'react'
import Table from './common/Table'

function PhoneTable() {
  const columns = [
    { path: 'model', label: 'Model' },
    { path: 'ram-rom', label: 'Ram/Rom' },
    { path: 'tag', label: 'Tag' },
    { path: 'price', label: 'Price' },
  ]

  return <Table columns={columns} />

  // return <div>hello</div>
}

export default PhoneTable
