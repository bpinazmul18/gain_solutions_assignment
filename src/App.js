import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Statistics from './components/charts/statistics'
import Products from './components/Products'

import { getProducts } from './store/products'

import './App.css'

function App() {
  const products = useSelector((state) => state.entities.products.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <>
      <Statistics />
      <Products products={products} />
    </>
  )
}
export default App
