// String incluye metodos lenght

const cadena="Mi camino está lejos de aquí";
console.log(cadena);

const cadena2="pero los sueños siguen siendo los mismos";

//conocer la cantidad de texto de una cadena
console.log("La cadena tiene número de palabras--->"+cadena.length);

console.log("Se encuentra en la posición--->"+cadena.indexOf('lejos'));

console.log("Se encuentra palabra camino-->"+cadena.includes('camino'));

console.log("Se encuentra palabra pais-->"+cadena.includes('pais'));

console.log(cadena+"---"+cadena2);