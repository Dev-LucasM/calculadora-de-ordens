const button = document.getElementById("calculator-button");

const selectTela = document.getElementById("tela");

const selectAcab = document.getElementById("acab");

calcule = () => {
  const inputMalha = document.getElementById("input-malha").value;
  const inputFio = document.getElementById("input-fio").value;
  const inputComprimento = document.getElementById("input-comprimento").value;
  const inputLargura = document.getElementById("input-largura").value;
  const inputPecas = document.getElementById("input-pecas").value;

  const valorComprimento = document.getElementById("valorComprimento");
  const valorLargura = document.getElementById("valorLargura");
  const valorPasso = document.getElementById("passo");
  const valorPuxada = document.getElementById("puxada");

  const comprimentoTela = parseInt(inputComprimento);
  const larguraTela = parseInt(inputLargura);
  const quantiaDePecas = parseInt(inputPecas);

  const passo = (parseFloat(inputMalha) + parseFloat(inputFio)) * 2;
  valorPasso.innerHTML = "Passo " + passo;
  const fios = ((larguraTela / passo) * 2).toFixed(2);

  const ganchoSimples = comprimentoTela + 100;
  const ganchoECapa = comprimentoTela + 60;

  const vaoLivre = document.getElementById("vao-livre");
  vaoLivre.innerHTML = `Vão Livre: ${comprimentoTela}`;

  const acabamento = document.getElementById("acabamento")
  acabamento.innerHTML = selectAcab.value;

  if (
    selectTela.value === "Ondulação Simples" &&
    selectAcab.value === "Gancho Simples"
  ) {
    valorComprimento.innerHTML = `${ganchoSimples} C`;
    valorLargura.innerHTML = `${larguraTela} L`;
    let metragem = ganchoSimples * quantiaDePecas + 1000;
    let dividir = metragem / 10;
    let number = dividir;
    let puxada = (number / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
  }

  if (
    selectTela.value === "Ondulação Simples" &&
    selectAcab.value === "Gancho Simples Invertido"
  ) {
    valorComprimento.innerHTML = `${ganchoSimples} C`;
    valorLargura.innerHTML = `${larguraTela} L`;
    let metragem = ganchoSimples * quantiaDePecas + 1000;
    let dividir = metragem / 10;
    let number = dividir;
    let puxada = (number / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
  }

  if (
    selectTela.value === "Ondulação Simples" &&
    selectAcab.value === "Gancho e Capa"
  ) {
    valorComprimento.innerHTML = `${ganchoECapa} C`;
    valorLargura.innerHTML = `${larguraTela} L`;
    let metragem = ganchoECapa * quantiaDePecas + 1000;
    let dividir = metragem / 10;
    let number = dividir;
    let puxada = (number / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
  }

  if (selectAcab.value === "Sem Acabamento") {
    valorComprimento.innerHTML = `${comprimentoTela} C`;
    valorLargura.innerHTML = `${larguraTela} L`;
    let metragem = comprimentoTela * quantiaDePecas + 1000;
    let dividir = metragem / 10;
    let number = dividir;
    let puxada = (number / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
  }
};

button.addEventListener("click", calcule);
