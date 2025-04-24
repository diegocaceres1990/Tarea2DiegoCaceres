/**                       El operador typeof             
 * 
 * El operador typeof devuelve una cadena que indica el tipo de un operando. 
 * 
 * Al escribir código, puede se útil realizar un seguimineto de los tipos de 
 * datos de las variables en su programa.  Si necesita comprobar el tipo
 * de dato de una variable, puede utilizar el operador typeof.
 * 
 * El operador typeof comprueba el valor a su derecha y devuelve, o pasa
 * una cadena del tipo de dato.  Por ejemplo, si el valor a la derecha
 * es un string, el operador typeof devolverá 'string'.  Si el valor a la
 * derecha es un número, el operador typeof devolverá 'number'.
 * 
 * 
*/

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean


let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);// Output: string

newVariable = 1
console.log(typeof newVariable);// Output: number

