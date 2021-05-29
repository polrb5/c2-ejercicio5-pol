const esPalindromo = (palabra) => {
  palabra = palabra.toLowerCase();
  palabra = palabra.replace("/[.,:;()_?¿!¡-s]/g");
  palabra = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const palabraInvertida = palabra.split("").reverse().join("");

  return palabraInvertida === palabra;
};

const palabra1 = "Somos";
const palabra2 = "Jesús";

console.log(
  `${palabra1} ${esPalindromo(palabra1) ? "es" : "no es"} un palindromo ${
    esPalindromo(palabra1) ? ":)" : ":("
  }`
);
console.log(
  `${palabra2} ${esPalindromo(palabra2) ? "es" : "no es"} un palindromo ${
    esPalindromo(palabra2) ? ":)" : ":("
  }`
);
