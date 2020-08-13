# API de Gamificação

Esta API é um projeto de código aberto que implementa conceitos de gamificação para incentivar a produção de texto em dois blogs do tipo **Wiki** através de uma API Restful. 
Desenvolvido em Node.js utilizando Express.js e banco de dados MySQL. Este repositório é apenas a API Restful. A API pode ser utilizada para qualquer blog que tenha as características de [Wiki](https://pt.wikipedia.org/wiki/Wiki).

---

## Requisitos de sistema (Mac OS, Windows or Linux)
* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install)
* [Node.js](https://nodejs.org/en/)
  
## Como desenvolver?

Copiar variáveis de ambiente:

```
cp .env.example .env
```

Instalar dependências:

```
npm install
```

Subir servidor MySQL e phpmyadmin:

```
docker-compose up --build
```

Rodar aplicação web:

```
npm start
```

---

## Documentação

* [API](/docs/api.md)

## Informações gerais

* Todos os endpoints retornam o formato `application/json`
* Todas requisições devem conter o header `Accept` : `application/json`
* Todas requisições POST e PUT devem conter o header `Content-Type` : `application/json`
* O projeto usa a biblioteca [Express.js](https://expressjs.com/pt-br/) para a base do projeto 