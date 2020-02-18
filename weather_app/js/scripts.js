
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
        "EffectiveDate": "2020-02-17T13:00:00-03:00",
        "EffectiveEpochDate": 1581955200,
        "Severity": 5,
        "Text": "Uma tempestade amanhã à tarde",
        "Category": "thunderstorm",
        "EndDate": "2020-02-17T19:00:00-03:00",
        "EndEpochDate": 1581976800,
        "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/extended-weather-forecast/45881?lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?lang=pt-br"
    },
    "DailyForecasts": [
        {
            "Date": "2020-02-16T07:00:00-03:00",
            "EpochDate": 1581847200,
            "Temperature": {
                "Minimum": {
                    "Value": 69.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 17,
                "IconPhrase": "Parcialmente nublado, com tempestades",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Predominantemente nublado",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=1&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=1&lang=pt-br"
        },
        {
            "Date": "2020-02-17T07:00:00-03:00",
            "EpochDate": 1581933600,
            "Temperature": {
                "Minimum": {
                    "Value": 70.0,
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
                "Icon": 15,
                "IconPhrase": "Tempestades",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Heavy"
            },
            "Night": {
                "Icon": 42,
                "IconPhrase": "Predominantemente nublado, com tempestades",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=2&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=2&lang=pt-br"
        },
        {
            "Date": "2020-02-18T07:00:00-03:00",
            "EpochDate": 1582020000,
            "Temperature": {
                "Minimum": {
                    "Value": 70.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Nuvens esparsas",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 42,
                "IconPhrase": "Predominantemente nublado, com tempestades",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=3&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=3&lang=pt-br"
        },
        {
            "Date": "2020-02-19T07:00:00-03:00",
            "EpochDate": 1582106400,
            "Temperature": {
                "Minimum": {
                    "Value": 69.0,
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
                "Icon": 6,
                "IconPhrase": "Predominantemente nublado",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Heavy"
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Nuvens esparsas",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=4&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=4&lang=pt-br"
        },
        {
            "Date": "2020-02-20T07:00:00-03:00",
            "EpochDate": 1582192800,
            "Temperature": {
                "Minimum": {
                    "Value": 69.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Predominantemente nublado",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Heavy"
            },
            "Night": {
                "Icon": 7,
                "IconPhrase": "Nublado",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=5&lang=pt-br",
            "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=5&lang=pt-br"
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