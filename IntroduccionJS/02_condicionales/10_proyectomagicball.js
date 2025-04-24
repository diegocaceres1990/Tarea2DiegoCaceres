/**              Proyecto de Bola mágica 8            
 * 
 * Has aprendido a utilizar una heramienta muy poderosa den JavaScript,
 * el control de flujo! La usaremos para predecir el futuro.
 * 
 * En este proyecto construiremos una Bola Mágica Ocho usando flujo de control
 * en Javacript.
 * 
 * El usuario podrá ingresar una pregunta y luego nuestro programa generará
 * un resultado aleatorio.
 * 
 * 
 */

// Solicitar al usuario que ingrese un número
let userName = prompt("Por favor, Ingresa tu nombre:");
let userQuestion = prompt("Por favor, su pregunta:");



// 1. Definir una variable llamada userName que se establece en una cadena vacía.
//let userName = "";
// 2. Crear una expresión ternaria para decidir qué hacer si el usuario ingresa un nombre o no.
userName ? console.log(`Hola, ${userName}`): console.log("Hola!");

// 3. Crear una variable llamada userQuestion.
//let userQuestion ="¿Me convertire en un desarrollador exitoso?";

// 4. Escribir una declaración console.log() para el usuario userQuestion.
console.log(`${userName ? userName : "Usuario"} pregunto: ${userQuestion}`);
// 5. Generar un número aleatorio entre 0 y 7.
let randomNumber = Math.floor(Math.random() * 8);
// 6. Crear una variable más llamada eightBall y configurarla como una cadena vacía.
let eightBall = "";
// 7. Crear un flujo de control que asigne una respuesta a eightBall según el valor de randomNumber.
switch(randomNumber){
  case 0:
    eightBall = "Eso es seguro";
    break;
  case 1:
    eightBall = "Es decididamente si";
    break;
  case 2:
    eightBall = "Es brumosos, intenta de nuevo";
    break;
  case 3:
    eightBall = "No puedo predecirlo ahora";
    break;
  case 4:
    eightBall = "No cuentes con eso";
    break;
  case 5:
    eightBall = "Mis fuentes dicen que no";
    break;
   case 6:
    eightBall = "Tienes buenas posibilidades";
    break;
  case 7:
    eightBall = "Las señales dicen que si";
    break;
}
// 8. Escribir a console.log() para imprimir la respuesta de la Bola Mágica Ocho.
console.log(`The Magic Eight Ball says: ${eightBall}`);
