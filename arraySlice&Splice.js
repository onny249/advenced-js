const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,6);//[index bole dite hobe]..slice holo array theke index alada kore..kintu main array theke index remove kore nah.
// splice holo array theke index delete kore..kintu eita main array thekeo index delete kore.. akn amra j jayga theke index remove korsi oi jaygay chailei onno kuno value inject korte pari..jemon:
const remove = nums.splice(2,3,77);
// console.log(add);
console.log(remove);
console.log(nums);
console.log(part);

const together = nums.join(",0");
console.log(together);


