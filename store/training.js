export const state = () => ({
  traininigSchedules: [],
  traininigSchedule: {},
})

export const getters = {
  traininigSchedules (state) {
    return state.traininigSchedules
  },

  traininigSchedule (state) {
    return state.traininigSchedule
  }
}

export const mutations = {
  setTrainingSchedules (state, traininigSchedules) {
   state.traininigSchedules = traininigSchedules
  },
  setTrainingSchedule (state, traininigSchedule) {
    state.traininigSchedule = traininigSchedule
  },
  removeSchedule (state, traininigSchedule) {
    state.traininigSchedules.splice(state.traininigSchedules.indexOf(traininigSchedule), 1)
  }
}

export const actions = {
  async getTrainingSchedules ({ commit }) {
    const { data: { traininigSchedules } } = await this.$axios.get(`/trainings`)
  
    commit('setTrainingSchedules', traininigSchedules)
  },

  async deleteTrainingSchedule ({state, commit}, params) {
    try {
      await this.$axios.delete(`/trainings/${params.id}`)
      const scheduleDeleted = state.traininigSchedules.findIndex(t => t.id === params.id)
      commit('removeSchedule', scheduleDeleted)
      
    } catch(error) {
      throw new Error('Unable to delete training with ID ' + params.id)
    }
  }
}

