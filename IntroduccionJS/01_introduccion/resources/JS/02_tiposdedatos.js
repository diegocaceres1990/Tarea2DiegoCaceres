/**
 * 
 *                     Tipos de datos en JavaScript
 * 
 * 
 * Los tipos de datosson clasificaciones que damos a los diferentes tipos de
 * valores que podemos tener en JavaScript.  Los tipos de datos nos permiten
 * identificar y trabajar con los valores de diferentes maneras.
 * 
 * En JavaScript, los tipos de datos se dividen en dos categorías: 
 * primitivos y compuestos.
 * 
 * Los tipos de datos primitivos son los valores más básicos que podemos 
 * tener.  Son inmutables, lo que significa que una vez que se han creado,
 * no se pueden cambiar.
 * 
 * En JavaScript, los tipos de datos fundamentales son:
 * 1. Números:
 *   - Enteros: 1, 2, 3, 4, 5
 *   - Decimales: 1.5, 3.14, 0.5
 *   - Negativos: -1, -2, -3
 * 
 * 2. Strings: Cualquier texto que esté entre comillas simples '' o dobles "",
 *             es cualquier agrupación de caracteres del teclado(letras,
 *             números, símbolos, espacios,etc.).  A algunas personas
 *             les gusta pensar en los strings como una palabra elegante
 *            para referirse al texto.
 *            
 * 3. Booleanos: Son valores que pueden ser verdaderos (true) o falsos(false).
 *                En JavaScript los booleanos son muy importantes porque nos 
 *                permiten tomar decisiones en nuestro código.
 *                Es útil pensar en los valores booleanos como interruptores
 *                que pueden estar encendidos (true) o apagados (false).
 *
 * 4. BigInt: Es un tipo de dato que nos permite trabajar con números 
 *            enteros muy grandes.  Los números enteros en JavaScript
 *            tienen un límite de tamaño, pero con BigInt podemos trabajar
 *            con números enteros mucho más grandes.
 *            Cualquier número entero seguido de la letra n es un BigInt.
 *            Rango: 2^53 - 1 y -2^53 + 1.
 * 
 * 5. Nulo: Es un valor especial en JavaScript que representa la ausencia intencional 
 *          de un valor.  Es un valor que se puede asignar a una variable
 *          para indicar que no hay nada en ella. 
 *          Se representan mediante la palabra clave null (sin comillas).
 * 
 * 6. Undefined: Es un valor especial en JavaScript que representa la ausencia
 *               de un valor.  Es un valor que se asigna automáticamente a las
 *               variables que no tienen un valor asignado.
 *               Se representa mediante la palabra clave undefined (sin comillas).
 *               Undefined significa que una variable ha sido declarada, pero
 *               no inicializada.
 *               Undefined significa que un valor determinado no existe.
 * 
 * 7. Symbol: Es un tipo de dato que se utiliza para crear identificadores
 *           únicos para objetos.  Los símbolos son valores primitivos y 
 *           se crean utilizando la función Symbol(). Los símbolos son
 *           inmutables y únicos. Útiles en codificaciones más avanzadas.
 *           No se utilizan con frecuencia. No hay necesidad de preocuparse
 *           por ellos ahora.
 * 
 * 8. Object: Colecciones de datos relacionados.
 * 
 * Los primeros 7 de esos tipos se consideran tipos de datos primitivos.  Son
 * los tipos de datos más básicos del lenguaje.  Los objects son más complejos
 * y aprenderemos mucho más sobre ellos a medida que avancemos en JavaScript.
 * 
 * Al principio, ocho tipos de datos pueden no parecer tantos, pero
 * pronto observará que el mundo se abre a las posibilidades una vez que 
 * comencemos a aprovechas cada uno de ellos.  A medida que aprendamos
 * más sobre los objetos, podrá crear colecciones complejas de datos.
 * 
 * 
 *   */

//Esta es una string
console.log("Esto entre comillas es una string!","tiene 6 palabras",
    "lo anterior, también es una string aunque tenga un 6");
//Esta es un número
console.log(42);
//Esta es un booleano
console.log(true);
console.log(false);
//Esta es un BigInt
console.log(9007199254740991n);
//Esta es un null
console.log(null);
//Esta es un undefined
console.log(undefined);
//Esta es un symbol
console.log(Symbol('Hola'));
//Esta es un objeto
console.log({nombre: 'Juan', apellido: 'Pérez'});
