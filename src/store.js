import Vue from 'vue';
import Vuex from 'vuex';
import faker from 'faker';
import moment from 'moment-timezone'; // both moment and moment-timezone are installed

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
    },
  },
});
