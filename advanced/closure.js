
const outerFunction = () => {
    let count = 0;
    const inner = () => {
        count++;
        console.log("count: ",count)
    }
    return inner;
}

// // normal function
// const fun = () => {
//     let count = 0;
//     count++;
//     console.log("count: ",count)
// }
// fun()
// fun()

const x1 = outerFunction();
const x2 = outerFunction();
x1()
x1()
x2()
x2()
x2()