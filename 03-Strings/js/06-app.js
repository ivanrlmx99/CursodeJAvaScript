//repetir cadena de texto
const productoCarro="El carro vale 130 mil pesos";

const cadenaPromocion=" el descuento de buen fin es de 25000".repeat(5);

console.log(cadenaPromocion);
console.log(`${productoCarro} ${cadenaPromocion} !!!!`);

//usar split y dividir un string

const actividad='Estoy aprendiendo Java script moderno';
console.log(actividad.split(" "));

const hobbis="jugar futbol,correr,caminar,nadar,escuchar música,programar";
console.log(hobbis.split(", "));

const twee="jugar futbol,correr,caminar,nadar,escuchar música,#programar";
console.log(twee.split('#'));
