
// Objeto para pegar os preços e as fotos das camisetas

var camisetas = {
    'branca': {
        
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 5.12,
                'foto': 'v-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.95,
                'foto': 'v-white-personalized.jpg' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 4.99,
                'foto': 'normal-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.77,
                'foto': 'normal-white-personalized.jpg' 
            }
        }
    },
    
    'colorida': {
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 6.04,
                'foto': 'v-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.47,
                'foto': 'v-color-personalized.png' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 5.35,
                'foto': 'normal-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.28,
                'foto': 'normal-color-personalized.jpg' 
            }
        }
    }
}


// parâmetros da pesquisa

var parametros_pesquisa = {
    "quantidade": 10,
    "cor": "Cor",
    "gola": "gola_v",
    "qualidade": "q150",
    "estampa": "sem_estampa",
    "embalagem": "bulk"
}


// Regras adicionais para o orçamento:

// 1. Verificar se há em localStorage os parâmetros do último orçamento e se houver, carregar a página com eles.

// 2. A camisa de qualidade alta (190g/m2) deve acrescer o preço unitário em 12%.

// 3. A embalagem unitária tem um custo de 0.15 por unidade

// 4. Após cálculo do preço, há que se aplicar um desconto por quantidade, sendo: 
    // faixa 1: acima de 1.000 - Desconto de 15%
    // faixa 2: acima de 500 - Desconto de 10%
    // faixa 3: acima de 100 - Desconto de 5%



// Resolução do desafio:



