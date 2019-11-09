import requests
from flask_restful import Resource
from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS

class hgBrasilPrev:
    def get_hgBrasilPrev(self):
        response = requests.get(
            'http://api.hgbrasil.com/weather?format=json-cors&key=#####')
        return response.content

class HgBrasil(Resource):
    def get(self):
        return {
            'status': 200,
            'response': "Funciona"
        }

    def post(self):
        hgBrasil_reports = hgBrasilPrev()
        return hgBrasil_reports

app = Flask(__name__)
api = Api(app)
CORS(app)

api.add_resource(HgBrasil, '/hgBrasil')

if __name__ == '__main__':
    app.run(debug=True)