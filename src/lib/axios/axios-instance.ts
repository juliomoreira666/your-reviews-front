import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use((config) => {
//  const token = getLocalStorageToken('token')
  config.headers.Authorization = `Bearer ${''}`
  return config
})

export default instance