$(function(){

    var acrescimoCamisaAltaQualidade = 1.12;
    var precoEmbalagamUnitaria = 0.15;

    function carregarPaginaUltimoOrcamento() {
        if (localStorage["ultimo_orcamento"])  {
            console.log(localStorage["ultimo_orcamento"]);
            parametros_pesquisa = JSON.parse(localStorage["ultimo_orcamento"]);
            
            $("#quantidade").val(parametros_pesquisa.quantidade);
            $("#result_cor").text(parametros_pesquisa.cor);
            $("#result_quantidade").text(parametros_pesquisa.quantidade);
            $("#result_gola").text($("#" + parametros_pesquisa.gola).text());
            $("#result_qualidade").text($("#" + parametros_pesquisa.qualidade).text());
            $("#result_estampa").text($("#estampa").find(":selected").text());
            $("#result_embalagem").text($("#embalagem").find(":selected").text());   
    
            switch (parametros_pesquisa.cor) {
                case "Branca":
                    $("#branca").addClass("selected");
                    $("#colorida").removeClass("selected");
                    break;
                case "Cor":
                    $("#colorida").addClass("selected");
                    $("#branca").removeClass("selected");
                    
                    break;
                default:
                    alert("A cor especificada não existe!");
                    break;
            }
    
            switch (parametros_pesquisa.gola) {
                case "gola_v":
                    $("#gola_v").addClass("selected");
                    $("#gola_normal").removeClass("selected");                
                    break;
                case "gola_normal":
                    $("#gola_normal").addClass("selected");
                    $("#gola_v").removeClass("selected");
                    break;
                default:
                    alert("A gola especificada não existe!");
                    break;
            }
    
            switch (parametros_pesquisa.qualidade) {
                case "q150":
                    $("#q150").addClass("selected");
                    $("#q190").removeClass("selected");
                    break;
                case "q190":
                    $("#q190").addClass("selected");
                    $("#q150").removeClass("selected");
                    break;
                default:
                    alert("A qualidade especificada não existe!");
                    break;
            }
    
            switch (parametros_pesquisa.estampa) {
                case "com_estampa":
                    $('#estampa').val("com_estampa");
                    break;
                case "sem_estampa":
                    $('#estampa').val("sem_estampa");
                    break;
                default:
                    break;
            }  
            
            switch (parametros_pesquisa.embalagem) {
                case "bulk":
                    $('#embalagem').val("bulk");
                    break;
                case "unitaria":
                    $('#embalagem').val("unitaria");
                    break;
                default:
                    break;
            }
            AtualizarPrecoTela();
        } else {
            console.log(localStorage["ultimo_orcamento"]);
        }
    }
    

    carregarPaginaUltimoOrcamento();

    $("#quantidade").change(function(){
        parametros_pesquisa.quantidade = $(this).val(); 
        $("#result_quantidade").text(parametros_pesquisa.quantidade);
        AtualizarPrecoTela();
        console.log(parametros_pesquisa.quantidade);
    });

    $("#branca").click(function(){
        parametros_pesquisa.cor = $(this).text(); 
        $("#branca").addClass("selected");
        $("#colorida").removeClass("selected");
        $("#result_cor").text(parametros_pesquisa.cor);
        AtualizarPrecoTela();
        console.log(parametros_pesquisa.cor);
    });

    $("#colorida").click(function(){
        parametros_pesquisa.cor = $(this).text(); 
        $("#colorida").addClass("selected");
        $("#branca").removeClass("selected");
        $("#result_cor").text(parametros_pesquisa.cor);
        AtualizarPrecoTela();
        console.log(parametros_pesquisa.cor);
    });

    $("#gola_v").click(function(){
        parametros_pesquisa.gola = $(this).attr("id"); 
        $("#gola_v").addClass("selected");
        $("#gola_normal").removeClass("selected");
        $("#result_gola").text($(this).text());
        AtualizarPrecoTela();
        console.log(parametros_pesquisa.gola);
    });

    $("#gola_normal").click(function(){
        parametros_pesquisa.gola = $(this).attr("id"); 
        $("#gola_normal").addClass("selected");
        $("#gola_v").removeClass("selected");
        $("#result_gola").text($(this).text());
        AtualizarPrecoTela();
        console.log(parametros_pesquisa.gola);
    });

    $("#q150").click(function(){
        parametros_pesquisa.qualidade = $(this).attr("id"); 
        $("#q150").addClass("selected");
        $("#q190").removeClass("selected");
        $("#result_qualidade").text($(this).text());
        AtualizarPrecoTela();
        console.log(parametros_pesquisa.qualidade);
    });

    $("#q190").click(function(){
        parametros_pesquisa.qualidade = $(this).attr("id"); 
        $("#q190").addClass("selected");
        $("#q150").removeClass("selected");
        $("#result_qualidade").text($(this).text());
        AtualizarPrecoTela();
        console.log(parametros_pesquisa.qualidade);
    });

    $("#estampa").change(function(){
        parametros_pesquisa.estampa = $(this).val();  
        $("#result_estampa").text($(this).find(":selected").text());
        AtualizarPrecoTela();
        console.log(parametros_pesquisa.estampa);
    });

    $("#embalagem").change(function(){
        parametros_pesquisa.embalagem = $(this).val();
        $("#result_embalagem").text($(this).find(":selected").text());   
        AtualizarPrecoTela();   
        console.log(parametros_pesquisa.embalagem);
    });

    // 1. Crie uma função para calcular o preço baseado nos parâmetros da variável "parametros_pesquisa" e solte o 
    // valor no console para testar se está certo.
    function RetornaPrecoUnitario() {
        var precoCamiseta = 0;
        switch (parametros_pesquisa.cor) {
            case "Cor":
                if (parametros_pesquisa.gola == 'gola_v') {
                    if (parametros_pesquisa.estampa == 'com_estampa') {
                        precoCamiseta = camisetas.colorida.gola_v.com_estampa.preco_unit;
                    } else if (parametros_pesquisa.estampa == 'sem_estampa') {
                        precoCamiseta = camisetas.colorida.gola_v.sem_estampa.preco_unit;
                    }
                } else if (parametros_pesquisa.gola == 'gola_normal') {
                    if (parametros_pesquisa.estampa == 'com_estampa') {
                        precoCamiseta = camisetas.colorida.gola_normal.com_estampa.preco_unit;
                    } else  if (parametros_pesquisa.estampa == 'sem_estampa') {
                        precoCamiseta = camisetas.colorida.gola_normal.sem_estampa.preco_unit;
                    }
                }
                break;
            case "Branca":
                    if (parametros_pesquisa.gola == 'gola_v') {
                        if (parametros_pesquisa.estampa == 'com_estampa') {
                            precoCamiseta = camisetas.branca.gola_v.com_estampa.preco_unit;
                        } else if (parametros_pesquisa.estampa == 'sem_estampa') {
                            precoCamiseta = camisetas.branca.gola_v.sem_estampa.preco_unit;
                        }
                    } else if (parametros_pesquisa.gola == 'gola_normal') {
                        if (parametros_pesquisa.estampa == 'com_estampa') {
                            precoCamiseta = camisetas.branca.gola_normal.com_estampa.preco_unit;
                        } else  if (parametros_pesquisa.estampa == 'sem_estampa') {
                            precoCamiseta = camisetas.branca.gola_normal.sem_estampa.preco_unit;
                        }
                    }
                break;
            default:
                alert("Cor indisponível!"); 
        }

        window.localStorage.setItem("ultimo_orcamento", JSON.stringify(parametros_pesquisa));
        window.localStorage.setItem("teste", "xxx");
        return precoCamiseta;

    }

    function RetornaFotoCamisa() {
        var fotoCamisa = "";
        switch (parametros_pesquisa.cor) {
            case "Cor":
                if (parametros_pesquisa.gola == 'gola_v') {
                    if (parametros_pesquisa.estampa == 'com_estampa') {
                        fotoCamisa = camisetas.colorida.gola_v.com_estampa.foto;
                    } else if (parametros_pesquisa.estampa == 'sem_estampa') {
                        fotoCamisa = camisetas.colorida.gola_v.sem_estampa.foto;
                    }
                } else if (parametros_pesquisa.gola == 'gola_normal') {
                    if (parametros_pesquisa.estampa == 'com_estampa') {
                        fotoCamisa = camisetas.colorida.gola_normal.com_estampa.foto;
                    } else  if (parametros_pesquisa.estampa == 'sem_estampa') {
                        fotoCamisa = camisetas.colorida.gola_normal.sem_estampa.foto;
                    }
                }
                break;
            case "Branca":
                    if (parametros_pesquisa.gola == 'gola_v') {
                        if (parametros_pesquisa.estampa == 'com_estampa') {
                            fotoCamisa = camisetas.branca.gola_v.com_estampa.foto;
                        } else if (parametros_pesquisa.estampa == 'sem_estampa') {
                            fotoCamisa = camisetas.branca.gola_v.sem_estampa.foto;
                        }
                    } else if (parametros_pesquisa.gola == 'gola_normal') {
                        if (parametros_pesquisa.estampa == 'com_estampa') {
                            fotoCamisa = camisetas.branca.gola_normal.com_estampa.foto;
                        } else  if (parametros_pesquisa.estampa == 'sem_estampa') {
                            fotoCamisa = camisetas.branca.gola_normal.sem_estampa.foto;
                        }
                    }
                break;
            default:
                alert("Erro ao buscar foto!"); 
        }

        window.localStorage.setItem("ultimo_orcamento", JSON.stringify(parametros_pesquisa));
        window.localStorage.setItem("teste", "xxx");
        return fotoCamisa;

    }

    function CalcularPreco() {
        var precoUnitario = RetornaPrecoUnitario();
        $("#preco-unitario").text(precoUnitario.toFixed(2));
        var preco = precoUnitario;
        if (PodeCalcularPreco()) {
            preco *= parametros_pesquisa.quantidade;

            if (parametros_pesquisa.qualidade == 'q190') {
                preco = (preco * acrescimoCamisaAltaQualidade);
            }

            preco += CalcularPrecoEmbalagemUnitaria();

        } else {
            preco = 0;
        }        
        return preco;
    }

    function CalcularPrecoEmbalagemUnitaria() {
        var precoEmbalagem = 0;
        if (parametros_pesquisa.embalagem == "unitaria") {
            precoEmbalagem = parametros_pesquisa.quantidade * precoEmbalagamUnitaria;
        }
        $("#preco-embalagem").text(precoEmbalagem.toFixed(2));
        return precoEmbalagem;
    }

    function PodeCalcularPreco() {
        var temQuantidade = parametros_pesquisa.quantidade > 0;
        var temPrecoUnitario = RetornaPrecoUnitario() > 0;
        return temQuantidade && temPrecoUnitario;
    }

    function AtualizarPrecoTela() {
        $(".refresh-loader").show();
        window.setTimeout(function(){ 
            var precoTotal = CalcularPreco();
            console.log("precoTotal: " + precoTotal);
            var precoComDesconto = AplicarDesconto(precoTotal);
            $("#valor-total").text(precoComDesconto.toFixed(2));
            var foto = "img/" + RetornaFotoCamisa();
            $("#foto-produto").attr("src",foto);
            $(".refresh-loader").hide();
        },500)
        
    }

    // faixa 1: acima de 1.000 - Desconto de 15%
    // faixa 2: acima de 500 - Desconto de 10%
    // faixa 3: acima de 100 - Desconto de 5%
    function AplicarDesconto(valorTotal) {
        var precoDesconto = valorTotal;
        if (valorTotal >= 1000) {
            precoDesconto = (precoDesconto * 0.85);
            console.log("desconto 15%: " + precoDesconto);
        } else if (valorTotal < 1000 && valorTotal >= 500) {
            precoDesconto = (precoDesconto * 0.90);
            console.log("desconto 10%: " + precoDesconto);
        } else if (valorTotal >= 100) {
            precoDesconto = (precoDesconto * 0.95);
            console.log("desconto 5%: " + precoDesconto);
        } 

        return precoDesconto;
    }

    console.log(RetornaPrecoUnitario() );
    console.log(CalcularPreco() );
    
});














