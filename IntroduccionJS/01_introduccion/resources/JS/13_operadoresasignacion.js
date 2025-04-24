/**           OPERADORES DE ASIGNACIÓN MATEMÁTICA 
 * 
 * 
 * Los operadores de asignación matemática son operadores que realizan
 * una operación aritmética y luego asignan el resultado a la variable.
 * 
 * Consideremoscómo poedemos utilizar variables y operadores matemáticos
 * para calcular nuevos valores y asignarlos a una variable.
*/
let x = 4;
x = x + 2;
console.log(x); //Imprime 6

/**En el ejemplo anterior, asignamos el valor 4 a la variable x. Luego, usamos
 * el operador de suma (+) para sumar 2 a x. Finalmente, asignamos el resultado
 * de la suma a la variable x. El resultado es 6.
 * 
 * JavaScript proporciona una forma más corta de hacer esto. Podemos usar
 * un operador de asignación matemática para realizar la operación y asignar
 * el resultado a la variable en un solo paso.
 */
let y = 4;
y += 2;
console.log(y); //Imprime 6
/**El operador += es un operador de asignación matemática. Realiza la operación
 * de suma y asigna el resultado a la variable. La expresión y += 2 es equivalente
 * a y = y + 2. Ambas expresiones suman 2 a y y asignan el resultado a y.
 */

/**Los operadores de asignación matemática son:
 * 1. +=: Suma y asigna.
 * 2. -=: Resta y asigna.
 * 3. *=: Multiplica y asigna.
 * 4. /=: Divide y asigna.
 * 5. %=: Calcula el resto y asigna.
 */

let a = 3;
a += 4;
console.log(a); //Imprime 7

let b = 5;
b -= 2;
console.log(b); //Imprime 3

let c = 4;
c *= 2;
console.log(c); //Imprime 8

let d = 9;
d /= 3;
console.log(d); //Imprime 3

let e = 5;
e %= 2;
console.log(e); //Imprime 1

let f = 6;
f **= 2;
console.log(f); //Imprime 36

//Ejemplos
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
console.log(levelUp); //Imprime 15

powerLevel -= 100;
console.log(powerLevel); //Imprime 8901

multiplyMe *= 11;
console.log(multiplyMe); //Imprime 352

quarterMe /= 4;
console.log(quarterMe); //Imprime 288