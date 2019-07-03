import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        user : null
    },
    mutations : {
		initUser (state,payload) {
			state.user = payload;
		}
	},
    actions : {},
	plugins : [VuexAlong]
})
