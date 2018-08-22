const faker = require('faker');

module.exports = () => {
  const data = { events: [] };
  // Create 1000 users
  for (let i = 0; i < 100; i += 1) {
    data.events.push({
      id: i,
      title: faker.lorem.words(3),
      imageURL: 'https://via.placeholder.com/400x300',
      mapUrl: 'https://www.maps.google.com',
      time: faker.date.future(1),
      otherInfo: faker.random.words(),
      featured: faker.random.boolean(),
      address: {
        location: faker.random.words(),
        street1: faker.address.streetAddress(),
        street2: faker.address.secondaryAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode('#####'),
      },
    });
  }
  return data;
};
