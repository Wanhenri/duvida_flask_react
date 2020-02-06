import requests
from flask import request
import json
from datetime import date, timedelta
import datetime
from flask_restful import Resource

#Para obter o valor de 00
#Necessario colocar esse parametro de entrada na chamado no component ReactJS
hh=str(0).zfill(2) #https://stackoverflow.com/questions/39402795/how-to-pad-a-string-with-leading-zeros-in-python-3


StartDate = date.today() #Dia inicial
BeforeDate = StartDate - timedelta(days=1)  #Caso o dia inicial não exista, ele continua lendo o dia anterior

#Parametro formatados que passarão na função get_weather_TQ0666(Start,Before)
Start = StartDate.strftime("%Y/%m/%d/") + hh   #formatação padrao para a leitura no link + hh(sendo 00 ou 12)
Before = BeforeDate.strftime("%Y/%m/%d/") + hh #formatação padrao para a leitura no link + hh(sendo 00 ou 12) 


class definirLink:
    def __init__(self, dateJson, codigoDaLocalidade):
      self.dateJson = dateJson
      self.codigoDaLocalidade = codigoDaLocalidade
        
    def Link(self):
      return "http://ftp.cptec.inpe.br/modelos/tempo/WRF/ams_05km/recortes/grh/json/"+ str(self.dateJson) +"/"+ str(self.codigoDaLocalidade)+".json"  

              
def get_weather_wrf_ams05km(Start, Before, codigoDaLocalidade):
  cclasStart = definirLink(Start,codigoDaLocalidade)
  cclasBefore = definirLink(Before, codigoDaLocalidade)

  url=cclasStart.Link()
  response_forecast = requests.get(url)
  try:
    json_res_forecast = response_forecast.json()
    print("Start OK")
  except:
    url=cclasBefore.Link()
    response_forecast = requests.get(url)
    json_res_forecast = response_forecast.json()
    print("Before OK")
    return json_res_forecast
    
  return json_res_forecast

class Inpe_wrf_ams05km(Resource):
    def get(self):
        return {
            'status': 200,
            'response': "Funciona"
        }

    def post(self):
        json_data = request.get_json()
        codigoDaLocalidade = json_data['codigoDaLocalidade']
        reports = get_weather_wrf_ams05km(Start,Before,codigoDaLocalidade)
        return reports