import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetchProducts from '../services/products'

export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts()
    return response
  }
)

const slice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    lastFetch: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (products, action) => {
      products.list.push(...action.payload)
    })
  },
})

export default slice.reducer
