/**             La palabra clave switch             
 * 
 * Las declaraciones else if son una gran herramienta si neesitamos comprobar
 * múltiples condiciones.  En programación,a menudo nosencontramos con la
 * necesidad de comprobar múltiples valores y manejar cada uno de ellos en
 * forma diferente.
 * 
 *Por ejemplo:
 */
 let groceryItem = 'papaya';

 if (groceryItem === 'tomato') {
   console.log('Tomatoes are $0.49');
 } else if (groceryItem === 'papaya'){
   console.log('Papayas are $1.29');
 } else {
   console.log('Invalid item');
 }

 /*
 En el código anterior, tenemos una serie de condiciones que comprueban 
 si un valor coincide con una groceryItemvariable. 
 Nuestro código funciona bien, pero ¡imagínate si tuviéramos que comprobar 
 100 valores diferentes! ¡Tener que escribir tantas else ifdeclaraciones 
 parece una molestia!
 
 La declaración switch proporciona una sintaxis alternativa que es más fácil
 de leer y escribir.  Una declaración switch se ve así:
 */
 let groceryItemS = 'papaya';

 switch (groceryItemS) {
   case 'tomato':
     console.log('Tomatoes are $0.49');
     break;
   case 'lime':
     console.log('Limes are $1.49');
     break;
   case 'papaya':
     console.log('Papayas are $1.29');
     break;
   default:
     console.log('Invalid item');
     break;
 }
 
 // Prints 'Papayas are $1.29'
 
 /*
 *La palabra clave switch inicia la declaración y va seguida de ( ... ), 
  que contiene el valor que cada una casecomparará. 
  En el ejemplo, el valor o la expresión de la switchdeclaración es 
  groceryItem.

 *Dentro del bloque { ... }, hay múltiples cases. La palabra clave case 
  verifica si la expresión coincide con el valor especificado que viene 
  después de ella. El valor que sigue al primero case es 'tomato'. 
  Si el valor de es groceryItemigual a 'tomato', se ejecutará el case
  con su console.log().
 
 *El valor de groceryItemes 'papaya', por lo que el tercer  case en 
  ejecución Papayas are $1.29 se registra en la consola.
 
 *La palabra clave break le indica a la computadora que salga del bloque y 
  que no ejecute más código ni verifique ningún otro caso dentro del bloque
  de código. Nota: Sin palabras clave break, se ejecutará el primer caso 
  coincidente, pero también lo harán todos los casos subsiguientes, 
  independientemente de si coinciden o no, incluido el predeterminado. 
  Este comportamiento es diferente de las declaraciones condicionales 
  if/ else que ejecutan solo un bloque de código.

 *Al final de cada switchenunciado, hay una defaultsentencia. 
  Si ninguna de las sentencias es verdadera, se ejecutará caseel código de 
  la sentencia default.

*/

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place' :
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}