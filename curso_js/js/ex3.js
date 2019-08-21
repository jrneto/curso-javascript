console.log("--Exercício 1--");

function converterFahrenheit(tempCelsius) {
    return ((9 * (tempCelsius / 5)) + 32).toFixed(2);
}

var btnCalcular = document.getElementById("converter");

btnCalcular.onclick = function() {
    var temperatura = document.getElementById("temp_celsius").value;
    var div_temp_fahr =  document.getElementById("temp_fahr");
    var temp_fahr = converterFahrenheit(temperatura);
    div_temp_fahr.innerHTML = temp_fahr;
}

console.log("---------------");

console.log("--Exercício 2--");

var anoIni = 1930;
var anoFim = 2018;

var ul_anos_copa = document.getElementById("anos_copa");
ul_anos_copa.innerHTML = "";

while (anoIni <= anoFim) {    
    ul_anos_copa.innerHTML += "<li>" + anoIni + "</li>"; 
    anoIni += 4;
}

console.log("---------------");

console.log("--Exercício 3--");

var totalAulas = 20;
var minPresenca = 70;
var notaMinima = 6.5;

function calcularMedia(nota1, nota2) {
    return (parseFloat(nota1) + parseFloat(nota2)) / 2;
}

function calcularPctPresenca(num_faltas) {    
    var pctPresenca = (( (totalAulas - num_faltas)/totalAulas) * 100).toFixed(2);
    return pctPresenca;
}

function verificarAprovacao(nota1, nota2, num_faltas) {
   
    var divResult = document.getElementById("result");
    var pctPresenca = calcularPctPresenca(num_faltas);
    var mediaAluno = calcularMedia(nota1, nota2);

    if ( (pctPresenca < minPresenca) && (mediaAluno < notaMinima)) {
        divResult.innerHTML = "Aluno reprovado por falta (presença: " + pctPresenca + "%) e por não atingir média (" + notaMinima + ")!";
    } else if  (pctPresenca < minPresenca) {
        divResult.innerHTML = "Aluno reprovado por falta (presença: " + pctPresenca + "%)!";
    } else if (mediaAluno < notaMinima) {
        divResult.innerHTML = "Aluno reprovado por não atingir média! Média: " + mediaAluno;
    } else {

        divResult.innerHTML = "Aluno aprovado! Média: " + mediaAluno + "<br>";
        divResult.innerHTML += "% Presença: " + pctPresenca;

    }
}

function validarFormulario() {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var num_faltas = document.getElementById("n_faltas").value;

    if (nota1 == "" || nota2 == "") {
        alert("As notas são obrigatóras!");
        return false;
    }

    if (num_faltas == "") {
        num_faltas.value = 0;
    }

    if (num_faltas > totalAulas) {
        alert("Número de faltas não pode ser maior que " + totalAulas);
        return false;
    }

    return true;
}
 
document.getElementById("calcular").onclick = function () {
    if (validarFormulario()) {
        var nota1 = document.getElementById("nota1").value;
        var nota2 = document.getElementById("nota2").value;
        var num_faltas = document.getElementById("n_faltas").value;
        verificarAprovacao(nota1, nota2, num_faltas);
    }
}

console.log("---------------");

console.log("--Exercício 4--");

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

function vendas_sem_reembolso(vendas) {
    var retorno = [];
    for (i = 0; i < vendas.length; i++) {
        if (vendas[i].reembolso == null) {
            retorno.push(vendas[i]);
        }
    }
    return retorno;
}

function carregarTabelaVendas() {
    var vendas = vendas_sem_reembolso(vendas_cursos);
    var totalVendas = 0;
    var tableVendas = document.getElementById("vendas_cursos");
    tableVendas.innerHTML = "";
    var table = "";

    for (i = 0; i < vendas.length; i++) {

        table += '<tr><td>'+ vendas[i].aluno +'</td><td>' + vendas[i].data + '</td><td>' + vendas[i].valor + '</td></tr>'
        totalVendas += vendas[i].valor;
    }
    tableVendas.innerHTML = table;
    var tdTotalVendas = document.getElementById("total_vendas");
    tdTotalVendas.innerHTML = totalVendas;
}

console.log(vendas_sem_reembolso(vendas_cursos));