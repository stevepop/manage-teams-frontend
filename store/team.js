export const state = () => ({
  teamList: [],
  selectedPlayers: [],
  matches: [],
  matchReports: [],
  matchReport: {},
  match: {},
  player: {},
  showReport: false
})

export const getters = {
  players (state) {
    return state.teamList
  },

  selectedPlayers (state) {
    return state.selectedPlayers
  },
  matchReports (state) {
    return state.matchReports
  },
  matchReport (state) {
    return state.matchReport
  },

  matches (state) {
    return state.matches
  },

  player (state) {
    return state.player
  },

  match (state) {
    return state.match
  },
  showReport (state) {
    return state.showReport
  }
}

export const mutations = {
  setTeamList (state, teamList) {
   state.teamList = teamList
  },
  updateSelectedPlayers (state, selectedPlayer) {
    let playerExists = state.selectedPlayers.find(player => {
      return player._id.toString() === selectedPlayer._id.toString()
    })

    if (playerExists) {
      state.selectedPlayers.splice(state.selectedPlayers.indexOf(selectedPlayer), 1)
    } else {
      state.selectedPlayers.push(selectedPlayer)
    }
  },
  setSelectedPlayers (state, selectedPlayers) {
    state.selectedPlayers = selectedPlayers
  },
  setPlayer (state, player) {
    state.player = player
  },
  setMatches (state, matches) {
    state.matches = matches
  },
  setMatch (state, match) {
    state.match = match
  },
  setMatchReports (state, matchReports) {
    state.matchReports = matchReports
  },
  setMatchReport (state, matchReport) {
    state.matchReport = matchReport
  },
  setShowReport (state, showReport) {
    state.showReport = showReport
  }
}

export const actions = {
  async getPlayers ({ state, commit }) {
    const { data: {players} } = await this.$axios.get(`/players`)
    commit('setTeamList', players)
  }
}
