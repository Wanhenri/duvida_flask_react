import requests
from flask import request
from datetime import timedelta, date, datetime
from flask_restful import Resource

from settings import api_url_forecast, api_token, api_url_observer
from controllers.Somar import SomarController

from json import dumps


def get_weather(cidade, diasprevisao):

    if(isinstance(diasprevisao, str)):
        intervalo = int(diasprevisao)
    else:
        intervalo = diasprevisao

    response_forecast = requests.get("{}{}days?city={}&reference=Somar".format(
        api_url_forecast, diasprevisao, cidade), headers={'x-api-key': api_token})
    json_res_forecast = response_forecast.json()

    initial = datetime.today()

    final = datetime.today() + timedelta(days=intervalo)

    """
    response_observer = requests.get("{}{}&reference=Somar&initi_date={}&final_date={}".format(
        api_url_observer, cidade, initial, final), headers={'x-api-key': api_token})
    """
    response_observer = requests.get("{}{}&reference=Somar&days={}".format(
        api_url_observer, cidade, intervalo + 1), headers={'x-api-key': api_token})
    json_res_observer = response_observer.json()

    weather_reports = []

    ezw = SomarController()

    for diasprevisao_out in range(0, intervalo):
        diasdeprevisao = str(date.today() + timedelta(diasprevisao_out))
        json_report = ezw.get_weather(
            diasdeprevisao, json_res_forecast, json_res_observer)
        if(json_report):
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
