
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
    "LocalObservationDateTime": "2020-02-16T10:20:00-03:00",
    "EpochTime": 1581859200,
    "WeatherText": "Predominantemente nublado",
    "WeatherIcon": 6,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 40.2,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 100,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/pt/br/vista-alegre-do-alto/41586/current-weather/41586?lang=pt-br",
    "Link": "http://www.accuweather.com/pt/br/vista-alegre-do-alto/41586/current-weather/41586?lang=pt-br"
  }
];

var tempDailyForeCasts = {
    "Headline": {
        "EffectiveDate": "2020-03-14T07:00:00-03:00",
        "EffectiveEpochDate": 1584180000,
        "Severity": 4,
        "Text": "Agradável Sábado",
        "Category": "",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://m.accuweather.com/pt/br/santa-barbara-doeste/41461/extended-weather-forecast/41461?lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?lang=pt-br"
    },
    "DailyForecasts": [
        {
            "Date": "2020-03-10T07:00:00-03:00",
            "EpochDate": 1583834400,
            "Temperature": {
                "Minimum": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 88.0,
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
            "MobileLink": "http://m.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=1&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=1&lang=pt-br"
        },
        {
            "Date": "2020-03-11T07:00:00-03:00",
            "EpochDate": 1583920800,
            "Temperature": {
                "Minimum": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 88.0,
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
            "MobileLink": "http://m.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=2&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=2&lang=pt-br"
        },
        {
            "Date": "2020-03-12T07:00:00-03:00",
            "EpochDate": 1584007200,
            "Temperature": {
                "Minimum": {
                    "Value": 64.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 88.0,
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
            "MobileLink": "http://m.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=3&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=3&lang=pt-br"
        },
        {
            "Date": "2020-03-13T07:00:00-03:00",
            "EpochDate": 1584093600,
            "Temperature": {
                "Minimum": {
                    "Value": 66.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 88.0,
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
                "Icon": 35,
                "IconPhrase": "Parcialmente nublado",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=4&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=4&lang=pt-br"
        },
        {
            "Date": "2020-03-14T07:00:00-03:00",
            "EpochDate": 1584180000,
            "Temperature": {
                "Minimum": {
                    "Value": 68.0,
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
            "MobileLink": "http://m.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=5&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/santa-barbara-doeste/41461/daily-weather-forecast/41461?day=5&lang=pt-br"
        }
    ]
};

    var accuWheatherAPIKey = "NMpI0JIUnrbyPCM02tA1pBLAlAaTNWvN";
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

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
                if(tempDailyForeCasts) //just an example
                {
                    console.log(tempDailyForeCasts);
                    carregarDailyForecastes(tempDailyForeCasts.DailyForecasts);
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
                    xhr.abort();
                }
            },
            success: function(data) {
                console.log(data);
                $("#texto_local").html(data.LocalizedName + ", " + data.AdministrativeArea.LocalizedName + ", " + data.Country.LocalizedName);
                var localCode = data.Key;
                pegarTempoAtual(localCode);      
                obterPrevisaoProximos5Dias(localCode);      
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