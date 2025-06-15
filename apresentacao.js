const formatarMoeda = require('./util.js');

function gerarFaturaStr(fatura, calc) {
  let faturaStr = `Fatura ${fatura.cliente}\n`;
  for (let apre of fatura.apresentacoes) {
    const nome = calc.repo.getPeca(apre).nome;
    const valor = calc.calcularTotalApresentacao(apre);
    faturaStr += `  ${nome}: ${formatarMoeda(valor)} (${apre.audiencia} assentos)\n`;
  }
  const total = calc.calcularTotalFatura(fatura.apresentacoes);
  const creditos = calc.calcularTotalCreditos(fatura.apresentacoes);
  faturaStr += `Valor total: ${formatarMoeda(total)}\n`;
  faturaStr += `Créditos acumulados: ${creditos} \n`;
  return faturaStr;
}

module.exports = gerarFaturaStr;
