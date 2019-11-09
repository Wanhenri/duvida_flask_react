import requests

url=  "curl -v -L http://apiadvisor.climatempo.com.br/api/v1/climate/rain/locale/3477?"

headers = {
    'Authorization': 'Token ##################'}


resp= requests.get(url, headers=headers)

print(resp.status_code)