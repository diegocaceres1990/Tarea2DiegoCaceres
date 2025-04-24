/**                       Declaración if ... else           
 * 
 * 
 * La declaración if ... else nos permite ejecutar un bloque de código si 
 * la condición es verdadera y otro bloque de código si la condición es falsa.
 * 
 * La sintaxis de la declaración if ... else es la siguiente:
 * 
 * if (condición) {
 *  // Bloque de código si la condición es verdadera
 * }
 * else {
 *  // Bloque de código si la condición es falsa
 * } 
 */
let isRaining = true;
//isRaining = false;

if (isRaining) {
    console.log('No puedo salir a la calle porque está lloviendo');
} else {
    console.log('Puedo salir a la calle porque no está lloviendo');
}

/**Una declaración else debe ir acompañada de una declaración if, y
 * juntas se les denomina declaración if...else.
 * 
 * En el ejemplo anterior, la declaración else:
 * 
 * 1. Utiliza la palabra clave else seguida de un bloque de código,
 *    de una declaración if.
 * 2. Tiene un bloque de código que está envuelto por un conjunto de
 *    llaves { } 
 * 3. El código dentro del bloque de else se ejecuta si la condición
 *    dentro de la declaración if es falsa. 
 * 
 * (Declaración: En JavaScript, una declaración es una unidad de código que
 *               realiza una acción o tarea específica.)
 *  
 */
