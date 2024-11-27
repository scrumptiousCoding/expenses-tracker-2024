// Utilities
import { defineStore } from 'pinia'
import type { ITimeframe } from './interfaces/ITimeframe'

interface ISystemStore {
  timeframes: ITimeframe[]
  selectedTimeframe: ITimeframe | null
}

export const useAppStore = defineStore('app', {
  state: (): ISystemStore => ({
    timeframes: [],
    selectedTimeframe: null
  }),
  getters: {
    getTimeframeOptions(state): any {
      return state.timeframes
    }
  },
  actions: {
    addNewTimeframe(description: string, start: Date, end: Date) {
      let newTf = {
        description: description,
        startDate: start,
        endDate: end,
        id: this.timeframes.length
      }
      this.timeframes.push(newTf)
    },
    setSelectedTimeframe(tf: ITimeframe) {
      this.selectedTimeframe = tf
      
    }
  },
  persist: {
    paths: {}
  }
})
