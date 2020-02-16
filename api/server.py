from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS

# Import routes
from routes.somar import Somar
from routes.teste import Teste
from routes.inpe import Inpe
from routes.inmet import Inmet
from routes.inpe_TQ0666 import Inpe_TQ0666
from routes.wrf_ams05km import Inpe_wrf_ams05km

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(Somar, '/somar')
api.add_resource(Teste, '/teste')
api.add_resource(Inpe, '/inpe')
api.add_resource(Inmet, '/inmet')
# nova rota
api.add_resource(Inpe_TQ0666, '/inpe_TQ0666')
api.add_resource(Inpe_wrf_ams05km, '/inpe_wrf_ams05km')

if __name__ == '__main__':
    app.run(debug=True)
