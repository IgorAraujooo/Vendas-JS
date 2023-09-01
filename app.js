  /***********************************************************************************************************************************
   * Objetivo: Criar um programa que auxilia nas vendas                                                                              *
   * Data: 18/08/23                                                                                                                  *
   * Autor: Igor Araujo                                                                                                              *
   * Versão: 1.0                                                                                                                     * 
   ***********************************************************************************************************************************/


  var calcularValorVenda = require('./modulo/calculosVendas.js')
  var readline = require('readline');
  
  var entradaDeDados= readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  entradaDeDados.question("Digite o valor da venda: ", function(valorVenda) {
      entradaDeDados.question("Digite uma dessas opções (1, 2, 3 ou 4): ", function(vendas) {
        let valorAtualizado = calcularValorVenda.calcularValorAtualizado(parseFloat(valorVenda), parseInt(vendas))
                  if (valorAtualizado)
                  console.log(valorAtualizado);
              })
    })
  