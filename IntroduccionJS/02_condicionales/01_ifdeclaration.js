/**                            Declaración if   
 * 
 * (Una declaración es : una instrucción que realiza una acción)  
 *           
 * La declaración if es una de las estructuras de control más utilizadas en 
 * programación.
 * Nos permite ejecutar un bloque de código si una condición es verdadera.
 * 
 * A menudo realizamos una tarea en función de una condición. 
 * Por ejemplo, si hoy hace buen tiempo, saldremos a la calle. 
 * Si suena el despertador, lo apagaremos. Si estamos cansados, 
 * nos iremos a dormir.
 * 
 * La sintaxis de la declaración if es la siguiente:
 * 
 * if (condición) {
 *   // Bloque de código
 * }
 * 
 * if (true) {
 *  console.log('La condición es verdadera');//se imprime en consola
 * }
 * 
 * Observe que en el ejemplo anterior tenemos una declración if que se 
 * compone de lo siguiente:
 * 
 * 1. La palabra clave if, seguida de un paréntesis de apertura () y que 
 *    es seguido por un bloque de código, o declaración de bloque,
 *    indicado por un conjunto de llaves {}.
 * 2. Dentro de los paréntesis, tenemos una condición que evalúa 
 *    a true o false.
 * 3. Si la condición es verdadera, el bloque de código dentro de las llaves
 *    se ejecuta.
 * 4. Si la condición es falsa, el bloque de código no se ejecuta.
 */
let isRaining = true;
//isRaining = false;

if (isRaining) {
    console.log('No puedo salir a la calle porque está lloviendo');
    }

document.getElementById('checkWeather').addEventListener('click', function() {
    const isSunny = confirm("¿Está soleado hoy?");

    const weatherResult = document.getElementById('weatherResult');
    if (isSunny) {
        weatherResult.innerHTML = `
            <img src="./resources/images/soleado.jpeg" alt="Soleado">
            <p>¡Sal a pasear!</p>
        `;
    } else {
        weatherResult.innerHTML = `
            <img src="./resources/images/lluvia.jpeg" alt="Lluvioso">
            <p>Debes usar paraguas.</p>
        `;
    }
});


