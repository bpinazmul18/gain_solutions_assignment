import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const data = [
  { name: 'Daraz', value: 30 },
  { name: 'Bikroy', value: 35 },
  { name: 'Pickaboo', value: 35 },
]

const COLORS = ['#84AF27', '#0095A0', '#FFC239']

function PhonesPieChart() {
  return (
    <div>
      <h2 className="text-fs-24 font-semibold text-davys-grey">Sources</h2>
      <div className="flex items-center">
        <PieChart width={248} height={248}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <ul className="flex flex-col justify-center">
          {data.map((entry, index) => (
            <li className="flex items-center" key={`label-${index}`}>
              <div
                className="w-[15px] h-[15px] mr-2.5"
                style={{ backgroundColor: `${COLORS[index]}` }}
              />
              <div className="text-fs-16 text-sonic-silver">
                {entry.name}: {(entry.value / 100) * 100}%
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PhonesPieChart
