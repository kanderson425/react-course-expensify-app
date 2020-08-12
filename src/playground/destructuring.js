// OBJECT DESTRUCTURING

// const person = {
//     name: 'Kyle',
//     age: 26,
//     location: {
//         city: 'Austin',
//         temp: 100
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


// ARRAY DESTTRUCTURING
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
