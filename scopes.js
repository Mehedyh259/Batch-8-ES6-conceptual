// const x = 5;



// {
//     console.log(x)
// }

// var , let, const

// let & const are block scoped 
// var is functional scoped

// block scope
// {
//     let x = 5; 
//     x++;
//     console.log("inside block: ",x)
// }
// console.log("outside block: ",x)


// {
//     var x = 5;
//     x++;
//     console.log("inside block: ", x)
// }
// console.log("outside block: ", x)

// function show(){
//     var x = 5;
//     y = 10;
// }
// show();
// console.log(y)
// console.log(x)

const x = 5;

{
    const x = 10;
    console.log('inside block: ',x)
}
console.log("outside block: ",x)




