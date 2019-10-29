from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS

# Import routes
from routes.somar import Somar
from routes.teste import Teste
from routes.inpe import Inpe

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(Somar, '/somar')
api.add_resource(Teste, '/teste')
api.add_resource(Inpe, '/inpe')

if __name__ == '__main__':
    app.run(debug=True)
