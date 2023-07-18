const numbers = [3, 4, 5, 2, 7, 6, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

// function square(element) {
//     return element * element;
// }

const result= numbers.map(function(element){
  
 return element * element;
})
console.log(result);
// console.log(output);


//easy way
const array = [3,4,5,6,7,8,9];
const resultB = array.map(x => x*x);
console.log(resultB);


const resultC = array.filter(x => x>5);
console.log(resultC);

const resultD =  array.filter(x => x%2==0 );
console.log(resultD);

const resultE =  array.find(x => x%2==0 ); 
// find shudu ekta value output dibe.
console.log(resultE);