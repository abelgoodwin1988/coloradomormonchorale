// const mockData = new Array(5).fill(null)
//         .map(() => {
//           // get a complete date, break this up into day of week and time later
//           const date = moment(faker.date.between('2018-08-01', '2018-12-01'))
//             .tz('America/Denver'); // format as moment
//           return {
//             title: faker.lorem.words(3),
//             calendarDate: date.format('dddd, MMMM DD, YYYY'), // example - Tuesday, October 02, 2018
//             time: date.format('h:mm z'), // example 1:35 MDT
//             imageURL: faker.image.dataUri(800, 600), // blank square since lorem pixel is quite slow
//             // imageURL: faker.image.imageUrl(800, 600, 'abstract'),
//             additionalInfo: faker.lorem.words(4), // Doors open 1/2 hour prior on current page
//             featured: faker.random.boolean(), // determine if included in carousel
//             address: {
//               venue: faker.lorem.words(4),
//               street: `${faker.address.streetAddress()}  ${faker.address.streetSuffix()}`, // template string
//               city: faker.address.city(),
//               state: faker.address.stateAbbr(),
//               zipCode: faker.address.zipCode(),
//             },
//           };
//         });