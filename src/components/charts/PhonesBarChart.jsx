import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  { name: 'Official', count: 10000, amt: 50000 },
  { name: 'Unofficial', count: 20000, amt: 50000 },
  { name: 'Without warranty', count: 30000, amt: 50000 },
  { name: 'Used', count: 40000, amt: 50000 },
]

function PhonesBarChart() {
  return (
    <div>
      <h2 className="text-fs-24 font-semibold text-davys-grey">Conditions</h2>
      <div className="flex items-center">
        <BarChart
          width={706}
          height={334}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt" />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  )
}

export default PhonesBarChart
