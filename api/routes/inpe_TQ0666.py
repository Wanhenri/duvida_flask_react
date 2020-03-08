import requests
from flask import request, Response
import json
from datetime import datetime, timedelta
from flask_restful import Resource


class definirLink:
    def __init__(self, dateJson, codigoDaLocalidade):
        self.dateJson = dateJson
        self.codigoDaLocalidade = codigoDaLocalidade

    def Link(self):
        return "http://ftp.cptec.inpe.br/modelos/tempo/BAM/TQ0666L064/recortes/grh/json/{date}/{codigoLocalidade}.json".format(
            date=self.dateJson, codigoLocalidade=self.codigoDaLocalidade)


def get_weather_TQ0666(Start, Before, codigoDaLocalidade):
    cclasStart = definirLink(Start, codigoDaLocalidade)
    cclasBefore = definirLink(Before, codigoDaLocalidade)

    json_res_forecast = {}
    try:
        url = cclasStart.Link()
        response_forecast = requests.get(url)
        json_res_forecast = response_forecast.json()
    except:
        url = cclasBefore.Link()
        response_forecast = requests.get(url)
        json_res_forecast = response_forecast.json()

    return json_res_forecast


class Inpe_TQ0666(Resource):
    def get(self):
        date = request.args.get("date")
        if(not date):
            return Response("Missing parameter date",status=400)
        codigoDaLocalidade = request.args.get("codigoDaLocalidade")
        if(not codigoDaLocalidade):
            return Response("Missing parameter codigoDaLocalidade",status=400)

        # Dia inicial
        StartDate = datetime.strptime(date, "%Y-%m-%d").strftime(
            "%Y/%m/%d/00") if date != None else datetime.today().strftime("%Y/%m/%d/00")
        # Caso o dia inicial não exista, ele continua lendo o dia anterior
        BeforeDate = (datetime.today() - timedelta(days=1)
                      ).strftime("%Y/%m/%d/00")
        reports = get_weather_TQ0666(StartDate, BeforeDate, codigoDaLocalidade)
        return reports["datasets"][0]
