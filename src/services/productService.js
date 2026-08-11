import products from '../data/products.json'

const getAll = async () => {
  return Promise.resolve(products)
}

const getById = async (id) => {
  const product = products.find((item) => item.id === Number(id))
  return Promise.resolve(product)
}

export default {
  getAll,
  getById
}
