/**                  Asignación de truthy y falsy 
 * 
 * ¡Las evaluaciones verdadera y falsas abreb un mundo de posibilidades 
 * abreviadas!
 * 
 * Digamos que tienes un sitio web y quieres tomar el nombre de usuario de
 * un usuario para crear un saludo personalizado.  A veces, el usuario no
 * tiene una cuenta, lo que hace que la variable username sea false.
 * Elcódigo siguiente comprueba si username está definida y asigna 
 * una cadena predeterminada si no lo está:
 * 
*/
let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

/**Si combinas tus conociminetos de lógica de operadores.  Puedes usar una
 * abreviatura del código anterior.  En una condición booleana, JavaScript
 * asigna el valor verdadero a una variable si usas el operador || en tu 
 * asignación: 
 */
let username1 = '';
let defaultName1 = username1 || 'Stranger';

console.log(defaultName1); // Prints: Stranger

/**Esto es debido a que el operador || o las declaraciones primero
 * verifican la condición de la izquierda.  a la variable defaultName se le
 * asignara el valor de 'Stranger' si username es falsa.
 * Este concepto también se le conoce como evaluación de cortocircuito.
 */

let tool = ''; //después cambia el valor a 'marker'

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen' ;

console.log(`The ${writingUtensil} is mightier than the sword.`);