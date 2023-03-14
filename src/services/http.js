import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.response.use(null, (err) => {
  const expectedErr =
    err.response && err.response.status >= 400 && err.response.status < 500

  if (!expectedErr) {
    console.log('An unexpected error occurred!')
  }

  return Promise.reject(err)
})

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}

export default http
