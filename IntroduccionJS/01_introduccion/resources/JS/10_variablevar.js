/**        Crear una variable: var         
 * 
 * Se introdujeron muchos cambios en la versión de ECMAScript 6, incluyendo
 * la introducción de dos nuevas palabras clave para declarar variables:
 * let y const.  Estas dos palabras clave son muy similares a var, pero
 * tienen algunas diferencias clave.
 * 
 * La palabra clave var se ha utilizado para declarar variables en JavaScript
 * desde el principio.  Sin embargo, var tiene algunos problemas que se han
 * solucionado con let y const.
 * 
 * A pesar de los problemas con var, es importante comprender cómo funciona
 * var, ya que es posible que veas código que lo utiliza.
 * 
 * Antes de ES6, var era la única forma de declarar variables en JavaScript.
 */

var myName = 'Henry';
console.log(myName); //Imprime 'Henry'

/**Explicaremos el ejemplo anterior:
 * 1. Utilizamos la palabra clave var para declarar una variable llamada myName.
 * 2. myName es el nombre de la variable. La capitalización de esta manera
 *    es una convención de codificación llamada camelCase.  En camelCase, el
 *    primer nombre de la variable comienza con una letra minúscula y cada
 *    palabra adicional en el nombre de la variable comienza con una letra
 *    mayúscula.  No se utilizan espacios. 
 * 3. Utilizamos el signo igual = para asignar un valor a la variable. =
 *    se llama operador de asignación. Asigna el valor a la derecha del
 *    operador al nombre de la variable a la izquierda.  El valor de la cadena
 *    'Henry' se almacena en la variable myName. La cadena 'Henry' se
 *    imprime en la consola haciendo referencia al nombre de la variable.
 *    console.log(myName); //Imprime 'Henry'
 * 
 * Existen algunas reglas para nombrar variables en JavaScript:
 * 1. Los nombres de las variables pueden contener letras, dígitos, guiones
 *   bajos y signos de dólar.
 * 2. Los nombres de las variables no pueden comenzar con un dígito.
 * 3. Los nombres de las variables distinguen entre mayúsculas y minúsculas,
 *    por lo que myName y myname son diferentes.  Es una mala práctica crear
 *    dos variables que tengan el mismo nombre con diferente capitalización.
 * 4. Los nombres de las variables no pueden ser iguales a las palabras clave.
 *    Las palabras clave son palabras que están incorporadas en el lenguaje
 *    JavaScript y tienen un significado especial.  Por ejemplo, var es una
 *    palabra clave que se utiliza para declarar variables.  No puedes usar
 *    var como nombre de variable.
 *    Para obtener una lista completa de palabras clave, visita:
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
 * 
 */
var comidaFavorita = 'culotte';
var numeroDeFiletes = 2;
console.log(comidaFavorita); //Imprime 'culotte'
console.log(numeroDeFiletes); //Imprime 2



