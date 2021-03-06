import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        state: {
            currentUser: null,
            loginStatus: true,
            notification: {
                status: false,
                message: ""
            }
        },
        mutations: {
            setUser(state, payload) {
                state.currentUser = payload
            },
            login(state, payload) {
                state.loginStatus = payload
            },
            setNotice(state, payload) {
                state.notification = payload
            }
        },
        actions: {
        }
    })
}

export default store