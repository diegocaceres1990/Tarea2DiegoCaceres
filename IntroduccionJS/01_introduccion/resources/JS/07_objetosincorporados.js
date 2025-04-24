/**               OBJETOS INCORPORADOS              
 * 
 * 
 * Ademas de console, hay otros objetos incorporados en JavaScript que 
 * proporcionan funcionalidades útiles.  Por ejemplo, el objeto Math
 * proporciona propiedades y métodos para realizar operaciones matemáticas.
 *  
 * Más adelante, aprenderemos a crear nuestros propios objetos, pero por
 * ahora, nos centraremos en los objetos incorporados.
 * 
 * Para acceder a una propiedad o método de un objeto incorporado, utilizamos
 * el operador de punto (.) seguido del nombre de la propiedad o método.
 * 
 * Si desea realizar operciones matemáticas, puede acceder a la propiedad
 * o método del objeto Math.
 * 
 * Lo bueno de los objetos es que tienen métodos.
 * 
 * Llamemos al método .ramdom() desde el objeto Math:
 */
console.log(Math.random())//Imprime un número aleatorio entre 0 y 1

/**En el ejemplo anterior, llamamos al método .random() agregando
 * el operador de punto (.) al objeto Math.  El método .random()
 * devuelve un número aleatorio entre 0 (incluido) y 1(excluido).
 * 
 * Para generar un número aleatorio entre 0 y 10, podemos multiplicar
 * el número aleatorio por 10.
 */
 console.log(Math.random() * 10); //Imprime un número aleatorio entre 0 y 10
 
 /**El ejemplo anterior probablemente de como resultado un decimal.
  * Para redondear el número, podemos usar el método .floor(), este método
  * redondea un número hacia abajo al entero más cercano.
  */
console.log(Math.floor(Math.random() * 10)); //Imprime un número aleatorio entre 0 y 10
console.log(Math.ceil(Math.random() * 10)); //Imprime un número aleatorio entre 0 y 10
console.log(Math.round(Math.random() * 10)); //Imprime un número aleatorio entre 0 y 10

console.log(Math.min(1, 3, 5, 7, 9)); //Imprime 1
console.log(Math.max(1, 3, 5, 7, 9)); //Imprime 9
console.log(Math.PI); //Imprime 3.141592653589793
console.log(Math.E); //Imprime 2.718281828459045
console.log(Math.sqrt(64)); //Imprime 8

console.log(Number.isInteger(42)); //Imprime true
console.log(Number.isInteger(42.5)); //Imprime false
console.log(Number.isInteger('Hola'));
console.log(Number.isInteger('42'));
console.log(Number.isInteger(42n));
console.log(Number.isInteger(42.0));

console.log(typeof(42n)); //Imprime bigint