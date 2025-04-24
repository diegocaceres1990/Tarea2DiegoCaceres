/**                      Truthy and Falsy 
 * 
 * Consideremos como los tipos de datos no booleanos, como los strings
 * o numericos, son evaluados cuando se comprueban dentro de una condición.
 * 
 * A veces, querrás comprobar si exite una variable y no necesariamente
 * querrás que sea igual a un valorespecífico: solo comprobarás si se le
 * ha asignado un valor a la variable.
 * 
 * Ejemplo: 
 */ 
let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

/** EL bloque de código en la declaración if se ejecutará porque myVariable
 * tiene un valor verdadero; aunque el valor de myVariable no sea explícitamente
 * el valor true, cuando se usa en un contexto booleano o condicional, se
 * evalúa como true porque se le ha asignado un valor no falso.
 * 
 * Entonces, ¿Qué valores son falsos o se evaluán como falsos cuando se 
 * los verifica como condición? La lista de valores falsos incluye:
 *  -- 0
 *  -- cadenas vacías como ""  o ''
 *  -- null, que representa cuando no hay ningún valor absoluto
 *  -- undefined, que representan cuando una variable declarada carece de valor
 *  -- NaN, o no es un número, Not A Number
 */

//Ejemplo con números:
let numberOfApples = 0;
if(numberOfApples){
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
}
//Prints 'No apples left!'

/* La condición se evalúa como false porque el valor de numberOfApples es
   0.  Como 0 es un valor falso, el bloque else se ejecutará en la declaración*/
   
   let wordCount = 0;//cambia e valor a un número

   if (wordCount) {
     console.log("Great! You've started your work!");
   } else {
     console.log('Better get to work!');
   }
   
   
   let favoritePhrase = 'Hello World!'; //Cambia el valor a vacío
   
   if (favoritePhrase) {
     console.log("This string doesn't seem to be empty.");
   } else {
     console.log('This string is definitely empty.');
   }  