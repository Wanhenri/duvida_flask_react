from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS

# Import routes
from routes.somar import Somar
from routes.teste import Teste

app = Flask(__name__)
api = Api(app)
CORS(app)

api.add_resource(Somar, '/somar')
api.add_resource(Teste, '/teste/<string:id>/<string:nome>')

if __name__ == '__main__':
    app.run(debug=True)
