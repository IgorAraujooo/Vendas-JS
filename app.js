/***********************************************************************************************************************************
 * Objetivo: Criar um programa que auxilia nas vendas                                                                              *
 * Data: 18/08/23                                                                                                                  *
 * Autor: Igor Araujo                                                                                                              *
 * Versão: 1.0                                                                                                                     * 
 ***********************************************************************************************************************************/

var readline = require('readline');

var entradaDeDados= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularValorAtualizado(valorVenda, vendas) {
  let valorAtualizado = 0;
  
  switch (vendas) {
    case 1:
      valorAtualizado = valorVenda - (valorVenda * 0.08)
      break;
    case 2:
      valorAtualizado = valorVenda - (valorVenda * 0.04)
      break;
    case 3:
      valorAtualizado = valorVenda - (valorVenda / 2)
      break;
    case 4:
      valorAtualizado = valorVenda + (valorVenda * 0.08 / 4)
      break;
    default:
      console.log("Opção inválida");
      return
  }
  
  console.log("Valor atualizado: R$" + valorAtualizado.toFixed(2))
}

entradaDeDados.question("Digite o valor da venda: ", function(valorVenda) {
  entradaDeDados.question("Digite uma dessas opções (1, 2, 3 ou 4): ", function(vendas) {
    calcularValorAtualizado(parseFloat(valorVenda), parseInt(vendas))
  })
})