import React from 'react'
import PhonesPieChart from './PhonesPieChart'
import BarChart from './BarChart'

function Statistics() {
  return (
    <div className="py-[50px] flex items-center justify-between">
      <PhonesPieChart />
      <BarChart />
    </div>
  )
}

export default Statistics
