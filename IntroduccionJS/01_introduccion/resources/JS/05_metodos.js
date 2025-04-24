/**            MÉTODOS
 * 
 * Recuerda que los métodos son funciones que están asociadas a objetos.
 * Son acciones que podemos realizar en los objetos.  Los tipos de datos
 * tienen acceso a métodos específicos que nos permiten manejar y manipular
 * instancias de esos tipos de datos.  JavaScriptproporciona una serie de 
 * métodos de strings que nos permiten manipular strings.
 * 
 * Llamamos a un método utilizando el operador de punto (.) 
 * seguido del nombre del método y paréntesis.
 * 
 * Ejemplo de sintanxis:
 * 'cualquier string'.nombreDelMetodo().
 */
console.log('Hola'.toUpperCase()); //Imprime HOLA
console.log('Hola'.toLowerCase()); //Imprime hola
console.log('Hola'.startsWith('H')); //Imprime true
console.log('Hola'.startsWith('h')); //Imprime false
console.log('Hola'.endsWith('a')); //Imprime true
console.log('Hola'.endsWith('A')); //Imprime false
console.log('Hola'.repeat(3)); //Imprime HolaHolaHola
console.log('Hola'.replace('o', 'i')); //Imprime Hila
console.log('Hola'.slice(1, 3)); //Imprime ol
console.log('Hola'.slice(2)); //Imprime la
console.log('Hola'.indexOf('l')); //Imprime 2
console.log('Hola'.indexOf('a')); //Imprime 3
console.log('Hola'.indexOf('x')); //Imprime -1, no la encuentra
console.log('         Elimina espacios en blanco     '.trim()); //imprime Elimina espacios en blanco

/**Puedes encontrar una lista de métodos de cada cadena
 * integrados en:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String
 */
