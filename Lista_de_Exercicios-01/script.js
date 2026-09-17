const salarioBase = document.getElementById("salarioBase");
const percentualAumento = document.getElementById("percentualAumento");
const resultadoSalario = document.getElementById("salarioReajustado");

function CalcularAumento() {
  if (
    !salarioBase.value ||
    !percentualAumento.value ||
    Number(percentualAumento.value) === 0
  ) {
    resultadoSalario.textContent = "Informe valores Válidos !!!";
  } else {
    const valorReajuste =
      Number(salarioBase.value) * (Number(percentualAumento.value) / 100);

    const salarioReajustado = Number(salarioBase.value) + valorReajuste;

    resultadoSalario.textContent = `O seu salario foi reajustado para R$ ${salarioReajustado.toFixed(2)}`;
  }
}

// -------------------------------------------------

const alturaTriangulo = document.getElementById("alturaTriangulo");
const baseTriangulo = document.getElementById("baseTriangulo");
const resultArea = document.getElementById("areaTriangulo");

function CalcularAreaTriangulo() {
  const resultado =
    (Number(baseTriangulo.value) * Number(alturaTriangulo.value)) / 2;

  resultArea.value = `${resultado.toFixed(2)} M²`;
}

// -------------------------------------------------

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const resultadoLabel = document.getElementById("resultado");

function CalcularMedia() {
  const media = Number(nota1.value) * 0.3 + Number(nota2.value) * 0.7;

  resultadoLabel.innerHTML = `Sua média foi ${media}`;
}

// -------------------------------------------------

const anoNasc = document.getElementById("anoNasc");

function CalcTempoDeVida() {
  const anoAtual = new Date().getFullYear();
  const anoInformado = parseInt(anoNasc.value);
  const dataNasc = new Date(anoInformado, 0, 1);
  const dataAgr = new Date();

  const diff = dataAgr - dataNasc;

  const anos = anoAtual - anoInformado;
  const meses = anos * 12;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const semanas = Math.floor(dias / 7);
  const horas = dias * 24;
  const minutos = horas * 60;

  const idade2050 = 2050 - anoInformado;

  console.clear();
  console.log(`--- anos de vida - ${anoInformado} ---`);
  console.log(`• Anos: ${anos}`);
  console.log(`• Meses: ${meses}`);
  console.log(`• Semanas: ${semanas.toLocaleString("pt-BR")}`);
  console.log(`• Dias: ${dias.toLocaleString("pt-BR")}`);
  console.log(`• Horas: ${horas.toLocaleString("pt-BR")}`);
  console.log(`• Minutos: ${minutos.toLocaleString("pt-BR")}`);
  console.log(`• Idade em 2050: ${idade2050} anos`);
}

// -------------------------------------------------

const inputDistancia = document.getElementById("distanciaKM");
const inputCombustivel = document.getElementById("combustivel");
const resultConsumoMedio = document.getElementById("consumoMedio");

function CalcConsumoMedio() {
  const distanciaKm = parseFloat(inputDistancia.value);
  const volumeCombustivel = parseFloat(inputCombustivel.value);

  const result = distanciaKm / volumeCombustivel;
  `R$ ${result}`;

  resultConsumoMedio.textContent = `O consumo medio de ${result.toFixed(2)} km/L`;
}

// -------------------------------------------------

const inputHoras = document.getElementById("horasTrabalhadas");
const inputRefeicoes = document.getElementById("qtsRefeicoes");
const inputValor = document.getElementById("valorHora");
const spanReceber = document.getElementById("totalReceber");

function CalcFolhaDePagamento() {
  const valorHora = parseFloat(inputValor.value);
  const totalHoras = parseFloat(inputHoras.value);
  const qtsRefeicoes = parseInt(inputRefeicoes.value);

  const limitesHoras = 40;

  const horasExtras = totalHoras - limitesHoras;

  const valorHoraExtra = valorHora * 3;

  const salarioBruto = limitesHoras * valorHora + horasExtras * valorHoraExtra;

  const descRefeicoes = qtsRefeicoes * 1.5;

  const salarioLiquido = salarioBruto - descRefeicoes;

  spanReceber.textContent = `HOLERITE: ${totalHoras} Horas Trabalhadas \n
  SALARIO BRUTO: R$${salarioBruto.toFixed(2)}\n
  VALOR DESCONTO: R$${descRefeicoes.toFixed(2)}\n
  SALARIO LIQUIDO: R$${salarioLiquido}`;
}

// -------------------------------------------------

const resNumAleatorio = document.getElementById("numAleatorio");
const resParImp = document.getElementById("parImp");

function GerarNumero() {
  const numero = Math.floor(Math.random() * 100) + 1;
  resNumAleatorio.textContent = numero;
  if (numero % 2 === 0) {
    resParImp.textContent = "PAR";
  } else {
    resParImp.textContent = "IMPAR";
  }
}
