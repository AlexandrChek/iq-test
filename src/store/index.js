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
            sessionStorage.setItem('testHead', 1)
        },
        hideTestHead(state) {
            state.visibleTestHead = false
            sessionStorage.removeItem('testHead')
        }
    }
})