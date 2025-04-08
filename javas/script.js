//comm one ln
/*++ line*/

/*var syntax
var namevar;
let namevar;
const PI=3.14159;*/

/*
var nombre= 'm8'
let apellido='r8'

console.log(nombre);
console.log(apellido);

var nombre='eve';
console.log(nombre);

let nameSth; (camel case)
*/



//data types js
/*
number--> numeric
   let nr = 2;
   let nr2 = 3.1489;

string--> char chain
   let chain = 'Sir D3 CaRacatErE';
   let chain2 = "sir x2";
   let chain3 = `sir x3`;

boolean--> true/false
   let boolean = true;
   
null--> no val

undefined--> sin definir
   let sinDef

object--> obj


let alumno{
   'name':'ley',
   'name2':'ley',
   'hobby':'andy'
   }
*/

let nr = 10;
console.log("nr var" + "en" + typeof nr);
console.log("sth=" + nr);

let boolean = true;
console.log(typeof boolean);

let cadena;

let alumno = {
    'name':'ley',
    'name2':'ley',
    'hobby':'andy',
    }

console.log(typeof alumno);


/*operators*/

/**
 * assignment= assigns a val
    = assigns val
    +=
    -=
    *=
    /=
    %=
 * arithmetic
 * suma
 * subtraction
 * multiplication
 * division
 * modulo %
 */


    let nr1 = 10;
    let nr2 = 5;

    console.log(nr1 + nr2);
    console.log(nr1 % nr2);
    console.log(nr1 / nr2);


/*compaaration

    equal ==
    strict eqquwal ===
    distinct !=
    strict distintct !==
    bigger >
    eq biger >=
    smaller <
    eq sm <=

*/
    

    console.log(nr1 == nr2);
    nr1 = 10;
    cadena = '10';
    console.log(nr1 == cadena); //true
    console.log(nr1 === cadena); //false



/* concatenation 

    linkin (park) 2 strings syn

    "Hola" + "world"
    "hola world"
*/
    
/* ternary op

    needs 3 ops & 1 cond op
    syn
      condition? val 1 : val 2;
      true-> returns val 1
      false-> returns val 2
*/

console.log(nr1 == nr2? "r equal" : "r nor equal");
//r not equal


/*conditionales
    if...else

      syn : 
        if (cond){
                  sth sth sth
                 } else {
                        sth else sth else sth else
                      }
    false val:
        false
        undefined
        null
        0
        NaN
        '' empty string
*/



/*

switch ... case

   syn: switch (exp){
                    case val1:
                        return val1
                        break;

                    case val 2:
                        return val2
                        break;

                    case val3:
                        return val 3
                        break;

                    dedfault: 
                        returns def val
                        break;
                    }

if (cond1){
           code} else if (cond2){code2} else if (cond3){code3} else if (cond4){code4} else {default code}
*/

name2='r8';

switch(name2){
    case 'ua':
     console.log("sdfghj");
     break;
    case 'r8':
     console.log("DECAY");
     break;
    default:
     console.log('uhisefyghsbfbhje');
}

/*loops

for syn

for(let i=0; i<0; i++){
    rep 10 times
}


while syn

while(cond){
    block
}


do ... while syn

do{
    block
}while(cond)
*/



/*functions
syn

function nameFunc (opt parameters){
    block
    return opt
}
*/

function aritmeticOp(operator, val1, val2){
    if (operator === '*'){
       return val1 * val2;
    } else if (operator === '+'){
       return val1 + val2;
    } else if (operator === '-'){
        return val1 - val2;
    } else if (operator === '/'){
        return val1 / val2;
    }
}

let result = 0;
result= aritmeticOp ('*', nr1, nr2);
console.log("result= " + result);

result= aritmeticOp ('+', nr1, nr2);
console.log("result= " + result);

result= aritmeticOp ('-', nr1, nr2);
console.log("result= " + result);

result= aritmeticOp ('/', nr1, nr2);
console.log("result= " + result);



/*arrays / lists*/

let frutas = ['banana', 'blueberry', 'applw'];

console.log(typeof frutas);

/*
objects
*/

console.log(frutas[0]);

//how to go through the elem of the list
frutas.forEach(element=> {
    console.log(element);
})

//add an elem to the list
frutas.push('kiwi');
console.log(frutas);

//removes last elem
frutas.pop();
console.log(frutas);

//adds at the beninnging
frutas.unshift('kiwi', 'strawberry');
console.log(frutas);

//how many elem
console.log(frutas.length);

/*obj programation*/
//create obj data
let persona = new Object();
let coche = {};

persona = {
    'name':'m8',
    'age':'13',
    'profession':'multidimensional navigator assistant',
    'mommy': function(){
          console.log('eve?sof?selene????')
    }
}


console.log(persona);

//how to acces obj data
console.log(persona.nombre);
console.log(persona ['age']);

//adding properties
persona.origin = 'nEx GeN corporati0n';
console.log(persona);

persona.mommy();


/*CLASES
//improve hierarchy
vehicle factory-->audi, A8, A6, A5;

syn
   class nameClass{
         constructor(parameters){
            this.parameter1 = argument;
            this.parameter2 = argument;
            ...
            }
   }

*/

class mAssistant {
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;  //properties
    }

    hablar(){
        console.log(`greetings meatbag! ${this.nombre}, i am your personal multidimensional assistant:3 ${this.color} is me color`);
    }

    mover(){
        console.log(`${this.nombre} AscEnDinG t0 yOut0Pia`)
    }
}

let m8 = new mAssistant('m8', 'lATt3???');
m8.hablar();
m8.mover();

let r8 = new mAssistant('r8', 'oUtl4St???????');
r8.hablar();
r8.mover();

 



/*

//inheritance in POO
class AI extends mAssistant {
    ascend(){
        console.log(`${this.nombre}, saving hUmAnkiNd `);
    }
}

let EvE = new AI ('EvE', 'black');

AI.hablar(); 
AI.ascend();

*/






/*func callback*/
function saludar (nombre){
    console.log(`45c3NdiNg, ${nombre}`);
}

function inombre(callback){
    let nombre = prompt("fu: ")
    callback(nombre);
}

inombre(saludar)