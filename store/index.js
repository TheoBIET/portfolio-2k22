const state = {
    isDarkMode: false,
}

const actions = {
}

const mutations = {
    toggleDarkMode(state) {
        state.isDarkMode = !state.isDarkMode
    }
}

export default {
    state,
    actions,
    mutations
}