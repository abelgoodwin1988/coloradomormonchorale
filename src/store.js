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
      // create array of fake data - actual API/REST call will happen here
      // currently creating a mock list of events - mock async behavior 250ms delay
      const mockData = new Array(5).fill(null)
        .map(() => {
          // get a complete date, break this up into day of week and time later
          const date = moment(faker.date.between('2018-08-01', '2018-12-01'))
            .tz('America/Denver'); // format as moment
          return {
            title: faker.lorem.words(3),
            calendarDate: date.format('dddd, MMMM DD, YYYY'), // example - Tuesday, October 02, 2018
            time: date.format('h:mm z'), // example 1:35 MDT
            imageURL: faker.image.dataUri(800, 600), // blank square since lorem pixel is quite slow
            // imageURL: faker.image.imageUrl(800, 600, 'abstract'),
            additionalInfo: faker.lorem.words(4), // Doors open 1/2 hour prior on current page
            featured: faker.random.boolean(),
          };
        });
      setTimeout(() => {
        commit('initState', mockData);
      }, 100);
    },
  },
});
