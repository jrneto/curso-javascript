//1
console.log("Exercício 1");
var num1 = document.getElementById("num_1").innerHTML;
var num2 = document.getElementById("num_2").innerHTML;

var resultado = document.getElementById("resultado");

resultado.innerHTML = '<strong>' + (parseInt(num1) + parseInt(num2)) + '</strong>';

//2
console.log("Exercício 2");

function converterFahrenheit(tempCelsius) {
    return (9 * (tempCelsius / 5)) + 32;
}

var valor_caixa_azul = document.getElementById("caixa_azul").innerHTML;
var caixa_amarela = document.getElementById("caixa_amarela");
caixa_amarela.innerHTML = converterFahrenheit(valor_caixa_azul).toFixed(2);

//3
console.log("Exercício 3");

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

var novo_array = grupos.slice(-2,);
novo_array.push(["Mariana","Felipe","Carla"]);

console.log(novo_array);

//4
console.log("Exercício 4");
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_avaliacao': function () {
        return this.n_aval_1_estrela + 
               this.n_aval_2_estrelas +
               this.n_aval_3_estrelas +
               this.n_aval_4_estrelas +
               this.n_aval_5_estrelas;
    },
    'media_avaliacao': function () {
        return ( (this.n_aval_1_estrela * 1) +
                 (this.n_aval_2_estrelas * 2) +
                 (this.n_aval_3_estrelas * 3) +
                 (this.n_aval_4_estrelas * 4) +
                 (this.n_aval_5_estrelas * 5) ) / this.total_avaliacao();
    }
}

var categoria_principal = document.getElementById("categoria_principal");
categoria_principal.innerHTML = curso.categoria[0];

var total_aval = document.getElementById("total_aval");
total_aval.innerHTML = curso.total_avaliacao();
document.getElementById("media_aval").innerHTML = curso.media_avaliacao().toFixed(2);

//5
console.log("Exercício 5");
var pessoa = {
    'nome': "Jair",
    'sobrenome': "Bolsonaro",
    'email': "jair@gmail.com"
};

function montaTabela(obj) {
    return '<div class="tableBox"><table>' +
            '<tr>' + '<th>Nome Completo</th><th>Email</th>' + '</tr>' +
            '<tr>' + '<td>' + obj.nome + ' ' + obj.sobrenome + '</td>' +       
            '<td>' + obj.email + '</td>' + '</tr>' +
           '</table></div>'; 
}

document.getElementById("tabela").innerHTML = montaTabela(pessoa);