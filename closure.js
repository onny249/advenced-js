//ekta kaj ke ber ber nah kore ekta function er moddhe kore ei function ta ke ber ber call kora..
//closure ki? kuno ekta function theke jodi onno kuno ekta function k call kori or return kori taile se ekta closed environment toiri kore.. and tara nijera ekta external variable er ekta reference rekhe dey ebong eitakei closure bole..
function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1()); // stopWatch() namok function ta ke clock1 variable e store korar karone clock1 o akn function hoye gese.
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock1());