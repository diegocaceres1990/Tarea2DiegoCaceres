/**          Concatenación de cadenas con variables
 * 
 * Podemos concatenar cadenas con variables.  En el siguiente ejemplo,
 * concatenamos la cadena 'Hola' con la variable miNombre.  La variable
 * miNombre contiene la cadena 'Henry'.  La concatenación de 'Hola' y
 * miNombre imprime 'Hola Henry'. La concatenación de cadenas con
 * variables es muy útil cuando queremos mostrar información dinámica
 * en nuestro código.
 * 
 * Observemos que en el primer console.log() hay un espacio entre las
 * comillas y la variable miNombre.  Si no hubiera un espacio entre las
 * comillas y la variable miNombre, las dos cadenas se imprimirían juntas
 * 
 * Al igual que las matemáticas, la concatenación de cadenas se realiza
 * de izquierda a derecha.  Siempre se agrega la cadena de la derecha
 * a la cadena de la izquierda.
 */
let miNombre = 'Henry';
console.log('Hola ' + miNombre); //Imprime 'Hola Henry'
console.log('Hola' + miNombre); //Imprime 'HolaHenry'
console.log('Hola ' + miNombre + '!'); //Imprime 'Hola Henry!'
console.log('Hola, ' + miNombre + ', ¿cómo estás?'); //Imprime 'Hola, Henry, ¿cómo estás?'

let favoriteAnimal = 'gato';
console.log('Mi animal favorito es el ' + favoriteAnimal); //Imprime 'Mi animal favorito es el gato'
