//para remplazar texto
const cadena="la computadora tiene procesador i5 7th";
console.log(cadena);

console.log(cadena.replace('procesador i5','procesador i7'));

//para cortar texto
console.log(cadena.slice(0,4));

//alternativa a slice
console.log(cadena.substring(0,4));

const usuario="Miram";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));


function popup() {
    alert("Hola gente")
}
