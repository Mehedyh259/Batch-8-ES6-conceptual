// const person = { name: 'mehedy', age: 26, address: 'Rajshahi' }

// // dot notation, bracket notation

// console.log(person.age)
// console.log(person["age"])
// const propertyName = "age"
// console.log(person[propertyName])

const complexObject = {
    id: 1,
    name: "Main Object",
    info: {
        description: "This is a complex nested object.",
        author: {
            firstName: "John",
            lastName: "Doe"
        }
    },
    data: {
        values: [10, 20, 30],
        settings: {
            isEnabled: true,
            maxItems: 5
        }
    }
};
// name, description, lastName, last element of values, maxItems
console.log("name: ", complexObject.name )
console.log("description: ", complexObject.info.description)
console.log("lastName: ", complexObject.info.author.lastName)
console.log("last value: ", complexObject.data.values[2])
console.log("last value: ", complexObject.data.values[complexObject.data.values.length - 1])
// max item home work