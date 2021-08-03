// Carne - 400 gr por pessoa + 6 horas - 650 gr
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/Agua - 1000 ml por pessoa + 6 horas 1500 ml
//Crianças valem por 0,5

//cria referência aos elementos manipulados pelo programa
let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.getElementById('resultado');

//Essa função executa o calculo
function calcular() {
    console.log('calculando....');

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if (adultos, criancas, duracao == "") {
        alert("Insira os valores!")

    } else {

        let qdtTotalCarne =
            carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
        console.log(qdtTotalCarne);
        let qdtTotalCerveja = cervejaPP(duracao) * adultos;
        console.log(qdtTotalCerveja);
        let qdtTotalBebidas =
            bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;
        console.log(qdtTotalBebidas);

        resultado.innerHTML = `<p>${Math.ceil(qdtTotalCarne/1000)}kg de Carne</p>`;
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} latas de Cerveja</p>`;
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} garrafas de refrigerantef`;
    }
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}