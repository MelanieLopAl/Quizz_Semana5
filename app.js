const { numMayor, numMenor, suma, lista } = require('./operaciones');

// aqui se hacen todas las operaciones 
function operaciones(numeros) {
  console.log("Numeros recibidos:", numeros);

  const numeroMayor = numMayor(numeros);
  console.log("Numero mayor es :", numeroMayor);

  const numeroMenor = numMenor(numeros);
  console.log("Numero menor es :", numeroMenor);

  const sumatoria = suma(numeros);
  console.log("Sumatoria de los numeros es:", sumatoria);

  const listaOrdenada = lista(numeros);
  console.log("Lista ordenada:", listaOrdenada);
}

// ejemplo de numeros, se pueden cambiar 
const numeros = [8, 4, 6, 7, 2, 0, 5, 10, 1, 50, 11, 9, 63, 43, 32, 33, 80, 30, 23, 22];

operaciones(numeros);
