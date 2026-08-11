import orders from '../data/orders.json'

const getAll = async () => {
  return Promise.resolve(orders)
}

const getById = async (id) => {
  const order = orders.find((item) => item.id === Number(id))
  return Promise.resolve(order)
}

export default {
  getAll,
  getById
}
