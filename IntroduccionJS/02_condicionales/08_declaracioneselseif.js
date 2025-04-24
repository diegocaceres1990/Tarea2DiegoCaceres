/**                   Declaraciones else if                     
 * 
 * Podemos agregar más condiciones a nuestras declaraciones if...else con
 * una declaración (En JavaScipt, una declaración es una unidad de código que
 * realiza una acción o tarea específica) else if.  La declaración else if
 * permite más de dos resultados posibles. Puedes añadir tantos else if
 * como quieras.
 * 
 * La declaración else if siempre va después de la declaración if y antes
 * de la declaración else.  La declaración else if también acepta una 
 * condición.
 * 
 * Veamos la sintaxis:
*/
let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

/**Las declaraciones else if te permiten tener múltiples resultados posibles.
 * Las declaraciones if/else if/else son leidas de arriba hacia abajo, 
 * por lo que la primera condición que se evalúa true (de arriba a abajo) 
 * es el bloque que se ejecuta.
 * 
 * En el anterior ejemplo anterior, dado que stopLight === 'red' se evalúa
 * como false y stopLight === 'yellow' se evalúa como true, se ejecuta el
 * código dentro de la primera instrucción else if.  El resto de las
 * condiciones no se evalúan.  Si nunguna de las condiciones se evaluara
 * como true, entonces se habría ejecutado el código en la instrucción else.
 */

let season = 'summer';

if ( season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');

}else {
  console.log('Invalid season.');
}
