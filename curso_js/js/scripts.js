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