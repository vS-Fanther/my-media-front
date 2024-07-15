import { createStore } from 'vuex'
import API from "@/api";

const store = createStore({
  state: {
    token: null,
    userId: null,
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null;
    },
    getToken(state) {
      return state.token;
    },
    getUserId(state) {
      return state.userId;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserId(state, userId) {
      state.userId = userId;
    }
  },
  actions: {
    async login({commit}, data) {
      try {
        const response = await API.post('user/login', {
          email: data.email,
          password: data.password
        });
        commit('setToken', response.data.data.token);
        commit('setUserId', response.data.data.id);
      } catch (e) {
        console.log(e);
      }
    }
  },
})

export default store;