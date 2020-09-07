export default {
    state: {
        menu: [],
        currentMenu: {}
    },
    mutations: {
        selectMenu(state, val) {
            val.name !== 'home' ? (state.currentMenu = val) : (state.currentMenu = {});
        }
    },
    actions: {}
};
