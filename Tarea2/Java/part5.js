let userName = prompt("Por favor, ingresa tu nombre:");
let userAge = prompt("Por favor, ingresa tu edad:");
let userCity = prompt("Por favor, ingresa tu ciudad:");
let hourRegister = prompt("Registro (Mañana/Medio día)");
let raceNumber;

if (userAge > 18){
    raceNumber = Math.floor((Math.random() * 1000) + 1000);
    console.log(raceNumber);
}else {
    raceNumber = Math.floor(Math.random() * 1000);
}

console.log(`Nombre: ${userName}`);
console.log(`Edad: ${userAge}`);
console.log(`Ciudad: ${userCity}`);

if(userAge < 18 && hourRegister === 'Mañana'){
    console.log(`El corredor: ${userName} con el número ${raceNumber}  
participará a las 9:30 AM`);
} else if(hourRegister === 'Medio día' && userAge > 18){
    console.log(`El corredor: ${userName} con el número ${raceNumber}  
participará a las 11:00 AM`);
} else {
    console.log('El registro no ha sido correcto')
}