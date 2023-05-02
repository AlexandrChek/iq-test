import {createStore} from 'vuex'

export default createStore({
    state:{
        visibleTestHead: false,
        iqTestHeader: true
    },
    mutations:{
        showTestHead(state) {
            state.visibleTestHead = true
            state.iqTestHeader = true
        },
        hideTestHead(state) {
            state.visibleTestHead = false
        }
    }
})