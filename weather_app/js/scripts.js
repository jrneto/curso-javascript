
var hichart = Highcharts.chart('container', {

    title: {
        text: 'Temperatura hora a hora'
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Temperatura'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Horário'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 22
        }
    },

    series: [{
        name: 'Temperaturas',
        data: [20, 19, 18, 17, 16, 15, 14, 14, 13, 12, 12, 10]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'center'
                }
            }
        }]
    }

});

$(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
//api_key: NMpI0JIUnrbyPCM02tA1pBLAlAaTNWvN
//http://dataservice.accuweather.com/currentconditions/v1/45881?apikey=NMpI0JIUnrbyPCM02tA1pBLAlAaTNWvN
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo

var tempCoordenadasIP = {
	"Version": 1,
	"Key": "41586",
	"Type": "City",
	"Rank": 75,
	"LocalizedName": "FAKE CITY",
	"EnglishName": "Vista Alegre do Alto",
	"PrimaryPostalCode": "",
	"Region": {
		"ID": "SAM",
		"LocalizedName": "América do Sul",
		"EnglishName": "South America"
	},
	"Country": {
		"ID": "BR",
		"LocalizedName": "Brasil",
		"EnglishName": "Brazil"
	},
	"AdministrativeArea": {
		"ID": "SP",
		"LocalizedName": "São Paulo",
		"EnglishName": "São Paulo",
		"Level": 1,
		"LocalizedType": "Estado",
		"EnglishType": "State",
		"CountryID": "BR"
	},
	"TimeZone": {
		"Code": "BRT",
		"Name": "America/Sao_Paulo",
		"GmtOffset": -3,
		"IsDaylightSaving": false,
		"NextOffsetChange": null
	},
	"GeoPosition": {
		"Latitude": -21.167,
		"Longitude": -48.63,
		"Elevation": {
			"Metric": {
				"Value": 610,
				"Unit": "m",
				"UnitType": 5
			},
			"Imperial": {
				"Value": 2000,
				"Unit": "ft",
				"UnitType": 0
			}
		}
	},
	"IsAlias": false,
	"SupplementalAdminAreas": [
		{
			"Level": 2,
			"LocalizedName": "Vista Alegre do Alto",
			"EnglishName": "Vista Alegre do Alto"
		},
		{
			"Level": 3,
			"LocalizedName": "Vista Alegre do Alto",
			"EnglishName": "Vista Alegre do Alto"
		}
	],
	"DataSets": [
		"AirQualityCurrentConditions",
		"AirQualityForecasts",
		"Alerts"
	]
};

var tempTempoAtual = [
    {
        "LocalObservationDateTime": "2020-04-20T21:35:00-03:00",
        "EpochTime": 1587429300,
        "WeatherText": "Céu claro",
        "WeatherIcon": 33,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 19.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 68.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/current-weather/36364?lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/current-weather/36364?lang=pt-br"
    }
];

var tempDailyFiveDaysForeCasts = {
    "Headline": {
        "EffectiveDate": "2020-04-25T07:00:00-03:00",
        "EffectiveEpochDate": 1587808800,
        "Severity": 7,
        "Text": "Este fim de semana será Ensolarado",
        "Category": "",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/extended-weather-forecast/36364?lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?lang=pt-br"
    },
    "DailyForecasts": [
        {
            "Date": "2020-04-20T07:00:00-03:00",
            "EpochDate": 1587376800,
            "Temperature": {
                "Minimum": {
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 82.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Predominantemente ensolarado",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Céu claro",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=1&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=1&lang=pt-br"
        },
        {
            "Date": "2020-04-21T07:00:00-03:00",
            "EpochDate": 1587463200,
            "Temperature": {
                "Minimum": {
                    "Value": 57.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 83.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Predominantemente ensolarado",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Céu claro",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=2&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=2&lang=pt-br"
        },
        {
            "Date": "2020-04-22T07:00:00-03:00",
            "EpochDate": 1587549600,
            "Temperature": {
                "Minimum": {
                    "Value": 57.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 83.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Predominantemente ensolarado",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Céu claro",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=3&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=3&lang=pt-br"
        },
        {
            "Date": "2020-04-23T07:00:00-03:00",
            "EpochDate": 1587636000,
            "Temperature": {
                "Minimum": {
                    "Value": 59.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 83.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Predominantemente ensolarado",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Céu claro",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=4&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=4&lang=pt-br"
        },
        {
            "Date": "2020-04-24T07:00:00-03:00",
            "EpochDate": 1587722400,
            "Temperature": {
                "Minimum": {
                    "Value": 60.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 85.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Ensolarado",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Céu claro",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=5&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=5&lang=pt-br"
        }
    ]
};

var tempTwelveHoursForecasts = [
    {
        "DateTime": "2020-04-20T22:00:00-03:00",
        "EpochDateTime": 1587430800,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 66.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=22&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=22&lang=pt-br"
    },
    {
        "DateTime": "2020-04-20T23:00:00-03:00",
        "EpochDateTime": 1587434400,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 65.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=23&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=23&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T00:00:00-03:00",
        "EpochDateTime": 1587438000,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 64.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=0&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=0&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T01:00:00-03:00",
        "EpochDateTime": 1587441600,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 63.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=1&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=1&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T02:00:00-03:00",
        "EpochDateTime": 1587445200,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 62.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=2&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=2&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T03:00:00-03:00",
        "EpochDateTime": 1587448800,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 61.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=3&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=3&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T04:00:00-03:00",
        "EpochDateTime": 1587452400,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 60.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=4&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=4&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T05:00:00-03:00",
        "EpochDateTime": 1587456000,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 59.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=5&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=5&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T06:00:00-03:00",
        "EpochDateTime": 1587459600,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 58.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=6&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=6&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T07:00:00-03:00",
        "EpochDateTime": 1587463200,
        "WeatherIcon": 2,
        "IconPhrase": "Predominantemente ensolarado",
        "HasPrecipitation": false,
        "IsDaylight": true,
        "Temperature": {
            "Value": 59.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=7&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=7&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T08:00:00-03:00",
        "EpochDateTime": 1587466800,
        "WeatherIcon": 2,
        "IconPhrase": "Predominantemente ensolarado",
        "HasPrecipitation": false,
        "IsDaylight": true,
        "Temperature": {
            "Value": 63.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=8&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=8&lang=pt-br"
    },
    {
        "DateTime": "2020-04-21T09:00:00-03:00",
        "EpochDateTime": 1587470400,
        "WeatherIcon": 2,
        "IconPhrase": "Predominantemente ensolarado",
        "HasPrecipitation": false,
        "IsDaylight": true,
        "Temperature": {
            "Value": 67.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=9&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=9&lang=pt-br"
    }
];



    var accuWheatherAPIKey = "NMpI0JIUnrbyPCM02tA1pBLAlAaTNWvN";
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    function RetornarDiaSemana (strData){
        var data = new Date(strData); 
        var dia = data.getDay();
        return semana[dia];
    }

    function RetornarHora (strData){
        var data = new Date(strData); 
        var hora = data.getHours();
        return hora;
    }
    
    function pegarTempoAtual(localCode) {
    
        $.ajax({
            url: "http://dataservice.accuweather.com/currentconditions/v1/" + localCode + "?apikey=" + accuWheatherAPIKey + "&language=pt-br",
            type: "GET",
            dataType: "json",
            beforeSend : function(xhr, opts){
                if(tempTempoAtual) //just an example
                {
                    $("#texto_clima").html(tempTempoAtual[0].WeatherText);
                    $("#texto_temperatura").html(tempTempoAtual[0].Temperature.Metric.Value)
                    console.log(tempTempoAtual);
                    xhr.abort();
                }
            },
            success: function(data) {
                $("#texto_clima").html(data[0].WeatherText);
                $("#texto_temperatura").html(data[0].Temperature.Metric.Value)
                console.log(data);            
            },
            error: function() {
                console.log("Erro");
            }
        });
    }

    function obterPrevisaoProximos5Dias(localCode) {
        $.ajax({
            url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + localCode + "?apikey=" + accuWheatherAPIKey + "&language=pt-br",
            type: "GET",
            dataType: "json",
            beforeSend : function(xhr, opts){
                if(tempDailyFiveDaysForeCasts) //just an example
                {
                    console.log(tempDailyFiveDaysForeCasts);
                    carregarDailyForecastes(tempDailyFiveDaysForeCasts.DailyForecasts);
                    xhr.abort();
                }
            },
            success: function(data) {
                console.log(data);   
                carregarDailyForecastes(data.DailyForecasts);         
            },
            error: function() {
                console.log("Erro");
            }
        });
    }

    function carregarDailyForecastes(infoDias)
    {
        if (!infoDias || infoDias.length == 0) {
            return;
        }

        $('#info_5dias > .day.col').each(function(index) { 
            console.log(index);
            var diaSemana = RetornarDiaSemana(infoDias[index].Date);
            $(this).children('.day_inner').children('.dayname').html(diaSemana);
            $(this).children('.day_inner').children('.max_min_temp').html(infoDias[index].Temperature.Minimum.Value + '&deg; / ' + infoDias[index].Temperature.Maximum.Value + '&deg;');
        });
 
    }

    function obterPrevisaoProximos12Horas(localCode) {
        $.ajax({
            url: "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" + localCode + "?apikey=" + accuWheatherAPIKey + "&language=pt-br",
            type: "GET",
            dataType: "json",
            beforeSend : function(xhr, opts){
                if(tempTwelveHoursForecasts) //just an example
                {
                    console.log(tempTwelveHoursForecasts); 
                    gerarGrafico(tempTwelveHoursForecasts);
                    xhr.abort();
                }
            },
            success: function(data) {
                console.log(data);  
                gerarGrafico(data);      
            },
            error: function() {
                console.log("Erro");
            }
        });
    }

    function gerarGrafico(dados) {
        console.log("Início geração gráfico");
        var novasTemps = [];
        for (var i = 0; i < dados.length; i++ )
        {
            novasTemps.push(dados[i].Temperature.Value);
        }
        console.log(novasTemps);
        console.log(dados[0].DateTime);
        console.log(RetornarHora(dados[0].DateTime));
        console.log(hichart);
        //hichart.plotOptions.series.pointStart = RetornarHora(dados[0].DateTime); 
        hichart.series[0].setData(novasTemps); 
    }

    function converteParaCelsius(tempF) {
        if (!tempF) {
            return 0;
        }
        return ((tempF - 32) * 5/9).toFixed();
    }

    function pegarLocalUsuario(lat, long) {
        $.ajax({
            url: "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + accuWheatherAPIKey + "&q=" + lat + "%2C" + long + "&language=pt-br",
            type: "GET",
            dataType: "json",
            beforeSend : function(xhr, opts){
                if(tempCoordenadasIP) //just an example
                {
                    $("#texto_local").html(tempCoordenadasIP.LocalizedName + ", " + tempCoordenadasIP.AdministrativeArea.LocalizedName + ", " + tempCoordenadasIP.Country.LocalizedName);
                    var localCode = tempCoordenadasIP.Key;
                    pegarTempoAtual(localCode); 
                    obterPrevisaoProximos5Dias(localCode);
                    obterPrevisaoProximos12Horas(localCode); 
                    xhr.abort();
                }
            },
            success: function(data) {
                console.log(data);
                $("#texto_local").html(data.LocalizedName + ", " + data.AdministrativeArea.LocalizedName + ", " + data.Country.LocalizedName);
                var localCode = data.Key;
                pegarTempoAtual(localCode);      
                obterPrevisaoProximos5Dias(localCode);     
                obterPrevisaoProximos12Horas(localCode); 
            },
            error: function() {
                console.log("Erro");
            }
        });
    }


    function pegarCoordenadasdoIP() {
        var lat_padrao = -23.550094;
        var long_padrao = -46.634158;
        $.ajax({
            url: "http://www.geoplugin.net/json.gp",
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log(data);
                if (data.geoplugin_latitude && data.geoplugin_longitude) {
                    pegarLocalUsuario(data.geoplugin_latitude, data.geoplugin_longitude);       
                } else {
                    pegarLocalUsuario(lat_padrao, long_padrao);       
                }
            },
            error: function() {
                console.log("Erro");
                pegarLocalUsuario(lat_padrao, long_padrao);    
            }
        });
    }

    pegarCoordenadasdoIP();
});