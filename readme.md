# devWebApi Course

> Notes cours de Developpement web et API - B2 ESGI

pré-requis : nodejs nodejs.org et git git.com

let permet de reaffecter

js tres permissif -> changement de type accepte (evalue au runtime)

js pas mathématiquement pécis & difficulté a differencier int & float

site de docs: developper mdn

autre manière de définir les fonctions :

fonction flechee :
const greet = (param) => console.log('hello' + param)

const greet = (param) => {
    return console.log('helloe + param)
}

() => {}  //suffit à définir une fonction en js
le mot clef return est implicite dans les fonctions flechees (sauf acolades)

une année ; une certification

##sread operator
const myobject = {
    name: 'doe', firstname: 'john', age: 45
}

Const anotherobject = { ...myobject, name: 'alphonse'}

se documenter sur le spread operator '...'

construction et test de regex : www.regexpal.com

inline function : fonction anonyme

exemple de sort((a, b) => b - a)
a=12
b=4
b-a = -8
b-a <0 donc a bef b ; 12 av 4

a=2
b=6
b-a = 4
b-a >0 donc b bef a ; 6 av 2