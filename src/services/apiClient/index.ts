import axios from 'axios'

const ApiClient = axios.create({
  timeout: 10000
})

export default ApiClient
