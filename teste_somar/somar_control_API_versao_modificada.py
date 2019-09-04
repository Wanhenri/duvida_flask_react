import requests
import json

from flask import jsonify 

from flask import Flask, request,  render_template
from flask_restful import Resource, Api
from flask_cors import CORS

from datetime import timedelta, date

import sys
sys.path.insert(0, "/home/wanderson/Documentos/secury_key")

from somar_key import *

app = Flask(__name__)
api = Api(app)
CORS(app)

variable = global_variable('')
api_token = variable.api_token
api_url_forecast = variable.api_url_forecast
api_url_observer = variable.api_url_observer


#function
class WeatherReport():
    def __init__(self, day, city, lat, lon, temperature_daily_min,temperature_daily_max,rel_humidity_daily_avg,max_temperature,min_temperature,max_rel_humidity,min_rel_humidity):
    	self.city = city
    	self.lat = lat
    	self.lon = lon
    	self.day = day
    	self.temperature_daily_min = temperature_daily_min
    	self.temperature_daily_max = temperature_daily_max
    	self.rel_humidity_daily_avg = rel_humidity_daily_avg
    	self.max_temperature = max_temperature
    	self.min_temperature = min_temperature
    	self.max_rel_humidity = max_rel_humidity
    	self.min_rel_humidity = min_rel_humidity

        
#function
class WRSomarController:

    def get_weather(self,date: str, data: dict, dataob: dict) -> (float, float,float):
        indexes = [i for i, d in enumerate(data['days']) if d.startswith(date)]


        if indexes == []:
            raise ValueError(f"There is no weather info on {date}")

        weather_reports = []

        index = indexes[0]
        temps_forecast = data['points']['forecast']
        temps_observed = dataob['points']['observed']
        config = data['points']['location']

        day = str(date)
        #day = data['days'][index]
        city = config['ref']
        lat = config['latitude']
        lon = config['longitude']

        temperature_daily_min = str(temps_forecast['temperature_daily_min'][index])
        temperature_daily_max = str(temps_forecast['temperature_daily_max'][index])
        rel_humidity_daily_avg = str(temps_forecast['rel_humidity_daily_avg'][index])
        
        max_temperature = str(temps_observed['max_temperature'][index])
        min_temperature = str(temps_observed['min_temperature'][index])
        max_rel_humidity = str(temps_observed['max_rel_humidity'][index])
        min_rel_humidity = str(temps_observed['min_rel_humidity'][index])
        
        
        weather_report = WeatherReport(day, city, lat, lon, temperature_daily_min,temperature_daily_max,rel_humidity_daily_avg,max_temperature,min_temperature,max_rel_humidity,min_rel_humidity)
        json_reports = json.dumps([weather_report.__dict__])
        return json_reports

#Display teste	
#cidade = 'RiodeJaneiro-RJ'
#diasprevisao = '7'

def get_weather(cidade,diasprevisao):
    response_forecast = requests.get(api_url_forecast + diasprevisao+'days?city='+ cidade +'&reference=Somar',headers={'x-api-key':api_token})
    json_res_forecast = response_forecast.json()

    response_observer = requests.get(api_url_observer + cidade +'&reference=Somar&days='+diasprevisao+'',headers={'x-api-key':api_token})
    json_res_observer = response_observer.json()

    weather_reports = []

    for diasprevisao_out in range(0,int(diasprevisao)):
        diasdeprevisao = str(date.today() +timedelta(diasprevisao_out))
        ezw = WRSomarController()
        json_report = ezw.get_weather(diasdeprevisao, json_res_forecast, json_res_observer)
        
        jsonData = json.loads(json_report)
        weather_reports.append(jsonData)
        json_reports = json.dumps([json_report for json_report in weather_reports])

    return json_reports

#a = get_weather(cidade,diasprevisao)
#print(a)
print('Starting Flask')

class Somar_API(Resource):
    @app.route('/self/', methods=['GET','POST'])
    def post(self):
        json_data = request.get_json()
        cidade = json_data['cidade']
        diasprevisao = json_data['diasprevisao']
        print(json_data)
        somar_reports = get_weather(cidade,diasprevisao)
        return jsonify(reports= somar_reports)

print('pós class Somar_API')



api.add_resource(Somar_API, '/somar_api')
if __name__ == '__main__':
    print('antes aap run')
    app.run(debug=True)

