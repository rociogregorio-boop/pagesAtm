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
/*Ejercicio 1 – Calculadora de Promedio y Rendimiento
Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:

“Excelente” si el promedio es mayor o igual a 90

“Bueno” si es mayor o igual a 75

“Regular” si es mayor o igual a 60

“Insuficiente” en caso contrario

Instrucciones:
Usa if-else-if y operadores lógicos para determinar el mensaje.
Muestra el resultado con console.log() o alert().*/
// Pedir las 4 notas
/*let nota1 = parseFloat(prompt("Ingrese la primera nota (0-100):"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota (0-100):"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota (0-100):"));
let nota4 = parseFloat(prompt("Ingrese la cuarta nota (0-100):"));

let promedio = (nota1 + nota2 + nota3 + nota4) / 4;

if (promedio >= 90) {
    console.log("Promedio: " + promedio + " -> Excelente");
} else if (promedio >= 75) {
    console.log("Promedio: " + promedio + " -> Bueno");
} else if (promedio >= 60) {
    console.log("Promedio: " + promedio + " -> Regular");
} else {
    console.log("Promedio: " + promedio + " -> Insuficiente");
}


----------------------------------

let precioBase = 100;

let edad = parseInt(prompt("Ingrese su edad:"));
let estudiante = prompt("¿Es estudiante? (si/no)").toLowerCase();
let distancia = parseFloat(prompt("Ingrese la distancia en km:"));
let total = precioBase;
if (edad < 18) {
    total = precioBase * 0.5;
} else if (edad > 60) {
    total = precioBase * 0.4; 
} else if (estudiante === "si") {
    total = precioBase * 0.75; 
} else {
    total = precioBase; 
}
if (distancia > 30) {
    total = total * 1.10; 
}
console.log("El costo final del viaje es: $" + total);
-------------

let total = parseFloat(prompt("Ingrese el precio total de su compra:"));
let tarjeta = prompt("¿Tiene tarjeta de cliente frecuente? (si/no)").toLowerCase();

let mensaje = "";


if (total > 500) {
    
    total *= 0.90; 
    mensaje = "Se aplicó un 10% de descuento";

    if (tarjeta === "si") {
        total *= 0.95; 
        mensaje += " + 5% adicional por tarjeta";
    }

} else if (total <= 100) {
    
    total *= 1.05;
    mensaje = "Se aplicó un recargo del 5%";

} else {
    mensaje = "No se aplicaron descuentos";
}

console.log("Precio final: $" + total.toFixed(2));
console.log(mensaje);
 // contatencion ctrl aLT }*/
 //ALT 96

/* Ejercicio 2 – Calculadora de Tarifa de Transporte
El programa debe pedir al usuario:

Su edad
Si es estudiante (“sí” o “no”)
La distancia que recorrerá (en kilómetros)
Reglas del costo:
Menores de 18 pagan 50% del precio base
Estudiantes pagan 75% del precio base
Mayores de 60 pagan 40% del precio base
Si el viaje es mayor a 30 km, se agrega un 10% adicional al total
nstrucciones:
Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.
*/


