/**               Operadores Aritméticos           
 * 
 * La aritmética básica es una parte fundamental de la programación.
 * 
 * Un  operador es un carácter que realiza una acción sobre uno o más 
 * valores. Realizan una tares en nuestro código.
 * JavaScript tiene varios operadores aritméticos integrados que
 * nos permiten realizar cálculos matemáticos en nuestros números..
 * 
 * Entre ellos se incluyen los siguientes:
 * 1. Suma (+): Suma dos números.
 * 2. Resta (-): Resta dos números.
 * 3. Multiplicación (*): Multiplica dos números.
 * 4. División (/): Divide dos números.
 * 5. Módulo (%): Devuelve el resto de una división.
 * 6. Incremento (++): Incrementa en uno un número.
 * 7. Decremento (--): Decrementa en uno un número.
 * 
 * Los primeros cuatro operadores son los más comunes y los que usaremos
 * a continuación
 */
console.log(3 +4); //Imprime 7  
console.log(5 - 1); //Imprime 4
console.log(4 * 2); //Imprime 8
console.log(9 / 3); //Imprime 3

/**Tenga en cuenta que cuando la computadora evalúa console.log()
 * esta evalúa la expresión dentro de los paréntesis y luego imprime el
 * resultado en la consola, si quisieramos imprimir los caracteres
 * 3 + 4, tendríamos que ponerlos entre comillas.
  */

/** El operador resto (módulo) %, devuelve el número que queda después
 * de que el número de la izquierda se divide por el número de la derecha.
 * 5%2 devuelve 1, porque 2 cabe en 5 dos veces, dejando 1 como resto.
 * 6%2 devuelve 0, porque 2 cabe en 6 tres veces, dejando 0 como resto.
 * 7%2 devuelve 1, porque 2 cabe en 7 tres veces, dejando 1 como resto.
 * 
 * 5%3 devuelve 2, porque 3 cabe en 5 una vez, dejando 2 como resto.
 * 6%3 devuelve 0, porque 3 cabe en 6 dos veces, dejando 0 como resto.
 * 7%3 devuelve 1, porque 3 cabe en 7 dos veces, dejando 1 como resto.
 */

console.log(5 % 2); //Imprime 1
console.log(6 % 2); //Imprime 0
console.log(7 % 2); //Imprime 1

console.log(5 % 3); //Imprime 2
console.log(6 % 3); //Imprime 0
console.log(7 % 3); //Imprime 1