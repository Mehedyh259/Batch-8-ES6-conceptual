const arr = [3,4,5,6,7,8,9];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a,b,c, ...rest] = arr //[3,4,5,6,7,8,9]
console.log(a)
console.log(b)
console.log(c)
console.log(rest)