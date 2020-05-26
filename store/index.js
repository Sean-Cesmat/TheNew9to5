export const state = () => ({
    isMobile: false,
    isNavOpen: false,
    performers: null,
    workWeeks: null,
    aboutPage: null,
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
    updateAboutPage: (state, aboutPage) => {
        state.aboutPage = aboutPage
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
        if (state.performers !== null) return
        try {
            const performers = await fetch(`http://9to5cockpit.seancesmat.com/api/collections/get/performers`).then((res) => res.json())
            commit('updatePerformers', performers.entries)
        } catch (err) {
            // eslint-disable-next-line
            console.log(err)
        }
    },
    async getWorkWeeks({ state, commit }) {
        if (state.workWeeks !== null) return
        try {
            let workWeeks = await fetch(`http://9to5cockpit.seancesmat.com/api/collections/get/workWeeks`).then((res) => res.json())
            workWeeks = workWeeks.entries.filter((el) => el.Published === true)
            commit('updateWorkWeeks', workWeeks)
        } catch (err) {
            // eslint-disable-next-line
            console.log(err)
        }
    },
    async getAboutPage({ state, commit }) {
        if (state.aboutPage !== null) return
        try {
            const aboutPage = await fetch(`http://9to5cockpit.seancesmat.com/api/singletons/get/AboutPage`).then((res) => res.json())
            commit('updateAboutPage', aboutPage)
        } catch (err) {
            // eslint-disable-next-line
            console.log(err)
        }
    },
}
export const getters = {}
