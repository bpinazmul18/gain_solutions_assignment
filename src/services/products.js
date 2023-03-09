import data from '../data/index.json'

export default function fetchProducts() {
  return data.slice(0, 5)
}