// Sugestão de etapas da resolução

    // 1. Crie uma função para calcular o preço baseado nos parâmetros da variável "parametros_pesquisa" e solte o 
    // valor no console para testar se está certo.

    // 2. Faça os eventos click e change para os filtros.
    
        // a. Faça o evento click para os filtros do tipo botão (.option-filter). Sempre que houver um click, 
        // remova a classe "selected" dos botões do grupo e depois aplique-a apenas ao que foi clicado para
        // que ele fique azul.

        // b. Faça o evento change para os filtros do tipo <select> e para o <input> de quantidade.

        // c. Sempre que um dos eventos acima ocorrer, atualize a variável "parametros_pesquisa" e rode a função para 
        // calcular o preço

    
    // 3. Altere a função do cálculo do preço. Em vez de soltar os valores no console, atualize as informações
    // nos elementos "result_", atualize o preço no elemento "valor-total" e mude o atributo "src" do elemento 
    // "foto-produto" para alterar a imagem mostrada (todas as imagens estão na pasta img).

    // 4. Adicione a funcionalidade de hide e show do spinner (elemento "refresh-loader") à função de cálculo de preço. 
    // Como não estamos consultando dados externos, o cálculo acaba sendo rápido demais, portanto use um setTimeout 
    // para deixar ele aparecer por pelo menos 2 segundos.

    // 5. Crie a funcionalidade do localStorage e ao carregar a página, consulte o localStorage, 
    // atualize a variável "parametros_pesquisa" e rode a função de cálculo de preço