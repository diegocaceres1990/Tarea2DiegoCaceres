/**           El operador de incremento y decremento      
 * 
 * JavaScript tiene dos operadores especiales que se pueden escribir junto a una
 * variable para aumentar o disminuir su valor en uno.  Estos operadores son:
 * 1. ++: Incremento.
 * 2. --: Decremento.
 * 
 * Estos operadores son útiles cuando queremos aumentar o disminuir el valor de
 * una variable en uno.  Por ejemplo, podemos usar el operador de incremento para
 * aumentar el valor de una variable en uno.  O podemos usar el operador de
 * decremento para disminuir el valor de una variable en uno.
 */
let a = 5;
a++;
console.log(a); //Imprime 6

let b = 3;
b--;
console.log(b); //Imprime 2

/**Al iguaal que los operadores de asignación matemética anteriore (+=,
 * -=, *=, /=, %=), los operadores de incremento y decremento se pueden 
 * escribir de dos formas:
 * 1. Prefijo: ++variable, --variable.
 * 2. Sufijo: variable++, variable--.
 * */
gainedDollar = 5;
let gainedDollarIncrement = ++gainedDollar;
console.log(gainedDollarIncrement); //Imprime 6

let gainedDollar2 = 5;
let gainedDollarIncrement2 = gainedDollar2++;
console.log(gainedDollarIncrement2); //Imprime 5
console.log(gainedDollar2); //Imprime 6
/**En el primer ejemplo, incrementamos la variable gaineDollar en uno y luego
 * asignamos el resultado a la variable gaineDollarIncrement.  El resultado es 6.
 * 
 * En el segundo ejemplo, asignamos la variable gaineDollar2 a la variable
 * gaineDollarIncrement2 y luego incrementamos la variable gaineDollar2 en uno.
 * El resultado es 5.  La variable gaineDollar2 es 6.
 */

lostDollar = 50;
let lostDollarDecrement = --lostDollar;
console.log(lostDollarDecrement); //Imprime 49
console.log(lostDollar); //Imprime 49

let lostDollar2 = 50;
let lostDollarDecrement2 = lostDollar2--;
console.log(lostDollarDecrement2); //Imprime 50
console.log(lostDollar2); //Imprime 49

