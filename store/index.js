export const state = () => ({
    posts: [],
    pages: [],
    isMobile: false,
    isNavOpen: false,
})
export const mutations = {
    updatePosts: (state, posts) => {
        state.posts = posts
    },
    updatePages: (state, pages) => {
        state.pages = pages
    },
    updateIsMobile(state, bool) {
        state.isMobile = bool
    },
    updateIsNavOpen(state, bool) {
        state.isNavOpen = bool
    },
}
export const actions = {
    async getPosts({ state, commit }) {
        if (state.posts.length) return
        try {
            let posts = await fetch(`https://thenew9to5.seancesmat.com/index.php?rest_route=/wp/v2/posts`).then((res) => res.json())
            posts = posts
                .filter((el) => el.status === 'publish')
                .map(({ id, slug, title, excerpt, date, tags, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    tags,
                    content,
                }))
            commit('updatePosts', posts)
        } catch (err) {
            // eslint-disable-next-line
            console.log(err)
        }
    },
    async getPages({ state, commit }) {
        if (state.pages.length) return
        try {
            let pages = await fetch(`https://thenew9to5.seancesmat.com/index.php?rest_route=/wp/v2/pages`).then((res) => res.json())
            pages = pages
                .filter((el) => el.status === 'publish')
                .map(({ id, slug, title, acf, date, content }) => ({
                    id,
                    slug,
                    title,
                    acf,
                    date,
                    content,
                }))
            commit('updatePages', pages)
        } catch (err) {
            // eslint-disable-next-line
            console.log(err)
        }
    },
    updateIsMobile({ commit }, payload) {
        commit('updateIsMobile', payload)
    },
    updateIsNavOpen({ commit }, payload) {
        commit('updateIsNavOpen', payload)
    },
}
export const getters = {}
