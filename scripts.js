const button = document.getElementById("calculator-button");

const selectTela = document.getElementById("tela");

const selectAcab = document.getElementById("acab");

calcule = () => {
  const inputMalha = document.getElementById("input-malha").value;
  const inputFio = document.getElementById("input-fio").value;
  const inputComprimento = document.getElementById("input-comprimento").value;
  const inputLargura = document.getElementById("input-largura").value;
  const inputPecas = document.getElementById("input-pecas").value;
  const inputSobreposicao = document.getElementById("input-sobreposicao").value;

  const valorComprimento = document.getElementById("valorComprimento");
  const valorLargura = document.getElementById("valorLargura");
  const valorPasso = document.getElementById("passo");
  const valorPuxada = document.getElementById("puxada");

  const sobrePosicao = parseInt(inputSobreposicao);
  const comprimentoTela = parseInt(inputComprimento);
  const larguraTela = parseInt(inputLargura);
  const quantiaDePecas = parseInt(inputPecas);

  const passo = (parseFloat(inputMalha) + parseFloat(inputFio)) * 2;
  valorPasso.innerHTML = "Passo: " + passo;

  const fios = ((larguraTela / passo) * 2).toFixed(2);

  const ganchoSimples = comprimentoTela + sobrePosicao + 100;
  const ganchoECapa = comprimentoTela + sobrePosicao + 60;
  const ganchoPlana = comprimentoTela + sobrePosicao;

  const trama = ((ganchoPlana / passo) * 2).toFixed(2);
  const tamanhoTrama = (larguraTela * 10 + 1000).toFixed(2);
  if(larguraTela > 1600){
    tamanhoTrama = (larguraTela * 8 + 1000).toFixed(2);
  }
  else if(larguraTela > 1900){
    tamanhoTrama = (larguraTela * 6 + 1000).toFixed(2);
  }

  const vaoLivre = document.getElementById("vao-livre");
  vaoLivre.innerHTML = `Vão Livre: ${larguraTela}`;

  const acabamento = document.getElementById("acabamento");
  acabamento.innerHTML = selectAcab.value;

  //ONDULAÇÃO SIMPLES
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

  //PNEUMÁTICA

  if (
    selectTela.value === "Pneumática" &&
    selectAcab.value === "Gancho Simples"
  ) {
    valorComprimento.innerHTML = `${ganchoSimples} C`;
    valorLargura.innerHTML = `${larguraTela} L`;
    let metragem = ganchoSimples * quantiaDePecas + 1600;
    let dividir = metragem / 10;
    let number = dividir;
    let puxada = (number / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
  }

  if (
    selectTela.value === "Pneumática" &&
    selectAcab.value === "Gancho Simples Invertido"
  ) {
    valorComprimento.innerHTML = `${ganchoSimples} C`;
    valorLargura.innerHTML = `${larguraTela} L`;
    let metragem = ganchoSimples * quantiaDePecas + 1600;
    let dividir = metragem / 10;
    let number = dividir;
    let puxada = (number / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
  }

  if (
    selectTela.value === "Pneumática" &&
    selectAcab.value === "Gancho e Capa"
  ) {
    valorComprimento.innerHTML = `${ganchoECapa} C`;
    valorLargura.innerHTML = `${larguraTela} L`;
    let metragem = ganchoECapa * quantiaDePecas + 1600;
    let dividir = metragem / 10;
    let number = dividir;
    let puxada = (number / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
  }

  if (
    selectAcab.value === "Sem Acabamento" &&
    selectTela.value === "Pneumática"
  ) {
    valorComprimento.innerHTML = `${comprimentoTela} C`;
    valorLargura.innerHTML = `${larguraTela} L`;
    let metragem = comprimentoTela * quantiaDePecas + 1600;
    let dividir = metragem / 10;
    let number = dividir;
    let puxada = (number / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
  }

    // // ONDULAÇÃO PLANA

    // if(selectTela.value === "Ondulação Plana" && selectAcab.value === "Gancho Simples"){
    //   valorComprimento.innerHTML = `${ganchoPlana} C`;
    //   valorLargura.innerHTML = `${larguraTela} L`;
    //   let metragem = ganchoPlana * quantiaDePecas + 1000;
    //   let dividir = metragem / 10;
    //   let number = dividir;
    //   let puxada = (number / 100).toLocaleString("pt-BR", {
    //     minimumFractionDigits: 2,
    //   });
      
    
    //   let medidaTrama = (tamanhoTrama / 100).toLocaleString("pt-BR", {
    //     minimumFractionDigits: 2,
    //   });
      
    //   valorPuxada.innerHTML = `Puxada: ${puxada} metros - ${fios} fios`;
    //   valorPuxada.insertAdjacentHTML(
    //     "afterend",
    //     `<p id="trama">Trama: ${trama} fios - ${medidaTrama} metros</p>`
    //   );
    // }
};

button.addEventListener("click", calcule);
