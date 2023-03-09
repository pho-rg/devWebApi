//premiere serie d exercices

//exo1
const myTab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let value of myTab) {
    //console.log(value);
}

//exo2
const myWeek = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
//console.log(myWeek[0]);

//exo3
const myPair = [2, 4, 6, 8, 10];
let mySum = 0;
for (let i=0; i < myPair.length ; i++) {
    mySum += myPair[i];
}
console.log(mySum);

//exo4
const myFruit = ['pomme', 'abricot', 'poire', 'raisin', 'cocombre'];
myFruit.splice(5,0, 'cerise');
console.log(myFruit);

//exo5
const myMark = [12, 14, 16, 18, 10];
mySum = 0;
for (let i=0; i < myMark.length ; i++) {
    mySum += myMark[i];
}
let myMean = mySum/(myMark.length);
console.log(myMean);

//exo6
const myBird = ['Merle', 'Pie', 'moineau', 'pivert'];
console.log(myBird.includes("Pie"));

//exo7
const myCountry = ['Mexico', 'Australia', 'Austria', 'USA'];
myCountry.sort();
console.log(myCountry);

//exo8
const myMonth = ['jan', 'feb', 'march', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
console.log(myMonth[2]);

//exo9
const myNum = [2, 8, 7, 3, 9];
console.log(Math.min(...myNum));
console.log(Math.max(...myNum));

//exo10
const myPhrase = ['here is a phrase', 'here another', 'one more'];
let maxWord = '';
let maxLength = 0;
for (const value of myPhrase) {
    if (value.length > maxLength) {
        maxLength = value.length;
        maxWord = value;
    }
}
console.log(maxWord);