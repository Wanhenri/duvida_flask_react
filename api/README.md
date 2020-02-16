# API

Esta API tem como objetivo reunir diversos serviços de previsão do tempo
de maneira acessível.

## Estrutura

```bash
.
├── README.md
├── requirements.txt
├── server.py
├── settings.py
├── routes
│   ├── somar.py
│   └── teste.py
├── schema
│   └── weather.py
└── controllers
    └── Somar.py
```

### Instalação

Para instalar os pacotes utilizados pela API execute o comando abaixo:

```bash
$ pip install requirements.txt
```

### Configuração

As confirgurações da API se encontram no arquivo settings.py. É necessário
configurar as chaves para cada serviço disponível.

### Execução

Para rodar a API, ative o ambiente virtual, com o comando abaixo:

```bash
$ source ./env/scripts/activate
(.env)
```

E então, execute a API com o seguinte comando:

```bash
$ python server.py
 * Serving Flask app "server" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 281-745-748
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

## Controllers

## Routes

## Schema