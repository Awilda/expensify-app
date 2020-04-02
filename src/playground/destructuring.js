//
// OBJECT DESTRUCTURING
//

// const person = {
// 	name: 'Awilda',
// 	age: 30,
// 	location: {
// 		city: 'New York City',
// 		temp: 49
// 	}
// };

// // const name = person.name;
// // const age = person.age;
// const { name, age } = person;
// console.log(`${name} is ${age}`);


// // Using default value if no value is provided
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);


// // const { city, temp } = person.location;
// // console.log(`It's ${temp} degrees in ${city}`);

// // renaming a variable
// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} degrees in ${city}`);


const book = {
	title: 'The Starless Sea',
	author: 'Erin Morgenstern',
	publisher: {
		name: 'Doubleday'
	}
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // if no valid name, use Self-Published


//
// ARRAY DESTRUCTURING
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;


// // You can define what you need to use
// // const [, city, state] = address;
// // const [, , state] = address;


// // Default value
// // const [ , , state='New York'] = address;

// console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [menuItem, smallPrice, mediumPrice, largePrice] = item;

console.log(`A medium ${menuItem} costs ${mediumPrice}`);