/*let edad= parseFloat("ingrese su edad");
let distancia=parseFloat("ingrese su distancia");
let esEstudiante;
let pasajero;

if (esEstudiante === "si") {
    console.log("Paga 50% del precio");
}
else if (edad < 18) {
    console.log("Paga 75% del precio");
}
else if (edad > 60) {
    console.log("Paga 40% del precio");
}
else {
    console.log("Paga el precio normal");
}
    --------------------------------------------------------------------------------
Ejercicio 3 – Menú de Conversión de Unidades
Muestra un menú con 4 opciones:

Convertir de Celsius a Fahrenheit

Convertir de Fahrenheit a Celsius

Convertir de Metros a Kilómetros

Convertir de Kilómetros a Metros

El usuario debe elegir una opción y escribir el valor a convertir.
El programa mostrará el resultado correspondiente.

Instrucciones:
Usa switch-case para realizar las conversiones y prompt() para las entradas.


let opcion = 0;

while (opcion !== 5) {

  opcion = Number(prompt(`
  1 - Celsius a Fahrenheit
  2 - Fahrenheit a Celsius
  3 - Kilómetros a Metros
  4 - Metros a Kilómetros
  5 - Salir
  `));

  switch (opcion) {

    case 1:
      let c = Number(prompt("Ingresá grados Celsius:"));
      let f = (c * 9/5) + 32;
      alert("Resultado: " + f + " °F");
      break;

    case 2:
      let f2 = Number(prompt("Ingresá grados Fahrenheit:"));
      let c2 = (f2 - 32) * 5/9;
      alert("Resultado: " + c2 + " °C");
      break;

    case 3:
      let km = Number(prompt("Ingresá kilómetros:"));
      let m = km * 1000;
      alert("Resultado: " + m + " metros");
      break;

    case 4:
      let m2 = Number(prompt("Ingresá metros:"));
      let km2 = m2 / 1000;
      alert("Resultado: " + km2 + " km");
      break;

    case 5:
      alert("Programa finalizado");
      break;

    default:
      alert("Opción inválida");
  }
}
-------------------------------------------------------------
Ejercicio 4 – Sistema de Descuentos en una Tienda
El usuario debe ingresar:

El precio total de su compra

Si tiene tarjeta de cliente frecuente (“sí” o “no”)

Reglas:

Si el total es mayor a 500, aplica un 10% de descuento

Si además tiene tarjeta, aplica un 5% adicional

Si el total es menor o igual a 100, aplica un recargo del 5%

El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

Instrucciones:
Utiliza operadores de asignación y condiciones anidadas para determinar el total.  
----------------------------------------------------------------------
let total = parseFloat(prompt("Ingrese el precio total de su compra:"));
let tarjeta = prompt("¿Tiene tarjeta de cliente frecuente? (si/no)").toLowerCase();

let mensaje = "";

if (total > 500) {

    total *= 0.90; // 10% de descuento
    mensaje = "Se aplicó un descuento del 10%";

    if (tarjeta === "si") {
        total *= 0.95; // 5% adicional
        mensaje += " + 5% adicional por tarjeta";
    }

} else {

    if (total <= 100) {
        total *= 1.05; // 5% de recargo
        mensaje = "Se aplicó un recargo del 5%";
    } else {
        mensaje = "No se aplicó ningún descuento";
    }

}

alert("Precio final: $" + total.toFixed(2) + "\n" + mensaje);
-------------------------------------------------------------
Pide al usuario:

Su año de nacimiento

El año actual

Calcula su edad y muestra un mensaje según el rango:

Menor de edad: menos de 18 años

Adulto joven: entre 18 y 30 años

Adulto: entre 31 y 59 años

Adulto mayor: 60 años o más

BONUS:
Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.

Instrucciones:
Usa operadores de comparación, if-else-if, y parseInt() para convertir los datos numéricos.

let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
let anioActual = parseInt(prompt("Ingrese el año actual:"));
let cumplio = prompt("¿Ya cumplió años este año? (si/no)").toLowerCase();

// Calcular edad básica
let edad = anioActual - anioNacimiento;

// Ajustar si NO ha cumplido años
if (cumplio === "no") {
    edad -= 1;  // operador de asignación
}

// Clasificación por edad
if (edad < 18) {
    alert("Tienes " + edad + " años. Eres menor de edad.");
} 
else if (edad >= 18 && edad <= 30) {
    alert("Tienes " + edad + " años. Eres adulto joven.");
} 
else if (edad >= 31 && edad <= 59) {
    alert("Tienes " + edad + " años. Eres adulto.");
} 
else {
    alert("Tienes " + edad + " años. Eres adulto mayor.");
}
-------------------------------------------------------------
Ejercicio 1 – Área de triángulos múltiples
Crea una función llamada calcularAreaTriangulo que reciba base y altura y devuelva el área:

Pide al usuario 3 veces la base y altura de diferentes triángulos usando prompt.

Usa un bucle for para solicitar los datos 3 veces.

Usa condicional para verificar que base y altura sean mayores que 0.

Muestra cada área en consola.

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

for (let i = 1; i <= 3; i++) {

    let base = parseFloat(prompt("Triángulo " + i + " - Ingresa la base:"));
    let altura = parseFloat(prompt("Triángulo " + i + " - Ingresa la altura:"));


    if (base > 0 && altura > 0) {

        let area = calcularAreaTriangulo(base, altura);

        console.log("El área del triángulo " + i + " es: " + area);

    } else {

        console.log("Datos inválidos en el triángulo " + i + ". Base y altura deben ser mayores que 0.");

    }
}
------------------------------------------------------------
Ejercicio 2 – Conversión de Celsius a Fahrenheit
Crea una función convertirAFahrenheit que reciba un valor en Celsius 
y lo convierta a Fahrenheit:

Pide al usuario 5 temperaturas mediante prompt.

Usa un bucle para hacer las 5 conversiones.

Usa un condicional para verificar que el valor ingresado sea un número.

Muestra cada resultado en consola. 
function
 }*/
