//deuxieme serie d exercice ; fonctions

//exo1
function mySum(num1, num2) {
    return num1 + num2;
}

console.log('exo1');
console.log(mySum(2,4));

//exo2
const myNum = [2, 4, 6, 3, 7, 12, 5];
function isMax(myTab) {
    return Math.max(...myTab);
}

console.log('exo2');
console.log(isMax(myNum));

//exo3
const myChar = 'etcaetera';
const remVoy = (charIn) => {
    return charIn.replace(/[aeiouy]/gi, ''); //regex
}

const noVoy = remVoy(myChar);

console.log('exo3');
console.log(noVoy);

//exo4
const myChar2 = 'etcaetera';
const triAlph = (charIn) => {
    return charIn.split("").sort().join("");
}

console.log('exo4');
console.log(triAlph(myChar2));

//exo5
const dizaine = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
const unite  = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];

const verbeux = (myNum) => {
    let flag = 0;
    const unit = myNum%10;
    const diz = ((myNum - unit)/10) -1;
    if (myNum < 17) {flag = 1} 
    else if (unit === 0) {flag = 2}

    switch (flag) {
        case 1:
            return unite[myNum];
            break;
        case 2:
            return dizaine[diz];
            break;
        default:
            console.log('Out of bound');
    }
    // if (myNum < 10) {
        
    // } else {
    //     const unit = myNum%10;
    //     const diz = ((myNum - unit)/10) -1;
    //     let result = dizaine[diz];
    //     result += ' ' + unite[unit];
    //     return result;
    // }
}

console.log('exo5');
console.log(verbeux(13));

//exo6
