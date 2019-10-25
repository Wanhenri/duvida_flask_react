import requests
from flask_restful import Resource
from flask import request, Response

#import xmltodict

from xml.etree import ElementTree


class prevInpe:
    def get_prevInpe(self):
        response_forecast = requests.get(
            'http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml')
        #prevCapitais = ElementTree.fromstring(response_forecast.content)
        return response_forecast.content


class Inpe(Resource):
    def get(self):
        return {
            'status': 200,
            'response': "Funciona"
        }

    def post(self):
        inpe_reports = prevInpe().get_prevInpe()
        return Response(inpe_reports, mimetype="application/xml")
