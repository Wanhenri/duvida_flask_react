import requests
import json
from flask import request
from flask_restful import Resource
from datetime import datetime


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
    date = datetime.strptime(date, "%Y-%m-%d")
    result = dict()
    for hour in range(0, 23):
        date = date.replace(hour=hour)
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
        date = request.args.get("date")
        return get_inmet(date)
