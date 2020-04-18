export const state = () => ({
    isMobile: false,
    isNavOpen: false,
})
export const mutations = {
    updateIsMobile(state, bool) {
        state.isMobile = bool
    },
    updateIsNavOpen(state, bool) {
        state.isMobile = bool
    },
}
export const actions = {
    updateIsMobile({ commit }, payload) {
        commit('updateIsMobile', payload)
    },
    updateIsNavOpen({ commit }, payload) {
        commit('updateIsNavOpen', payload)
    },
}
export const getters = {}
