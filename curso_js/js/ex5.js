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
        console.log(paises); 
        var comboPaises = $("#paises");
        let strOptions = comboPaises.html();
        $.each(paises, function( indice, valor ) {
            console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor.name);
            strOptions += '<option value="' + valor.alpha2Code + '">' + valor.name + '</option>';
            
        });
        comboPaises.html(strOptions);
    }

    obter_paises(carregar_combo_callback);
    

})