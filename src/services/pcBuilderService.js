import products from '../data/products.json'

const getComponentsByCategory = async (category) => {
  const items = products.filter((product) => product.category === category)
  return Promise.resolve(items)
}

const checkCompatibility = async (build) => {
  const compatibility = []
  if (build.cpu && build.motherboard) {
    compatibility.push({
      label: 'CPU socket',
      status: build.cpu.specifications.socket === build.motherboard.specifications.socket ? 'compatible' : 'incompatible',
      message: build.cpu.specifications.socket === build.motherboard.specifications.socket ? 'Socket match confirmed.' : 'CPU socket does not match motherboard socket.'
    })
  }
  if (build.ram && build.motherboard) {
    compatibility.push({
      label: 'Memory type',
      status: build.ram.specifications.memory === build.motherboard.specifications.memory ? 'compatible' : 'warning',
      message: build.ram.specifications.memory === build.motherboard.specifications.memory ? 'RAM type matches motherboard.' : 'RAM type may not be supported by the selected motherboard.'
    })
  }
  return Promise.resolve(compatibility)
}

export default {
  getComponentsByCategory,
  checkCompatibility
}
