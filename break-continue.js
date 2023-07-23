const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] > 3) {

        break;

    }
    console.log(nums[i]);

}
console.log('Here is 2 different code continue and break');
const number = [1, -2, 3, -4, 5, -6, 7, -8, 9];
for (let i = 0; i < number.length; i++) {
    
    if (number[i] < 0) {

        continue;
    }
    console.log(number[i]);

}


