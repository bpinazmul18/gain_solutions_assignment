import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Statistics from './components/charts/statistics'
import Products from './components/Products'

import { getProducts } from './store/products'

import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  })
  return (
    <>
      <Statistics />
      <Products />
    </>
  )
}
export default App
