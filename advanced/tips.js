
const person = {
    name: "mehedy",
    age: 26
}

// const {name:myName} = person;
// console.log(myName)

function show ({name,age}){

    // const {name,age} = obj;

    console.log(`my name is ${name}. My age is ${age}`)
}

show(person)