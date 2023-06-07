const { numMayor, numMenor, suma, lista } = require('./operaciones');

// aqui se hacen todas las operaciones 
function operaciones(numeros) {
  console.log("Números recibidos:", numeros);

  const numeroMayor = numMayor(numeros);
  console.log("Número mayor:", numeroMayor);

  const numeroMenor = numMenor(numeros);
  console.log("Número menor:", numeroMenor);

  const sumatoria = suma(numeros);
  console.log("Sumatoria:", sumatoria);

  const listaOrdenada = lista(numeros);
  console.log("Lista ordenada:", listaOrdenada);
}

// ejemplo de numeros, se pueden cambiar 
const numeros = [8, 4, 6, 7, 2, 0, 5, 10, 1, 50, 11, 9, 63, 43, 32, 33, 80, 30, 23, 22];

operaciones(numeros);
