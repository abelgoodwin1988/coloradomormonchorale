import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [], // an array of events that will eventually be retrieved from a database
    // event: {
    //   // break date up into date, day of week, time
    //   title: faker.lorem.words(3),
    //   date: faker.date.between('2018-08-01', '2018-12-01'), // returns a javascript Date
    //   imageURL: faker.image.imageUrl(),
    //   additionalInfo: faker.lorem.words(4),
    //   featured: faker.random.boolean(),
    // },
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
    initState({ commit }, payload) {
      // currently creating a mock list of events - mock async behavior 250ms delay
      setTimeout(() => {
        commit('initState', payload);
      }, 250);
    },
  },
});
