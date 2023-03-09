import React from 'react'
import Table from './common/Table'

const columns = [
  { path: 'model', label: 'Model' },
  { path: 'ram-rom', label: 'Ram/Rom' },
  { path: 'tag', label: 'Tag' },
  { path: 'price', label: 'Price' },
]

function PhoneTable() {
  return <Table columns={columns} />
}

export default PhoneTable
