const array = new Array(100).fill().map((x, index) => index + 1);
const random = Math.floor(Math.random() * 100);

function searcNumber(array, random) { 
    //let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === random) {
        i++;
        return i;
        }
    }
    return i;
}

console.log(array);
console.log(" NumberRandom :", random);
const result = searcNumber(array, random);
console.log("result :", result);