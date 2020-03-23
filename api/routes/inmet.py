import requests
import json
from flask import request
from flask_restful import Resource
from datetime import datetime
import datetime


def parseData(r):
    d = dict()
    for l in r.splitlines():
        s = l.split()
        d[s[0]] = {
            "Ano": s[4],
            "Mes": s[5],
            "Dia": s[6],
            "Hora": s[7],
            "Latitude": s[1],
            "Longitude": s[2],
            "Altitude": s[3],
            "Temp": s[8],
            "Tmax": s[9],
            "Tmin": s[10],
            "UR": s[11],
            "URmax": s[12],
            "URmin": s[13],
            "Prec": s[24]
        }
    return d


def get_inmet(date):
    print("teste",date)
    date = datetime.datetime.strptime(date, "%Y%m%d")
    print("teste",date)
    result = dict()
    for hour in range(0, 23):
        date = date.replace(hour=hour)
        print(date)
        url = "http://tempook.com.br/DATABASE/UND_inmet_{}".format(
            date.strftime("%Y%m%d%H00.txt"))
        try:
            r = requests.get(url).text
            key = date.isoformat()
            result[key] = parseData(r)
        except:
            continue

    return result


class Inmet(Resource):
    def get(self):
        #date = request.args.get("date")
        date = "20200228"
        print("get",date)
        return get_inmet(date)

    #def post(self):
    #    json_data = request.get_json()
    #    date = json_data['date']
    #    inmet__reports = get_inmet(date)
    #    return inmet__reports
