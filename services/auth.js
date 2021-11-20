import * as API from 'services/api'
export const check = async () => {
  const authToken = localStorage.getItem('token')
  if (!authToken) {
    return false
  }
  try {
    const response = await API.post('/api/v1/auth/check', {
      authToken
    })
    if (response.data.success) {
      return true
    }
  } catch (error) {
    return false
  }
}
export const current = async () => {

}
export const login = async (email, password) => {
  try {
    const result = await API.post('/api/v1/auth/login', {
      email, password
    })
    if (result && result.data.success) {
      return [true, result.data.token, result.data.user]
    }
  } catch (error) {
    return [false]
  }
}
export const register = async (userData) => {
  try {
    const result = await API.post('/api/v1/auth/register', {
      ...userData
    })
    if (result && result.data.success) {
      return true
    }
  } catch (error) {
    return false
  }
}
