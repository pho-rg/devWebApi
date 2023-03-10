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
    else if (unit === 1) {flag = 3}
    else if (myNum === 71 || myNum === 91) {flag = 4}
    //else if (71 < myNum < 77 || 91 < myNum < 97) {flag = 5}
    else {flag = 6}
    
    switch (flag) {
        case 1:
            return unite[myNum];
        case 2:
            return dizaine[diz];
        case 3:
            return myResult = dizaine[diz] + ' et ' + unite[1];
        case 4:
            return myResult = dizaine[diz-1] + ' et ' + unite[11];
        case 5:
            return myResult = dizaine[diz-1] +  unite[unit+10];
        case 6:
            return myResult = dizaine[diz] + ' ' + unite[unit];
        default:
            console.log('Out of bound');
            break;
    }
}

console.log('exo5');
console.log(verbeux(22));

//exo6
myObj = [
    {"nom": "Dumbo", "espece": "Eléphant", "age": 50},
    {"nom": "Booba", "espece": "Ours", "age": 8}
   ];

const myValue = (myTab, carac) => {
    let tabRes = [];
    let i = 0;
    for (let o in myTab) {
        tabRes[i] = myTab[o].keys(carac);
        i += 1;
    }
    return tabRes;
}

console.log('exo6')
console.log(myValue(myObj, "nom"));

//exo7
const myNum2 = [2, 4, 6, 3, 7, 5];

const triDesc = (myTab) => {
    return myTab.sort().reverse();
}

console.log('exo7');
console.log(triDesc(myNum2));