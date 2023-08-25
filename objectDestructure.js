const person = { name: 'mehedy', age: 26, address: 'Rajshahi' }

// const name = person.name;

const {age,...rest} = person;
console.log(rest)
