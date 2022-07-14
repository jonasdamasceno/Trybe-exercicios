let numero = 50; // alterar esse número para qualquer outro.
let ehPrimo = 1;

for (let index = numero; index > 1; index -= 1) {
  let verificador = 0;
  for (let index2 = numero; index2 > 1; index2 -= 1) {
    if (index % index2 == 0){
      verificador += 1;
    }
  }
   if (verificador === 1) {
     ehPrimo = index;
     break
   }
}

console.log(ehPrimo);