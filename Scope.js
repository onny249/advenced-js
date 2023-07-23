let bonus = 2;//global variable

function sum(first, second){
    let result = first+second+bonus;
    if (result>19) {
        console.log("that's good");
    }
    else{
        console.log('not good');
    }
    return result;
}

const total = sum(5,6);
console.log(total);

//hoisting holo: kuno ekta scope er vitre var likhe kuno variable declare kora hoy tahole oi variable er declaretion ta ke oi scope er bahire giya ter parent j scope ase oikhane niye nibe.. var shudu declare part takei upore tene nibo.. jodi value declare er age run kora hoya tahole error dekhbe.

//interview question: 

function num(first, second){
    let result = first + second;
    if (result == 6) {
        var mood = 'Hello!';
        mood = 'It`s me';
        mood = 'Khadiza Chowdhury Onny';
        console.log(mood);
    } 
    console.log(day);
    var day = 'friday';
    return result;
}

const add = num(2,4);
console.log(add);


