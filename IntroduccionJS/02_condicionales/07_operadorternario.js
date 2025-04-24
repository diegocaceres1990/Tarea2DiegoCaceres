/**               Operador ternario  ?
 * 
 * Siguiendo el espirítu de utilizar una sintaxis abreviada, podemos utilizar
 * un operador ternario para simplificar una declaración if...else.
 * 
 * Revisemos la declaración if ... else:
 */
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

//podemos utilizar un operador ternario para realizar la misma funcionalidad.

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

/*
En el ejemplo anterior:

*La condición, isNightTime, se proporciona antes de ?.
*Dos expresiones siguen a ? y están separadas por dos puntos :.
*Si la condición se evalúa como true, se ejecuta la primera expresión.
*Si la condición se evalúa como false, se ejecuta la segunda expresión.

Como la declaración if...else, el operador ternario se puede utilizar
para condiciones que evalúa true o false.
 */

//Refactoricemos las siguientes declaraciones if ... else

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

isLocked ?  console.log('You will need a key to open the door.') :
            console.log('You will not need a key to open the door.');



//Refectoriza la declaración if ... else
let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


//Refectoriza la declaración if ... else
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
favoritePhrase ==='Love That!' ? console.log('I love that!') : console.log("I don't love that!");