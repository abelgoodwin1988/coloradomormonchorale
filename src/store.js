import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import moment from 'moment-timezone';

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
          const modifiedResponse = response.data.map((event) => {
            // use spread operator to create new object with modifed date storage
            const newEvent =
            {
              ...event,
              time: moment.tz(event.time, 'America/Denver').format('dddd, MMMM Do YYYY, h:mm:ss a z'),
            };
            return newEvent;
          });
          commit('initState', modifiedResponse);
        });
    },
  },
});
