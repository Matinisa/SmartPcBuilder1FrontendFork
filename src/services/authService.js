import users from '../data/users.json'

const login = async (email, password) => {
  const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase())
  if (!user) {
    return Promise.reject(new Error('Invalid credentials'))
  }
  return Promise.resolve({
    token: 'mock-jwt-token',
    user
  })
}

const register = async (data) => {
  return Promise.resolve({
    token: 'mock-jwt-token',
    user: {
      id: Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: 'CUSTOMER'
    }
  })
}

export default {
  login,
  register
}
