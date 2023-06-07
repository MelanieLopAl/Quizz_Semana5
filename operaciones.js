// numero mayor
function numMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}
  
// numero menor
function numMenor(numeros) {
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}
  
// sumatoria
function suma(numeros) {
  let sumatoria = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumatoria += numeros[i];
  }
  return sumatoria;
}

//lista menor - mayor
function lista(numeros) {
  for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - i - 1; j++) {
      if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }
  return numeros;
}
  
module.exports = {
  numMayor:numMayor,
  numMenor:numMenor,
  suma:suma,
  lista:lista
};
  
