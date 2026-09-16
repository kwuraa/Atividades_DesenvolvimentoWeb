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

const alturaTriangulo = document.getElementById("alturaTriangulo");
const baseTriangulo = document.getElementById("baseTriangulo");
const resultArea = document.getElementById("areaTriangulo");

function CalcularAreaTriangulo() {
  const resultado =
    (Number(baseTriangulo.value) * Number(alturaTriangulo.value)) / 2;

  resultArea.value = `${resultado.toFixed(2)} M²`;
}

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const resultadoLabel = document.getElementById("resultado");

function CalcularMedia() {
  const media = Number(nota1.value) * 0.3 + Number(nota2.value) * 0.7;

  resultadoLabel.innerHTML = `Sua média foi ${media}`;
}
