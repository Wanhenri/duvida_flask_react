from flask_restful import Resource
from flask import Response
import requests

from json import loads
from xml.etree import ElementTree as xml


class Teste(Resource):
    def get(self):
        data = requests.get(
            "http://servicos.cptec.inpe.br/XML/estacao/SBGR/condicoesAtuais.xml")
        return Response(data, mimetype="application/xml")

    def post(self):
        return {
            'status': 201,
            'response': 'Created successfully'
        }
