/* 
    EJERCICIO 1 PARA CONDICIONALES
    nuestro amigo Jorge tiene una discoteca, esa discoteca quiere implementar un sistema 
    de ingreso a sus sucursales 
    solo podran ingresar las personas mayores de edad 
    y si es menor de edad entre 15 y 17 años debera contar con el permiso de la mama o el papa 
    
    DATOS DE ENTRADA
    1ro  edad del usuario si tiene mas de 18 ingresa 
    2do  permiso de los padres 
    DATOS DE SALIDA 
    FELICIDADES PUEDES INGRESAR ALA DISCOTECA
    POR FAVOR RETORNA A TU HOGAR ERES MENOR DE EDAD 
-------------------------------------------------------*/
/* let edad=parseFloat(prompt("ingrese su edad"))
let ingresoDiscoteca
let permisoPadres=prompt("tiene permiso de los padres (si/no)").toLowerCase 
permisoPadres=== "si"
if (edad >= 18){
    alert ("ingreso a discoteca")
}
else  if (edad< 18 && permisoPadres){
    alert(ingresoDiscoteca +"permiso de los padres")
}
else{}
// Pedir datos
let edad = parseInt(prompt("Ingrese su edad:"));
let permisoPadres = prompt("¿Tiene permiso de sus padres? (si/no)").toLowerCase();

// Condiciones
if (edad >= 18) {
    alert("FELICIDADES PUEDES INGRESAR A LA DISCOTECA");
}
else if (edad >= 15 && edad <= 17 && permisoPadres === "si") {
    alert("FELICIDADES PUEDES INGRESAR A LA DISCOTECA CON PERMISO");
}
else {
    alert("POR FAVOR RETORNA A TU HOGAR ERES MENOR DE EDAD");
}

-----------------------------------------------
EJERCICIO 2 LOTES 
EL DUEÑO DE UNA EMPRESA DE LACTEOS QUE TIENE MUCHAS SUCURSALES ESTA REGSITRANDO EL INGRESO Y PERDIDAS Q TIENE CADA SUCURSAL
SIEMPRE PODRA RECIBIR DATOS POSITIVOS O NEGATIVOS HASTA Q NUESTRO USUARIO COLOQUE EL NUMERO 0
contar la cantidad de sucursales q tienen ingresos positivos y cuanmtas negativos 
DATOS DE ENTRADA
5           2               5
10          0               3
32                          0
-45
100
0
DATOS DE SALIDA
SALISTE DEL PROGRAMA 
la cantidad de sucursales exitosas son 4
la cantidad de sucursales negativas son 1
-----------------------------------------------------------


----------------------------------------------------
let curso={ 
    curso:"math ",
     nota:16,
     aprobado:true
    }
    curso["turno"] = "mañana"
    console.log(curso)

     delete curso.nota
    
     console.log(curso)

     for (const key in object){
        console.log()
     
    const books = [
  { id: 1, title: "Clean Code", author: "Robert Martin", available: true },
  { id: 2, title: "JavaScript: The Good Parts", author: "Douglas Crockford", available: false },
  { id: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: true }
];
function traerTodosLosDisponible(param){
    for (let i=0;i< Param.length;i++){
        const element = param[i];
        console.log (Element.available)
        if(Element.available=== true){
            librosDisponible.push(Element.title)
        }
    }
    retum (id===1) && (id===3);


}
 console.log(traerTodosLosDisponible(books))}

 --------------------------------------
 const books = [
  { id: 1, title: "Clean Code", author: "Robert Martin", available: true },
  { id: 2, title: "JavaScript: The Good Parts", author: "Douglas Crockford", available: false },
  { id: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: true }
];
function traerTodosLosDisponibles(params) {
    
}
traerTodosLosDisponibles(books) // Clean Code, Eloquent JavaScript

 function traerTodosLosDisponibles(iD) {
let list = [i];
for(let i=0; i< book.length ;i++){
    const element =books[i];
if (element.id === ID){
libro= element.title
}
}
return list;
}
console.log(traerTodosLosDisponibles(3)); 
-------------------------------------------------
// primero dar la vuelta a una palabra o frase
function daVuelta(palabra) {
  let resultado = "";
  for (let indice = palabra.length - 1; indice >= 0; indice--) {
    resultado = resultado + palabra[indice];
  }
  return resultado;
}
function sinEspacios(palabra) {
  let resultado = "";
  for (let index = 0; index <= palabra.length - 1; index++) {
    if (palabra[index] !== " ") {
      resultado = resultado + palabra[index];
    }
  }
  return resultado;
}
//segundo
let cliente = prompt("ingresa la palabra o frase");
let resultadoVuelta = daVuelta(cliente);
let kevin = sinEspacios(resultadoVuelta);
kevin = kevin.toLowerCase();
if ((cliente = kevin)) {
  console.log("la palabra es palindroma");
} else {
  console.log("la palabra no es palindroma :c");
}




------------------------------------------------------------------
/* 
1-Obtener todos los productos en oferta. return []
2-Obtener productos con stock menor a 10. return []
3-Calcular el valor total del inventario. return number
4-Obtener todos los productos de una categoría.return []
5-Obtener el nombre del producto más caro. return string

*/
const storeProducts = [
  {
    id: 1,
    name: "Laptop Gamer X15",
    category: "Computadoras",
    price: 4500,
    stock: 8,
    rating: 4.7,
    onSale: true
  },
  {
    id: 2,
    name: "Laptop Office Pro",
    category: "Computadoras",
    price: 3200,
    stock: 15,
    rating: 4.3,
    onSale: false
  },
  {
    id: 3,
    name: "Mouse Inalámbrico",
    category: "Accesorios",
    price: 120,
    stock: 40,
    rating: 4.5,
    onSale: true
  },
  {
    id: 4,
    name: "Teclado Mecánico RGB",
    category: "Accesorios",
    price: 350,
    stock: 20,
    rating: 4.8,
    onSale: false
  },
  {
    id: 5,
    name: "Monitor 27'' 4K",
    category: "Monitores",
    price: 1800,
    stock: 10,
    rating: 4.6,
    onSale: true
  },
  {
    id: 6,
    name: "Monitor 24'' Full HD",
    category: "Monitores",
    price: 950,
    stock: 18,
    rating: 4.2,
    onSale: false
  },
  {
    id: 7,
    name: "Silla Gamer Ergonómica",
    category: "Muebles",
    price: 1200,
    stock: 5,
    rating: 4.4,
    onSale: true
  },
  {
    id: 8,
    name: "Escritorio Ajustable",
    category: "Muebles",
    price: 1500,
    stock: 7,
    rating: 4.1,
    onSale: false
  },
  {
    id: 9,
    name: "Tablet Pro 11",
    category: "Tablets",
    price: 2100,
    stock: 12,
    rating: 4.6,
    onSale: true
  },
  {
    id: 10,
    name: "Smartphone Ultra X",
    category: "Celulares",
    price: 3800,
    stock: 9,
    rating: 4.9,
    onSale: true
  },
  {
    id: 11,
    name: "Smartphone Lite",
    category: "Celulares",
    price: 1500,
    stock: 25,
    rating: 4.0,
    onSale: false
  },
  {
    id: 12,
    name: "Audífonos Bluetooth",
    category: "Audio",
    price: 400,
    stock: 30,
    rating: 4.3,
    onSale: true
  },
  {
    id: 13,
    name: "Parlante Portátil",
    category: "Audio",
    price: 650,
    stock: 14,
    rating: 4.5,
    onSale: false
  },
  {
    id: 14,
    name: "Disco SSD 1TB",
    category: "Componentes",
    price: 500,
    stock: 22,
    rating: 4.8,
    onSale: true
  },
  {
    id: 15,
    name: "Memoria RAM 16GB",
    category: "Componentes",
    price: 320,
    stock: 35,
    rating: 4.7,
    onSale: false
  }
];
function obtenerProductosEnOferta(productos){
    let obtenerProductosEnOferta= [];
    for (let i=0;i < productos.length;i++){
      
        if(productos[i].available=== true){
            librosDisponible.push(Element.title)
        }
    }
    retum (id===1) && (id===3);
    function obtenerProductosEnOferta(productos) {

    let productosEnOferta = []; // array vacío

    for (let i = 0; i < productos.length; i++) {

        if (productos[i].onSale === true) {
            productosEnOferta.push(productos[i]);
        }

    }

    return productosEnOferta;
}



}
 console.log(traerTodosLosDisponible(iD))}
  function traerTodosLosDisponible(param){
    for (let i=0;i< Param.length;i++){
        const element = param[i];
        console.log (Element.available)
        if(Element.available=== true){
            librosDisponible.push(Element.title)
        }
    }
    retum (id===1) && (id===3);


}    

*/
