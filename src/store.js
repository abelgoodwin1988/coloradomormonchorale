import Vue from 'vue';
import Vuex from 'vuex';
// import faker from 'faker';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
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
    initState(state, payload) {
      state.events = payload;
    },
  },
  actions: {
  },
});
