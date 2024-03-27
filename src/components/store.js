import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        access_token: null,
      },
      mutations: {
        setToken(state, token) {
          state.access_token = token;
        },
      },
});