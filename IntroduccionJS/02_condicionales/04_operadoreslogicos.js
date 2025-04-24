/**                       Operadores Lógicos               
 * 
 * Los operadores lógicos se utilizan para combinar dos o más expresiones
 * lógicas.
 * 
 * El trabajo con condicionales implica el uso de valores booleanos, es decir,
 * true o false. Los operadores lógicos nos permiten combinar estos valores
 * booleanos para obtener un resultado.
 * 
 * En , hay operadores que funcionan con valores booleanos conocidos
 * como operadores lógicos.  Podemos utilizar operadores lógicos para agregar
 * una lógica más sofisticada a nuestros condicionales.
 * 
 * Los operadores lógicos son:
 * 1. el operador y (&&)
 * 2. el operador o (||)
 * 3. el operador not, tambien conocido como operador bang(!)
 * 
 * Cuando utilizamos el operador &&, estamos comprobando que se cumplen
 * dos cosas true:
 */
let stopLight = 'green';
let pedestrians = 0;

if(stopLight === 'green' && pedestrians === 0) {
    console.log('Go');
} else {
    console.log('Stop');
}

/**Al utilizar el operador &&, ambas condiciones deben evaluarse como
 * true para que toda la condición se evalúe como true y se ejecute. De lo
 * contrario, si alguna de las condiciones es false, la condición && se
 * evaluará como false y el bloque else se ejecutará.
 * 
 * 
 * Si solo nos importa que alguna de las condiciones sea true, podemos usar
 * el operador ||:
 */
let day = 'Monday';
//let day = 'Saturday';
if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else {
    console.log('Do some work.');
  }

  /**Al utilizar el operadaor ||, solo una de las condiciones debe evaluarse
   * como true para que la declaración general evalúe como true.
   * En el ejemplo del código anterior, si day === 'Saturday' o day === 'Sunday'
   * se evalúa como, la condición if se evaluará como true y su bloque de
   * código se ejecutara.  Si la primera condición en una declaración || se
   * evalúa como true, la segunda condición ni siquera se rerificará.  Solo
   * evaluará day === 'Saturday' si el resultado es false entonces se evaluará
   * day === 'Sunday'.  El código en la declaración else anterior se ejecutará
   * solo si ambas comparaciones se evaluán como false.
   * 
   */
  
/**El operador ! not, invierte o niega el valor de un valor booleano: */

let despertar = true;
console.log(!despertar); //print false

let dormir = false;
console.log(!sleepy);

/*
Básicamente, el !operador tomará un truevalor y lo pasará de vuelta 
false, o tomará un falsevalor y lo pasará de vuelta true.

Los operadores lógicos se utilizan a menudo en condicionales.
Vista previa: Descripción del enlace de carga de documentos
declaraciones
para agregar otra capa de lógica a nuestro código. 
*/

