/**           Operadores de Comparación          
 * 
 * Los operadores de comparación se utilizan para comparar dos valores.
 * 
 * En JavaScript, los operadores de comparación se utilizan para evaluar
 * expresiones lógicas.
 * 
 * Los operadores de comparación son los siguientes:
 *  1. Igual (==): Compara si dos valores son iguales.
 *  2. No igual (!=): Compara si dos valores no son iguales.
 *  3. Estrictamente igual (===): Compara si dos valores son iguales y
 *      del mismo tipo.
 *  4. Estrictamente no igual (!==): Compara si dos valores no son iguales
 *      y/o no son del mismo tipo.
 *  5. Mayor que (>): Compara si el valor de la izquierda es mayor que el
 *      valor de la derecha.
 *  6. Menor que (<): Compara si el valor de la izquierda es menor que el
 *      valor de la derecha.
 *  7. Mayor o igual que (>=): Compara si el valor de la izquierda es mayor
 *      o igual que el valor de la derecha.
 *  8. Menor o igual que (<=): Compara si el valor de la izquierda es menor
 *      o igual que el valor de la derecha.
 * 
 * Los operadores de comparación devuelven un valor booleano, es decir,
 * verdadero o falso.
 * 
 * 
 * Ejemplos:
 */
console.log(3 == 3); //Imprime true
console.log(3 == 4); //Imprime false
console.log(3 != 4); //Imprime true
console.log(3 != 3); //Imprime false
console.log(3 === 3); //Imprime true
console.log(3 === '3'); //Imprime false
console.log(3 !== '3'); //Imprime true


console.log(3 > 2); //Imprime true
console.log(3 < 2); //Imprime false
console.log(3 >= 3); //Imprime true
console.log(3 <= 2); //Imprime false

/**También podemos utilizar operadores de comparación en diferentes
 * tipos de datos como cadenas de texto (stings).
 */
'apples' === 'oranges' // false
'apples' !== 'oranges' // true
'apples' === 'apples' // true
'apples' !== 'apples' // false
'apples' < 'oranges' // true
'apples' > 'oranges' // false
'apples' <= 'oranges' // true
'apples' >= 'oranges' // false

/**Todas las afirmaciones de comparación se evaluán como true o false
 * y se componen de:
 * 1. Un operador de comparación (==, !=, ===, !==, >, <, >=, <=)
 * 2. Dos valores que se comparan.
 */

let hungerLevel = 7
if(hungerLevel > 7){
  console.log('Time to eat!')
} else{
  console.log('We can eat later!')
}

/**
 * Operdor es: 
 * Un operador es un carácter especial o una serie de caracteres 
 * que realizan una tarea en JavaScript.
 */