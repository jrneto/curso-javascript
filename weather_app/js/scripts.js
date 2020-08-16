
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
        },
        min: 1,
        categories: ['21', '22', '23', '0', '1', '2', '3', '4', '5', '6', '7', '8']
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
            pointStart: 21
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

var weatherObject = {
    cidade : "",
    estado: "",
    pais: "",
    Temperature: "",
    texto_clima: "",
    icone_clima: ""
};

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
        "LocalObservationDateTime": "2020-08-13T19:35:00-03:00",
        "EpochTime": 1597358100,
        "WeatherText": "Algumas nuvens",
        "WeatherIcon": 36,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 26.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 80.0,
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
        "EffectiveDate": "2020-08-17T01:00:00-03:00",
        "EffectiveEpochDate": 1597636800,
        "Severity": 2,
        "Text": "Previsão de tempo chuvoso de domingo no fim da noite até Segunda-feira pela manhã",
        "Category": "rain",
        "EndDate": "2020-08-17T13:00:00-03:00",
        "EndEpochDate": 1597680000,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/extended-weather-forecast/36364?lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?lang=pt-br"
    },
    "DailyForecasts": [
        {
            "Date": "2020-08-13T07:00:00-03:00",
            "EpochDate": 1597312800,
            "Temperature": {
                "Minimum": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 90.0,
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
                "Icon": 34,
                "IconPhrase": "Predominantemente aberto",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=1&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=1&lang=pt-br"
        },
        {
            "Date": "2020-08-14T07:00:00-03:00",
            "EpochDate": 1597399200,
            "Temperature": {
                "Minimum": {
                    "Value": 70.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 89.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Parcialmente ensolarado",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Predominantemente aberto",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=2&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=2&lang=pt-br"
        },
        {
            "Date": "2020-08-15T07:00:00-03:00",
            "EpochDate": 1597485600,
            "Temperature": {
                "Minimum": {
                    "Value": 67.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 91.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Parcialmente ensolarado",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Nuvens esparsas",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=3&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=3&lang=pt-br"
        },
        {
            "Date": "2020-08-16T07:00:00-03:00",
            "EpochDate": 1597572000,
            "Temperature": {
                "Minimum": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 81.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Predominantemente nublado",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 12,
                "IconPhrase": "Pancadas de chuva",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=4&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/americana/36364/daily-weather-forecast/36364?day=4&lang=pt-br"
        },
        {
            "Date": "2020-08-17T07:00:00-03:00",
            "EpochDate": 1597658400,
            "Temperature": {
                "Minimum": {
                    "Value": 64.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 74.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 12,
                "IconPhrase": "Pancadas de chuva",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 12,
                "IconPhrase": "Pancadas de chuva",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
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
        "DateTime": "2020-08-13T20:00:00-03:00",
        "EpochDateTime": 1597359600,
        "WeatherIcon": 35,
        "IconPhrase": "Parcialmente nublado",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 78.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=20&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=20&lang=pt-br"
    },
    {
        "DateTime": "2020-08-13T21:00:00-03:00",
        "EpochDateTime": 1597363200,
        "WeatherIcon": 35,
        "IconPhrase": "Parcialmente nublado",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 77.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=21&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=21&lang=pt-br"
    },
    {
        "DateTime": "2020-08-13T22:00:00-03:00",
        "EpochDateTime": 1597366800,
        "WeatherIcon": 35,
        "IconPhrase": "Parcialmente nublado",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 75.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=22&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=22&lang=pt-br"
    },
    {
        "DateTime": "2020-08-13T23:00:00-03:00",
        "EpochDateTime": 1597370400,
        "WeatherIcon": 34,
        "IconPhrase": "Predominantemente aberto",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 74.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=23&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=1&hbhhour=23&lang=pt-br"
    },
    {
        "DateTime": "2020-08-14T00:00:00-03:00",
        "EpochDateTime": 1597374000,
        "WeatherIcon": 34,
        "IconPhrase": "Predominantemente aberto",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 72.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=0&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=0&lang=pt-br"
    },
    {
        "DateTime": "2020-08-14T01:00:00-03:00",
        "EpochDateTime": 1597377600,
        "WeatherIcon": 34,
        "IconPhrase": "Predominantemente aberto",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 71.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=1&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=1&lang=pt-br"
    },
    {
        "DateTime": "2020-08-14T02:00:00-03:00",
        "EpochDateTime": 1597381200,
        "WeatherIcon": 34,
        "IconPhrase": "Predominantemente aberto",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 71.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=2&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=2&lang=pt-br"
    },
    {
        "DateTime": "2020-08-14T03:00:00-03:00",
        "EpochDateTime": 1597384800,
        "WeatherIcon": 34,
        "IconPhrase": "Predominantemente aberto",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 70.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=3&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=3&lang=pt-br"
    },
    {
        "DateTime": "2020-08-14T04:00:00-03:00",
        "EpochDateTime": 1597388400,
        "WeatherIcon": 34,
        "IconPhrase": "Predominantemente aberto",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 69.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=4&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=4&lang=pt-br"
    },
    {
        "DateTime": "2020-08-14T05:00:00-03:00",
        "EpochDateTime": 1597392000,
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
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=5&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=5&lang=pt-br"
    },
    {
        "DateTime": "2020-08-14T06:00:00-03:00",
        "EpochDateTime": 1597395600,
        "WeatherIcon": 33,
        "IconPhrase": "Céu claro",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": 67.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=6&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=6&lang=pt-br"
    },
    {
        "DateTime": "2020-08-14T07:00:00-03:00",
        "EpochDateTime": 1597399200,
        "WeatherIcon": 2,
        "IconPhrase": "Predominantemente ensolarado",
        "HasPrecipitation": false,
        "IsDaylight": true,
        "Temperature": {
            "Value": 68.0,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://m.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=7&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/americana/36364/hourly-weather-forecast/36364?day=2&hbhhour=7&lang=pt-br"
    }
];



    var accuWheatherAPIKey = "NMpI0JIUnrbyPCM02tA1pBLAlAaTNWvN";
    

    function RetornarDiaSemana (strData){
        var data = new Date(strData); 
        var dia = data.getDay();
        return semana[dia];
    }
    
    function pegarTempoAtual(localCode) {
    
        $.ajax({
            url: "http://dataservice.accuweather.com/currentconditions/v1/" + localCode + "?apikey=" + accuWheatherAPIKey + "&language=pt-br",
            type: "GET",
            dataType: "json",
            // beforeSend : function(xhr, opts){
            //      if(tempTempoAtual) //just an example
            //      {
            //          $("#texto_clima").html(tempTempoAtual[0].WeatherText);
            //          $("#texto_temperatura").html(tempTempoAtual[0].Temperature.Metric.Value)
            //          console.log(tempTempoAtual);
            //          xhr.abort();
            //      }
            //  },
            success: function(data) {
                // $("#texto_clima").html(data[0].WeatherText);
                // $("#texto_temperatura").html(data[0].Temperature.Metric.Value)
                weatherObject.temeperatura = data[0].Temperature.Metric.Value;
                weatherObject.texto_clima = data[0].WeatherText;

                var iconNumber = data[0].WeatherIcon <= 9 ? "0" + String(data[0].WeatherIcon) : String(data[0].WeatherIcon);

                weatherObject.icone_clima = "https://developer.accuweather.com/sites/default/files/" + iconNumber + "-s.png";
                preencherClimaAgora(weatherObject.cidade,weatherObject.estado,weatherObject.pais,weatherObject.temeperatura,weatherObject.texto_clima,weatherObject.icone_clima);
                console.log(data);            
            },
            error: function() {
                console.log("Erro");
            }
        });
    }


    function pegarPrevisao5Dias(localCode) {
        $.ajax({
            url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + localCode + "?apikey=" + accuWheatherAPIKey + "&language=pt-br&metric=true",
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log("Five days: " , data);       
                
                $("#texto_max_min").html( String(data.DailyForecasts[0].Temperature.Minimum.Value) + "&deg; / " + String(data.DailyForecasts[0].Temperature.Maximum.Value) + "&deg; / ");
            
                preecherPrevisao5Dias(data.DailyForecasts);
            },
            error: function() {
                console.log("Erro");
            }
        });
    }

    function preecherPrevisao5Dias(previsoes) {

        $("#info_5dias").html("");

        var diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

        for (var a = 0; a < previsoes.length ; a++) {

            var dataHoje = new Date(previsoes[a].Date);

            var dia_semana = diasSemana[ dataHoje.getDay() ];

            var iconNumber = previsoes[a].Day.Icon <= 9 ? "0" + String(previsoes[a].Day.Icon) : String(previsoes[a].Day.Icon);

            icone_clima = "https://developer.accuweather.com/sites/default/files/" + iconNumber + "-s.png";
            maxima = String(previsoes[a].Temperature.Maximum.Value);
            minima = String(previsoes[a].Temperature.Minimum.Value);

            elementoHTMLDia = '<div class="day col">';
            elementoHTMLDia += '<div class="day_inner">';
            elementoHTMLDia +=     '<div class="dayname">';
            elementoHTMLDia +=         dia_semana;
            elementoHTMLDia +=     '</div>'; 
            elementoHTMLDia +=     '<div style="background-image: url(\'' + icone_clima + '\')" class="daily_weather_icon"></div>';
            elementoHTMLDia +=     '<div class="max_min_temp">';    
            elementoHTMLDia +=         minima + '&deg; / ' + maxima +  '&deg;';
            elementoHTMLDia +=     '</div>';
            elementoHTMLDia += '</div>';

            $("#info_5dias").append(elementoHTMLDia);

            elementoHTMLDia = "";
        }
    }

    function gerarGraficoTeste() {
        Highcharts.chart('container', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    }


    function gerarGrafico(horas, temperaturas) {
        Highcharts.chart('hourly_chart', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Temperatura hora a hora'
            },
            xAxis: {
                categories: horas
            },
            yAxis: {
                title: {
                    text: 'Temperatura (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                showInLegend: false,
                data: temperaturas
            }]
        });
    }
 

    function pegarPrevisaoHoraAHora(localCode) {
        $.ajax({
            url: "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" + localCode + "?apikey=" + accuWheatherAPIKey + "&language=pt-br&metric=true",
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log('hourly forecast: ', data);  
                
                var horarios = [];
                var temperaturas = [];

                for (var a = 0; a < data.length; a++) {
                    
                    var hora = new Date( data[a].DateTime ).getHours();

                    horarios.push( String(hora) + 'h' );
                    temperaturas.push( data[a].Temperature.Value ); 
                    
                }
                //gerarGraficoTeste();
                gerarGrafico(horarios, temperaturas);

            },
            error: function() {
                console.log("Erro");
            }
        });
    }

    
    function pegarLocalUsuario(lat, long) {
        $.ajax({
            url: "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + accuWheatherAPIKey + "&q=" + lat + "%2C" + long + "&language=pt-br",
            type: "GET",
            dataType: "json",           
            success: function(data) {
                console.log(data); 
                try {
                    weatherObject.cidade = data.ParentCity.LocalizedName;;
                } catch {
                    weatherObject.cidade = data.LocalizedName;
                } 
               
                weatherObject.estado = data.AdministrativeArea.LocalizedName;
                weatherObject.pais = data.Country.LocalizedName;

                var localCode = data.Key;
                pegarTempoAtual(localCode);
                pegarPrevisao5Dias(localCode);
                pegarPrevisaoHoraAHora(localCode);
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


    function preencherClimaAgora(cidade,estado,pais,temperatura,texto_clima,icone_clima) {
        var texto_local = cidade + ", " + estado + ", " + pais; 
        $("#texto_local").text(texto_local);
        $("#texto_clima").text(texto_clima);
        $("#texto_temperatura").html( String(temperatura) + "&deg;");
        $("#icone_clima").css("background-image", "url('" + weatherObject.icone_clima + "')");
    }

    pegarCoordenadasdoIP();


});