// function convertirAFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
// for (let i = 1; i <= 5; i++) {
// let temperatura = parseFloat(prompt("Ingresa la temperatura " + i + " en Celsius:"));
// if (!isNaN(temperatura)) {
//  let resultado = convertirAFahrenheit(temperatura);
//    console.log("La temperatura " + i + " en Fahrenheit es: " + resultado);

//   } else {
//         console.log("Valor inválido en la temperatura " + i);
//     }
// }

// Ejercicio 3 – Contar vocales en un texto
// Crea una función contarVocales que reciba un texto y devuelva el número de vocales:

// Pide al usuario 3 textos mediante prompt.

// Usa un bucle para recorrer cada letra del texto.

// Usa condicionales para determinar si un carácter es vocal.

// Muestra en consola cuántas vocales tiene cada texto.

// function contarVocales(texto) {
//  let contador = 0;
//     for (let i = 0; i < texto.length; i++) {
//         let letra = texto[i].toLowerCase();
//             if (
//             letra === "a" ||
//             letra === "e" ||
//             letra === "i" ||
//             letra === "o" ||
//             letra === "u"
//         ) {
//             contador++;
//         }
//     }
//     return contador;
// }
// for (let i = 1; i <= 3; i++) {

//     let textoUsuario = prompt("Ingresa el texto " + i + ":");
//     let cantidad = contarVocales(textoUsuario);
//     console.log("El texto " + i + " tiene " + cantidad + " vocales.");

// }
// Ejercicio 4 – Pares e impares en un rango
// Crea una función clasificarParesImpares que reciba dos números inicio y fin y:

// Use un bucle for para recorrer todos los números desde inicio hasta fin.

// Use condicional para imprimir si cada número es par o impar.

// Pide al usuario inicio y fin mediante prompt.

// Muestra el resultado en consola.
// function clasificarParesImpares(inicio, fin) {

//     for (let i = inicio; i <= fin; i++) {

//         if (i % 2 === 0) {
//             console.log(i + " es PAR");
//         } else {
//             console.log(i + " es IMPAR");
//         }

//     }
// }

// let inicio = parseInt(prompt("Ingresa el número inicial:"));
// let fin = parseInt(prompt("Ingresa el número final:"));

// if (!isNaN(inicio) && !isNaN(fin)) {
//     clasificarParesImpares(inicio, fin);
// } else {
//     console.log("Debes ingresar números válidos.");
// }
// function mayorYSuma(n1, n2, n3, n4, n5) {

//     let numeros = [n1, n2, n3, n4, n5];

//     let mayor = numeros[0];
//     let suma = 0;

//     for (let i = 0; i < numeros.length; i++) {

//         suma += numeros[i];

//         if (numeros[i] > mayor) {
//             mayor = numeros[i];
//         }
//     }

//     console.log("El número mayor es: " + mayor);
//     console.log("La suma total es: " + suma);
// }

// let n1 = parseFloat(prompt("Ingresa el número 1:"));
// let n2 = parseFloat(prompt("Ingresa el número 2:"));
// let n3 = parseFloat(prompt("Ingresa el número 3:"));
// let n4 = parseFloat(prompt("Ingresa el número 4:"));
// let n5 = parseFloat(prompt("Ingresa el número 5:"));

// if (
//     !isNaN(n1) &&
//     !isNaN(n2) &&
//     !isNaN(n3) &&
//     !isNaN(n4) &&
//     !isNaN(n5)
// ) {
//     mayorYSuma(n1, n2, n3, n4, n5);
// } else {
//     console.log("Debes ingresar solo números.");
// }


       
     

  



