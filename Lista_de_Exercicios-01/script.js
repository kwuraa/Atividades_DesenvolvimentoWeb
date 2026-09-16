const salarioBase = document.getElementById("salarioBase");
const percentualAumento = document.getElementById("percentualAumento");
const resultadoSalario = document.getElementById("salarioReajustado");

function CalcularAumento() {
  const valorReajuste =
    Number(salarioBase.value) * (Number(percentualAumento.value) / 100);

  const salarioReajustado = Number(salarioBase.value) + valorReajuste;

  resultadoSalario.textContent = `O seu salario foi reajustado para R$ ${salarioReajustado}`;
}

function CalcularAreaTriangulo() {}
