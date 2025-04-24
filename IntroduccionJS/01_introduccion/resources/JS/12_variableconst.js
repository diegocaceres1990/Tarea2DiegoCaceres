/**                Crear una variable: const        
 * 
 * La palabra clave const se introdujo en ECMAScript 6.  La palabra clave const
 * se utiliza para declarar variables que no pueden ser reasignadas.  Las
 * variables declaradas con la palabra clave const deben ser asignadas con un
 * valor al momento de la declaración.  Si intentamos reasignar una variable
 * constante, obtendremos un error.
 * 
 * Al igual que let, const también tiene un ámbito de bloque.  Las variables
 * declaradas con const también son inmutables, lo que significa que no pueden
 * ser reasignadas.
 * 
 * Al igual que let y var, const puede almacenar cualquier tipo de datos, como
 * strings, números, booleanos, objetos y arreglos. La forma de declarar
 * una variable const es la siguiente:
 */
const myName = 'Henry';
console.log(myName); //Imprime 'Henry'
// myName = 'Joel';
// console.log(myName); //Error: Assignment to constant variable.

/**Explicaremos el ejemplo anterior:
    * 1. Utilizamos la palabra clave const para declarar una variable llamada
    *    myName y le asignamos el valor 'Henry'.
    * 2. Intentamos reasignar un valor diferente a la variable myName.  Sin
    *    embargo, obtenemos un error porque las variables declaradas con la
    *    palabra clave const no pueden ser reasignadas.
    * 
    * Es importante recordar que las variables declaradas con const no pueden
    * ser reasignadas, pero los objetos y arreglos que contienen pueden ser
    * modificados.  Esto significa que si una variable constante contiene un
    * objeto o un arreglo, el objeto o el arreglo pueden ser modificados, pero
    * la variable constante no puede ser reasignada.
    * 
    * Si declaramos una variable con const no podremos reasignarlo
    * porque es constante, obtendremos un TypeError: Assignment to constant
    * variable. 
    * 
    * Cuando declaramos una variable con const, debemos asignarle un valor
    * al momento de la declaración.  Si no asignamos un valor a la variable
    * constante, obtendremos un SyntaxError: Missing initializer in const.
    * 
    * Si intenta decidir entre let y const, considere si la variable que está
    * declarando necesita ser reasignada.  Si la variable no necesita ser
    * reasignada, use const.  Si la variable necesita ser reasignada, use let. 
    */
const entree = 'Enchiladas';
console.log(entree); //Imprime 'Enchiladas'
// entree = 'Tacos';
// console.log(entree); //Error: Assignment to constant variable.
