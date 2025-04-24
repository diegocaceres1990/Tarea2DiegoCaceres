/**               Crear una variable let
 * 
 * La palabra clave let se introdujo en ECMAScript 6.  La palabra clave let
 * permite a los desarrolladores declarar variables que son limitadas a
 * un ámbito de bloque, de instrucción o de expresión.  La palabra clave
 * let funciona de manera muy similar a var, pero tiene algunas diferencias
 * clave.
 * 
 * La palabra clave let no permite que la variable sea redeclarada en el mismo
 * ámbito.  La palabra clave var permite que la variable sea redeclarada en el
 * mismo ámbito. 
 * 
 * La palabra clave indica que se puede reasignar un valor diferente a la misma
 * variable. 
 */
let miNombre = 'Henry';
console.log(miNombre); //Imprime 'Henry'
miNombre = 'Joel';
console.log(miNombre); //Imprime 'Joel'

/**Otro concepto que debemos tener en cuenta al utilizar let (e incluso var)
 * es que podemos declarar una variable sin asignarle un valor.  Esto se llama
 * inicializar una variable.  Cuando inicializamos una variable, no le asignamos
 * un valor.  En JavaScript, cuando declaramos una variable sin inicializarla,
 * su valor es undefined. Undefined es un valor especial en JavaScript que
 * representa la ausencia de un valor.  Es un valor que se asigna automáticamente
 * a las variables que no tienen un valor asignado.  Undefined significa que
 * una variable ha sido declarada, pero no inicializada. Undefined significa
 * que un valor determinado no existe.
 */
let price;
console.log(price); //Imprime undefined
price = 350;
console.log(price); //Imprime 350

/**Explicaremos el ejemplo anterior:
 * 1. Utilizamos la palabra clave let para declarar una variable llamada
 *    price, automáticamente se le asigna el valor undefined.
 * 2. Podemos asignar un valor a la variable price en cualquier momento.
 */
let changeMe = true;
console.log(changeMe);
changeMe = false;
console.log(changeMe);