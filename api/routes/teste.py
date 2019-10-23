from flask_restful import Resource


class Teste(Resource):
    def get(self, id, nome):
        return {
            'status': 200,
            'response': "Funciona com o id {} e nome {}".format(id, nome)
        }

    def post(self):
        return {
            'status': 201,
            'response': 'Created successfully'
        }
