var valores = [];
var soma = 0;
var contador = 0;

while (true) {
  var valor = prompt("Digite um valor e após a segunda vez digite 0 para visualizar o resultado no console:");
  valor = parseInt(valor);
  
  if (valor === 0) {
    break; // Encerra o loop se o usuário digitar 0
  }
  
  valores.push(valor); // Adiciona o valor ao array
  soma += valor; // Atualiza a soma
  contador++; // Incrementa o contador
}

var media = soma / contador;

console.log("Soma dos valores: " + soma);
console.log("Média dos valores: " + media);
