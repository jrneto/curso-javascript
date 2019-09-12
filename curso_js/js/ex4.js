
console.log("--Exercício 1--");

var comboEstado = document.getElementById("estados");

 if (window.localStorage['indice_estado_sel']) {
     comboEstado.value = window.localStorage['indice_estado_sel'];
 }

 comboEstado.onchange = function() {
    var estado_sel = this.value;
    console.log(estado_sel);
    window.localStorage.setItem("indice_estado_sel", estado_sel);
}

console.log("--Exercício 2--");

var btnConfirmar =  document.getElementById("confirmar_pedido");

function add_left_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }    
}

function format_date(timestamp) {
    var dias = add_left_zero(new Date(timestamp).getDate());
    var mes = add_left_zero(new Date(timestamp).getMonth() + 1);
    var ano = add_left_zero(new Date(timestamp).getFullYear());

    return dias +"/"+ mes +"/"+ ano;
}

btnConfirmar.onclick = function() {
    
    var envios = document.getElementById("envios").value;
    if (envios == "escolha") {
        alert("Escolha um modelo de envio.");
        return;
    } else {
        if (envios == "normal") {
            var dias_entrega = 18;
        } else if (envios == "express") {
            var dias_entrega = 12;
        }
    }

    var data_pedido = document.getElementById("data_pedido");
    var data_entrega = document.getElementById("data_entrega");
    var data = new Date().getTime(); //data em milesgundos desde epoch 1970    
    data_pedido.innerHTML = format_date(data);

    var data_entrega_calc = data + (dias_entrega * 86400000)

    data_entrega.innerHTML = format_date(data_entrega_calc);


};


console.log("--Exercício 3--");

var cronometroArea = document.getElementById("cronometro"); 

var init_cronometro;
var tempo_passado;
var hora_inicio, horas, resto, minutos, segundos, milesegundos;
var comecar_parar = document.getElementById("comecar_parar");

comecar_parar.onclick = function () {    
    if (this.innerHTML == "Começar")  {
        this.innerHTML = "parar";
        
        if (!hora_inicio) {
            hora_inicio = new Date().getTime();
        } else {
            hora_inicio = new Date().getTime() - tempo_passado;
        }
        

        init_cronometro = window.setInterval(function(){
            
            hora_atual = new Date().getTime();        
            tempo_passado = hora_atual - hora_inicio;
            
            horas = Math.floor(tempo_passado / 3600000);
            resto = tempo_passado - (horas * 3600000);
            
            minutos = Math.floor(resto / 6000);
            resto -= (minutos * 6000);

            segundos = Math.floor(resto / 1000);
            resto -= (segundos * 1000);

            milesegundos = resto;

            cronometroArea.innerHTML = add_left_zero(horas) + ":" +
                                       add_left_zero(minutos) + ":" +
                                       add_left_zero(segundos) + ":" +
                                       add_left_zero(milesegundos);
        },10);
    } else {
        this.innerHTML = "Começar";
        window.clearInterval(init_cronometro);        
    }
    
};

var btnZerar = document.getElementById("zerar");
btnZerar.onclick = function() {
    window.clearInterval(init_cronometro);   
    tempo_passado = 0;
    hora_inicio = new Date().getTime();
    cronometroArea.innerHTML = "00:00:00 000";
    comecar_parar.innerHTML = "Começar";    
};

console.log("--Exercício 4--");

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

function calcularTotalArrecadado() {
    var total = 0;
    for (var i = 0; i < carros.length; i++){
        switch (carros[i].categoria) {
            case '1':
                total += 11.22;
                break;
            case '2':
                total += 22.45;
                break;
            case '3':
                total += 16.88;
                break;  
            case '4':
                total += 33.65;
                break;       
            default:
                break;
        }
    }
    document.getElementById("faturamento_total").innerHTML = total.toFixed(2);
}

calcularTotalArrecadado();