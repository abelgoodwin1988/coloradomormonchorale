import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    events: [], // an array of events that will eventually be retrieved from a database
  },
  mutations: {
    // set state.events to payload from action
    // this may take more than events data in the future
    // should contain data to be loaded before page creation
    // this is public data that doens't require authorization
    initState(state, payload) {
      state.events = payload;
    },
  },
  actions: {
    initState({ commit }) {
      axios.get('/events')
        .then((response) => {
          commit('initState', response.data);
        });
    },
  },
});
