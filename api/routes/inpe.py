import requests
from flask_restful import Resource
from flask import request, Response

from xml.etree import ElementTree


class prevInpe:
    def get_prevInpe(self):
        response_forecast = requests.get(
            'http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml')
        #prevCapitais = ElementTree.fromstring(response_forecast.content)
        tree = ElementTree.fromstring(response_forecast.content)
        content = []
        for tag in tree.findall("metar"):
            metar = {}
            metar["codigo"] = tag.find("codigo").text
            metar["atualizacao"] = tag.find("atualizacao").text
            metar["pressao"] = tag.find("pressao").text
            metar["temperatura"] = tag.find("temperatura").text
            metar["tempo_desc"] = tag.find("tempo_desc").text
            metar["umidade"] = tag.find("umidade").text
            content.append(metar)
        return content


class Inpe(Resource):
    def get(self):
        inpe_reports = prevInpe().get_prevInpe()
        return inpe_reports
