console.log('hello there')
var myVar = 'hello there'; //declarer une variable -> prohibé et remplacer par let

/*commentaire
multi-ligne */

const test = 'une constante'; //reaffectation impossible

let age = 30; //reaffectation possible

age = 'trente'; //changement de type

let myString = 'text';

let anotherString = `allow apostrophe ' and multiple line
string`;

let nom = 'Jean'; let prenom = 'Antony'; let nomComplet = nom + ' ' + prenom; //concat

let myConcat = '';

myConcat = myString.concat('test', 'yolo'); //fail, a verifier
console.log(myConcat);

let mytexte = 'tester la longueur';
let myLongueur = myLongueur.lenght;

