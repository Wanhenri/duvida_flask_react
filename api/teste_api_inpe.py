import requests
#from datetime import timedelta, date
from flask_restful import Resource
from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS
#from sys import exit

#import xmltodict

from xml.etree import ElementTree


class prevInpe:
    def get_prevInpe(self):
        response_forecast = requests.get(
            'http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml')

        prevCapitais = ElementTree.fromstring(response_forecast.content)

        return prevCapitais


class Inpe(Resource):
    def get(self):
        return {
            'status': 200,
            'response': "Funciona"
        }

    def post(self):
        inpe_reports = prevInpe()
        return inpe_reports


app = Flask(__name__)
api = Api(app)
CORS(app)

api.add_resource(Inpe, '/inpe')

if __name__ == '__main__':
    app.run(debug=True)
