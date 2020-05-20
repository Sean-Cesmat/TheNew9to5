export const state = () => ({
    isMobile: false,
    isNavOpen: false,
    performers: [],
    workWeeks: [],
})
export const mutations = {
    updateIsMobile(state, bool) {
        state.isMobile = bool
    },
    updateIsNavOpen(state, bool) {
        state.isNavOpen = bool
    },
    updatePerformers: (state, performers) => {
        state.performers = performers
    },
    updateWorkWeeks: (state, workWeeks) => {
        state.workWeeks = workWeeks
    },
}
export const actions = {
    updateIsMobile({ commit }, payload) {
        commit('updateIsMobile', payload)
    },
    updateIsNavOpen({ commit }, payload) {
        commit('updateIsNavOpen', payload)
    },
    async getPerformers({ state, commit }) {
        if (state.performers.length) return
        try {
            const performers = await fetch(`http://9to5cockpit.seancesmat.com/api/collections/get/performers`).then((res) => res.json())
            commit('updatePerformers', performers.entries)
        } catch (err) {
            // eslint-disable-next-line
            console.log(err)
        }
    },
    async getWorkWeeks({ state, commit }) {
        if (state.workWeeks.length) return
        try {
            const workWeeks = await fetch(`http://9to5cockpit.seancesmat.com/api/collections/get/workWeeks`).then((res) => res.json())
            commit('updateWorkWeeks', workWeeks.entries)
        } catch (err) {
            // eslint-disable-next-line
            console.log(err)
        }
    },
}
export const getters = {}
