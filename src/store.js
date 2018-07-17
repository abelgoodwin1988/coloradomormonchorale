import Vue from 'vue';
import Vuex from 'vuex';
import faker from 'faker';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: {
      title: 'The event title',
      date: faker.date.between('2018-08-01', '2018-12-01'),
      imageURL: faker.image.imageUrl(),
      additionalInfo: 'Additional info',
      featured: faker.random.boolean(),
    },
  },
  mutations: {

  },
  actions: {

  },
});
