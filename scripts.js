const button = document.getElementById("calculator-button")

const selectTela = document.getElementById("tela")

const selectAcab = document.getElementById("acab")

calcule = () => {
    const inputMalha = document.getElementById("input-malha").value
    const inputFio = document.getElementById("input-fio").value
    const inputComprimento = document.getElementById("input-comprimento").value
    const inputLargura = document.getElementById("input-largura").value
    const inputPecas = document.getElementById("input-pecas").value

    const valorComprimento = document.getElementById("valorComprimento")
    const valorLargura = document.getElementById("valorLargura")
    const valorPasso = document.getElementById("passo")

    if(selectTela.value === "Ondulação Simples" && selectAcab.value === "Gancho Simples") {
        const comprimentoTela = parseInt(inputComprimento) + 100
        valorComprimento.innerHTML = comprimentoTela + " C";
        valorLargura.innerHTML = inputLargura + " L";
    }

    if(selectTela.value === "Ondulação Simples" && selectAcab.value === "Gancho Simples Invertido") {
        let comprimentoTela = parseInt(inputComprimento) + 100
        valorComprimento.innerHTML = comprimentoTela + " C";
        valorLargura.innerHTML = inputLargura + " L";
    }

        else if(selectTela.value === "Ondulação Simples" && selectAcab.value === "Gancho e Capa") {
            let comprimentoTela = parseInt(inputComprimento) + 60
            valorComprimento.innerHTML = comprimentoTela + " C"
            valorLargura.innerHTML = inputLargura + " L";
        }

        const passo = (parseFloat(inputMalha) + parseFloat(inputFio)) * 2
        valorPasso.innerHTML = "Passo " + passo

}



button.addEventListener("click", calcule)