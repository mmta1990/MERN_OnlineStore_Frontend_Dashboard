import axios from 'axios'
const BASE_URL = 'http://localhost:5000'
export const get = (url, config = {}) => {
  return axios.get(`${BASE_URL}${url}`, config)
}
export const post = (url, params, config = {}) => {
  return axios.post(`${BASE_URL}${url}`, params, config)
}
