import requests
from flask import request
from datetime import timedelta, date
from flask_restful import Resource

from settings import api_url_forecast, api_token, api_url_observer
from controllers.Somar import SomarController


def get_weather(cidade, diasprevisao):
    response_forecast = requests.get(api_url_forecast + diasprevisao+'days?city=' +
                                     cidade + '&reference=Somar', headers={'x-api-key': api_token})
    json_res_forecast = response_forecast.json()

    response_observer = requests.get(
        api_url_observer + cidade + '&reference=Somar&days='+diasprevisao+'', headers={'x-api-key': api_token})
    json_res_observer = response_observer.json()

    weather_reports = []

    for diasprevisao_out in range(0, int(diasprevisao)):
        diasdeprevisao = str(date.today() + timedelta(diasprevisao_out))
        ezw = SomarController()
        json_report = ezw.get_weather(
            diasdeprevisao, json_res_forecast, json_res_observer)

        weather_reports.append(json_report)

    return weather_reports


class Somar(Resource):
    def get(self):
        return {
            'status': 200,
            'response': "Funciona"
        }

    def post(self):
        json_data = request.get_json()
        cidade = json_data['cidade']
        diasprevisao = json_data['diasprevisao']
        somar_reports = get_weather(cidade, diasprevisao)
        return somar_reports
