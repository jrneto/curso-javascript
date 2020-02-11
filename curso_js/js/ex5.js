$(document).ready(function(){
    
    function obter_paises(callback) {
        $.ajax({
            url : "https://restcountries.eu/rest/v2/all",
            type: "GET",
            dataType: "json",
            success: function(data){
                callback(data);
            },
            error: function(){
                console.log("Erro na requisição");
            }  
        });
    }

    function carregar_combo_callback(paises) {
        //console.log(paises); 
        var comboPaises = $("#paises");
        let strOptions = comboPaises.html();
        $.each(paises, function( indice, valor ) {
            //console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor.name);
            strOptions += '<option value="' + valor.alpha2Code + '">' + valor.name + '</option>';
            
        });
        comboPaises.html(strOptions);
    }

    obter_paises(carregar_combo_callback);
 
    var cursos = [
        {
            "titulo": "PHP",
            "aval": []
        },
        {
            "titulo": "Javascript",
            "aval": [5,5,4.5,4,5,5,5,4.5]
        },
        {
            "titulo": "Python",
            "aval": [5,5,4,4,5,3,5,4,4,5]
        },
        {
            "titulo": "Machine Learning",
            "aval": [5,5,4.5]
        }
    ];

    function calcular_media(cursos) {
        try {
            if (!cursos || cursos.length == 0) {
                throw "Não existem cursos!!";
            }

            var soma_nota = 0;

            for (var i = 0; i < cursos.length; i++) {
                
                try {
                    if (!cursos[i].aval || cursos[i].aval.length == 0) {
                        throw "Curso " + cursos[i].titulo + " não possui nenhuma avaliação";
                    }

                    if (cursos[i].aval.length < 5) {
                        throw "Curso " + cursos[i].titulo + " não tem avaliações suficientes";
                    }

                    soma_nota = 0;

                    for (var n = 0; n < cursos[i].aval.length; n++) {
                        soma_nota += cursos[i].aval[n];
                    }

                    var media = soma_nota / cursos[i].aval.length

                    console.log("A média de notas do curso " + cursos[i].titulo + " é: " + media.toFixed(2));

                } catch(err) {
                    console.log('Erro ao calcular média: ' + err);
                }
            
            } 
            console.log("fim");
        } catch (err) {
            console.log('Erro: ' + err);
        }

    }
    
    calcular_media(cursos);

    var theUserNameSpace = {
        "usuarios": {
            "33884h": "João Gomes",
            "43585f": "Maria Luisa",
            "93661h": "Pedro Henqrique",
            "23172g": "Paula Carvalho",
        },
        "acessos": [
            {
                "usuario": "33884h",
                "data": "10/07/18"
            },
            {
                "usuario": "33884h",
                "data": "11/07/18"
            },
            {
                "usuario": "43585f  ",
                "data": "19/07/18"
            },
            {
                "usuario": "93661h",
                "data": "24/07/18"
            },
            {
                "usuario": "23172g",
                "data": "13/08/18"
            },
            {
                "usuario": "93661h",
                "data": "14/08/18"
            }
        ],
        'imprimir_acessos': function() {
            for (var a = 0; a < this.acessos.length; a++) {
                $("#acessos").append('<p>Acesso de ' + this.usuarios[this.acessos[a].usuario] + ', no dia ' +  this.acessos[a].data + '</p>');
            }
        }
     }
    
     theUserNameSpace.imprimir_acessos();

     function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

     function pegar_pergunta(callback) {
        $.ajax({
            url : "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
            type: "GET",
            dataType: "json",
            success: function(data){
                callback(data.results[0]);
            },
            error: function(){
                console.log("Erro na requisição");
            }  
        });
    }

    $("#nova_pergunta").click(function(){
        $("#opcoes").html("");
        $("#erro_acerto").html("");
        $("#pergunta").html("");
        $("#nova_pergunta").hide("");
        pegar_pergunta(gerar_pergunta);
    });

    function gerar_pergunta(pergunta) {
        $("#erro_acerto").hide();
        $("#pergunta").html(pergunta.question);
        var resposta_correta = pergunta.correct_answer;
        var respostas = pergunta.incorrect_answers;
        respostas.push(resposta_correta);
        respostas = shuffle(respostas); 
        var respostasHtml = "";
        for (var i = 0; i < respostas.length; i++) {
            $("#opcoes").append('<input type="radio" name="opcao" value="' + respostas[i] + '"> ' + respostas[i] + '<br>');
        } 

        $("#opcoes input[name='opcao']").change(function(){
            $("#submeter").show();
        });

        console.log("resposta correta: " + resposta_correta);
        console.log("respostas: " + respostas);
   

        $("#submeter").click(function(){
            var resposta_escolhida = $("#opcoes input[name='opcao']:checked").val();

            if (resposta_escolhida == resposta_correta) {
                $("#erro_acerto").html("<span style='color: green'; font-weight: bold;'>Parabéns, você acertou! A resposta é: " + resposta_correta + "</span>");
            } else {
                $("#erro_acerto").html("<span style='color: red'; font-weight: bold;'>Você errou! A resposta é: " + resposta_correta + "</span>");
            }

            $("#erro_acerto").show();

            $("#opcoes input[name='opcao']").attr('disabled',true);

            $("#nova_pergunta").show();          

            $("#submeter").hide();
        });

        
    }

    pegar_pergunta(gerar_pergunta);
     
})