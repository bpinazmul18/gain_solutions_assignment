import React from 'react'
import PhonesPieChart from './PhonesPieChart'
import PhonesBarChart from './PhonesBarChart'

function Statistics() {
  return (
    <div className="py-[50px] flex justify-between">
      <PhonesPieChart />
      <PhonesBarChart />
    </div>
  )
}

export default Statistics
