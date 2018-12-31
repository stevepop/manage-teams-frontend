export const getters = {
  authenticated (state) {
    return state.loggedIn
  },
  user (state) {
    return state.user
  },

  manager (state) {
    if (state.user) {
      return state.user == 'manager'
    }
  }
}
