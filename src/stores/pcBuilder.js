import { defineStore } from 'pinia'
import pcBuilderService from '../services/pcBuilderService'

export const usePcBuilderStore = defineStore('pcBuilder', {
  state: () => ({
    cpu: null,
    motherboard: null,
    ram: null,
    gpu: null,
    storage: null,
    psu: null,
    pcCase: null,
    cooling: null,
    compatibility: []
  }),
  getters: {
    selectedComponents(state) {
      return [state.cpu, state.motherboard, state.ram, state.gpu, state.storage, state.psu, state.pcCase, state.cooling].filter(Boolean)
    },
    totalPrice(state) {
      return this.selectedComponents.reduce((total, item) => total + (item.price || 0), 0)
    }
  },
  actions: {
    async refreshCompatibility() {
      this.compatibility = await pcBuilderService.checkCompatibility({
        cpu: this.cpu,
        motherboard: this.motherboard,
        ram: this.ram
      })
    },
    resetBuild() {
      this.cpu = null
      this.motherboard = null
      this.ram = null
      this.gpu = null
      this.storage = null
      this.psu = null
      this.pcCase = null
      this.cooling = null
      this.compatibility = []
    }
  }
})
