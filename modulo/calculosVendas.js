function calcularValorAtualizado(valorVenda, vendas) {
    let valorAtualizado;
  
    if (vendas === 1) {
      valorAtualizado = valorVenda - (valorVenda * 0.08);
    } else if (vendas === 2) {
      valorAtualizado = valorVenda - (valorVenda * 0.04);
    } else if (vendas === 3) {
      valorAtualizado = valorVenda - (valorVenda / 2);
    } else if (vendas === 4) {
      const valorAcrescido = (valorVenda * 8) / 100;
      valorAtualizado = (valorAcrescido + valorVenda) / 4;
      console.log("Valor da parcela: R$" + valorAtualizado.toFixed(2));
      console.log("O valor total a ser pago é: R$" + (valorAtualizado * 4).toFixed(2));
    } else {
      console.log("Opção inválida");
      return valorAtualizado;
    }
  
    console.log("Valor atualizado: R$" + valorAtualizado.toFixed(2));
  }
  
  module.exports = {
    calcularValorAtualizado
  };
  