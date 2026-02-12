//si de condicion
/*let ususrio = "Andres"
if(udusrio=== "Diego"){
    alert("el usuario es " + usuario)
}

let username === "Diego"&& userLastname === "Huasaya"){
 alert("el usuario es " + Username)
} else{
    alert("el usuario")

}
alert ("el usuario es ${username} {")
let userLastname=*/
// escribe un programa que pida un número al usuario y que identifique si es positivo, negativo o cero
/* 
 escribe un programa que verfique la mayoria de edad del usuario. El usuario ingresará su año de nacimiento y se le enviará un mensaje acorde al rango de edad: 
 adulto(mayor de 18 años) - Es mayor de edad
 joven(entre 14 y 18 años) - Eres un joven 
 niño(menor a 14 años) - Eres un niño 
 */
/* 
Descuento en una tienda
Pide el monto de compra:
≥ 500 → 20% de descuento
≥ 300 → 10% de descuento
< 300 → sin descuento
Muestra el precio final.
 
let num = prompt("ingrese un numero: ")
if(num === 0){
    alert("El numero es cero")
} else if(num < 0){
    alert("El numer es positivo")
 } else{
alert("el numero es negativo")

 let compraRealizada prompt {
    constructor(parameters) {
        
    }
 }= ("registre su compra: ")
 if( la + compraRealizada + es >= 500 ){
    alert("su descuento es del 20%")
 }else if (la + compraRealizada + es =< 300){
  } else{ 
        alert ("sin descuento")
    }
 }}
let numero =
persefloat(prompt("Ingresa un numer: "));
if (isNaN (numero)){
    console.log("por favor,ingresa un num valido. ")
} else{
    let mensajeSigno= "";
}
}
let nmr = 0.0 , residuo = nmr % 2 , par_o_Impar = "";

  nmr = parseFloat(prompt("Introduzca un número: "));

  if ( residuo === 0 ) par_o_Impar = " y es par";
  else par_o_Impar = " y es impar";
  if (nmr > 0) { 
    alert("El número es positivo "+ par_o_Impar);
  } else if( nmr <0 ) {  
    alert("El número es negativo"+ par_o_Impar); 
  }
  else { alert("El número es 0"); }
  let num=parseFloat(prompt("ingrese el numero..."))
if(num===0){
 alert("el numero es cero")
}else if (num<0){
 if(num%2===0){
alert("el numero es negativo y es par")
 }else {
 alert("el numero es negativo y es impar")
 }
}else {
 if(num%2===0){
 alert("el numero es positivo y es par")
}else {
 alert("el numero es positivo y es impar")
 }
}
//*//* 
//Escriba un programa que pida un número al usuario y que envie un mensaje si es positivo o negativo y si es par o impar
 //
let num = parseFloat(prompt("Escribe tu número"));
let esPar;
let esPositivo;
if (num === 0) {
    alert("el numero es 0")
} else {
    if (num > 0) {
        esPositivo = true
    } else {
        esPositivo = false
    }
    if (num % 2 === 0) {
        esPar = true
    } else {
        esPar = false
    }
    let msjPar;
    if (esPar) {
        msjPar = "par"
    } else {
        msjPar = "impar"
    }
    let msjPos;
    if (esPositivo) {
        msjPos = "positivo"
    } else {
        msjPos = "negativo"
    }
    alert(`El número ${num} es ${msjPar} y ${msjPos}`)
}--------------
let codigoError = 302;
switch (codigoError){
    case 101:
        console.log("error-Baja presion de aire");
        break;
    case 
}*/
//bucles 10/2/202226 a la tarde

//for (let i=1; i<=10; i++){
  //  console.log = (i);
//}

// crea un bucle que me imprima los números del 1 al 10
// crea un bucle que me imprima los números del 10 al 1
// crea un bucle que me imprima los números del 1 al 20 pero solo los pares
// crea un bucle que me imprima la suma de los primeros "n" números, siendo "n" un valor ingresado por el usuario. Ejemplo: n=5 respuesta: 1+2+3+4+5 = 15
// crea un bucle que me imprima la tabla de multiplicar de un número "n" que el usuario ingrese. por ejemplo:
/* 
    7 x 1 = 7 
    7 x 2 = 14 
    7 x 3 = 21 
    7 x 4 = 28 
    7 x 5 = 35 
    7 x 6 = 42 
    7 x 7 = 49 
    7 x 8 = 56 
    7 x 9 = 63 
    7 x 10 = 70 


for(let i=7; ; i+7)
    for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
//aray lista de elementos cada elemento es un objeto que representa a una persona
//dentro de un objeto hay propiedades como la edad nombre etc
//sirve para poder manejar muchas personas a la vez 
//listarlas,agregar una nueva,buscar una por nombre , filtrar mayores de edad 
const personas =[
{nombre: "Ana", edad:25},
{nombre: "luis", edad: 30},
{nombre: "Marta",edad: 22}
];
 personas.forEach(p => 
    console.log(p.nombre)
 );
 let numero= parseFloat( prompt("ingrese un num: ")) 
 
 if (numero === 0){
    alert ("el numero es 0")
 } else if (numero > 0){
    alert("el mumero es positivo")
 }else  {
    alert ("el numero es negativo")
 }
 */
/*
Ejercicio 1 – Calculadora de Promedio y Rendimiento
Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:

“Excelente” si el promedio es mayor o igual a 90

“Bueno” si es mayor o igual a 75

“Regular” si es mayor o igual a 60

“Insuficiente” en caso contrario

Instrucciones:
Usa if-else-if y operadores lógicos para determinar el mensaje.
Muestra el resultado con console.log() o alert().
var contador =  0;
var suma = 0;
while (contador < 4 ) {
    var nota= parseFloat (prompt("ingrese nota"));
 suma = suma + nota;
 contador++;
    
}
var promedio  = suma / 4;
console.log("el promedio es: " + promedio);
*/
/*Ejercicio 2 – Calculadora de Tarifa de Transporte
El programa debe pedir al usuario:

Su edad

Si es estudiante (“sí” o “no”)

La distancia que recorrerá (en kilómetros)

Reglas del costo:

Menores de 18 pagan 50% del precio base

Estudiantes pagan 75% del precio base

Mayores de 60 pagan 40% del precio base

Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

Instrucciones:
Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.*/
/*var edad= 0;
var estudiante= prompt("ingrese su nombre");
var distanciaRecorrida= parseFloat(prompt("distancia en km: "))
if ((18>edad)+(distanciaRecorrida>30)=== costo+*/


//crea una funcion del area que me calcule el area
//de un circulo
/*function areaCirculo (R){
    let area= 3,14 * (R)**
    return area;
}*/