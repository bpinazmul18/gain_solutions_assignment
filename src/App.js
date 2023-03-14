import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Statistics from './components/charts/statistics'
import Products from './components/Products'

import { getProducts } from './store/products'

import './App.css'
import Modal from './components/common/Modal'
import Form from './components/common/Form'

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
      <Modal title="Add Product">
        <Form />
      </Modal>
    </>
  )
}
export default App
