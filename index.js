console.log('hello there')
var myVar = 'hello there'; //declarer une variable -> prohibé et remplacer par let

/*commentaire
multi-ligne */

//variables

const test = 'une constante'; //reaffectation impossible

let age = 30; //reaffectation possible

age = 'trente'; //changement de type

let myString = 'text';

let anotherString = `allow apostrophe ' and multiple line
string`;

//concatenation

let nom = 'Jean'; let prenom = 'Antony'; let nomComplet = nom + ' ' + prenom; //concat

let myConcat = '';

myConcat = myString.concat('test', 'yolo'); //fail, a verifier
console.log(myConcat);

let myTexte = 'tester la longueur';
let myLongueur = myTexte.lenght;

//tableaux

let monTableau = []; //tableau

monTableau[0] = 'texte1';

const myArray = ['here', 'we', 'go'];

console.log('myArray: ', myArray);

//methode splice

const deletedElement = myArray.splice(1, 2); //retourne les elements (ici 2) qu il supprime,

console.log('deletedElement: ', deletedElement);
console.log('myArray: ', myArray);

myArray.splice(1,0, 'I am') //insertion
console.log('myArray: ', myArray);

//do while execute au moins une fois

//boucle for
for (let i=0; i < myArray.lenght ; index++) {
    const element = myArray[i];
    console.log(element);
} //fail

//V2
for (const value of myArray) {
    console.log(value)
}

//objets
const myObject = {
    name: 'test',
    lastname: 'test2',
    age: 0
}

//boucle for in
for (const key in myObject) {
    if (Object.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        console.log(element)
    }
}

