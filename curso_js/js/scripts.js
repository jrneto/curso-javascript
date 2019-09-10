//var caixa_azul = document.getElementById("caixa_azul").innerHTML;
//document.getElementById("caixa_azul").innerHTML = '<h1>' + caixa_azul + '</h1>';

//Aula 11
//function valor_imc(peso, altura) {
//    var imc = peso / (altura * altura);
//    return imc;
//}

//var peso = parseFloat(document.getElementById("peso").innerHTML);
//console.log(typeof peso);
//var altura = parseFloat(document.getElementById("altura").innerHTML)
//var imc = valor_imc(peso, altura);
//document.getElementById("imc").innerHTML = imc.toFixed(2);

//Aula 14
// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
    
// ];
            
// console.log(cursos[1].categorias[0]);

// Aula 15
var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1984,
    'nome_completo': function() {
        var nomeCompleto = this.nome + ' ' + this.sobrenome;
        return nomeCompleto;
    },
    'idade_aluno': function() {
        return 2019 - this.ano_nasc;
    } 
}

console.log(aluno.nome_completo());
console.log(aluno.idade_aluno());

//aula 16
console.log("--Aula 16--");

// document.getElementById("click-me").onclick = function () {
//     alert("Você clicou no botão");
// };

// document.getElementById("hover-me").onmouseover = function () {
//     alert("Você passou com o cursor no botão");
// };

// document.getElementById("leave-me").onmouseleave = function () {
//     alert("Você saiu com o cursor no botão");
// };

// document.onkeydown = function() {
//     alert('Você apertou alguma tecla ' + event.keyCode);
// };

//Aula 17
console.log("--aula 17--");
// document.getElementById("botao_cor").onclick =  function() {
//     document.getElementById("botao_cor").style['background-color'] = "purple";
//     document.getElementById("botao_cor").style.transform = "translateX(100px)";
// };
//forma 2
// document.getElementById("botao_cor").onclick =  function() {
//     this.style['background-color'] = "purple";
//     this.style.transform = "translateX(100px)";
// };

//forma 3
// var botao = document.getElementById("botao_cor");
// botao.onclick =  function() {
//     botao.style['background-color'] = "purple";
//     botao.style.transform = "translateX(100px)";
// };

//Aula 18
console.log("--Aula 18--");

// var elementos = document.getElementsByClassName("exemplo");
// console.log(elementos);
// elementos[0].innerHTML = "teste 1";

// var elementosP = document.getElementsByTagName("p");
// console.log(elementosP);

//Aula 19
console.log("--Aula 19--");

//var elementos = document.getElementsByClassName("exemplo");

// for (var i = 0; i < elementos.length; i++)
// {
//     elementos[i].style.color = "orange";
//     elementos[i].style['font-weight'] = "bold";
// }

// for (var e in elementos)
// {
//     console.log(e);
// }
// var count = 0
// while (count < elementos.length) {
//     elementos[count].style.color = "blue";
//     count++;
// }

// console.log(count);
// count = 2;
// do {
//     elementos[count].style.color = "red";
//     count--;
// } while (count != 0);

//
//Aula 19
 console.log("--Aula 27--");
// console.log("Mensagem 1");

// window.setTimeout(function() {
//     console.log("Mensagem 2");
// },3000);

// document.getElementById("mostrar-loader").onclick = function () {

//     document.getElementById("spinner-loader").style.display = "initial";
//     window.setTimeout(function(){
//         document.getElementById("spinner-loader").style.display = "none";
//     }, 5000);

// }; 

// var count = 0;
//     window.setInterval(function(){
//         console.log(count);
//         count++;
//     }, 1000);

var relogio = document.getElementById("relogio");
relogio.innerHTML = "";

window.setInterval(function() {
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    relogio.innerHTML = h + ':' + m + ':' + s;
},1000); 

