# Documentação de API - Endpoints

| Índice | Recurso  | Método HTTP Header | Descrição |
| ------------- | ------------- | ------------- | ------------- |
| 1	| /users?**intranetLogin=**	| GET | lista um usuário filtrando pelo respectivo intranetLogin |
| 2	| /users | GET | lista todos usuários |
| 3	| /users | POST | adiciona um novo usuário |
| 4	| /users/**<int:id>** | GET | lista dados somente do respectivo usuário **<int:id>** |
| 5	| /reports | GET | lista todos reportes |
| 6	| /reports/**<int:id>** | GET | lista dados somente do respectivo reporte **<int:id>** |
| 7	| /users/**<int:id>**/reports | POST | adiciona um novo reporte para um usuário **<int:id>** |
| 8	| /reports/**<int:id>** | PUT | altera dados de um respectivo reporte **<int:id>** |
| 9	| /reports/****<int:id>****| DELETE | deleta o respectivo reporte **<int:id>** |
| 10 | /users/**<int:id>**/reports/**<int:id>**/score | POST | adiciona uma nova pontuação vinculada ao reporte de um usuário |
| 11 | /users/**<int:id>**/score | GET | lista o total de pontos de um usuário **<int:id>** |
| 12 | /users/**<int:id>**/history | GET |lista todo histórico de ações que um usuário **<int:id>** teve no sistema |


## Descrição dos endpoints
--- 
### LISTAR DADOS SOMENTE DO RESPECTIVO USUÁRIO -> intranetLogin

#### REQUEST:

`
GET /users?intranetLogin=antonio.junior
`

#### RESPONSE:

```json
Status: 200 OK

Body:

{
    "id": 1,
	"roles_id" : 1,
    "name": "Antonio",
    "last_name": "de Pádua",
    "intranet_login": "antonio.junior",
    "department": "desenvolvimento",
    "updated_at": "2020-03-09T19:39:17.000Z",
    "created_at": "2020-03-09T19:39:17.000Z"
}
```

### LISTAR TODOS USUÁRIOS

#### REQUEST:

`
GET /users
`

#### RESPONSE:

```json
Status: 200 OK

Body:

[
    {
    	"id": 1,
		"roles_id" : 1,
    	"name": "Antonio",
    	"last_name": "de Pádua",
    	"intranet_login": "antonio.junior",
    	"department": "desenvolvimento",
    	"updated_at": "2020-03-09T19:39:17.000Z",
    	"created_at": "2020-03-09T19:39:17.000Z"
	},
    {
    	"id": 2,
		"roles_id" : 1,
    	"name": "Fulano",
    	"last_name": "de Tal",
    	"intranet_login": "fulano.tal",
    	"department": "desenvolvimento",
    	"updated_at": "2020-03-01T19:39:17.000Z",
    	"created_at": "2020-02-09T19:39:17.000Z"
	}
]
```

### ADICIONAR UM NOVO USUÁRIO

#### REQUEST:

`
POST /users
`

```json

Body:

{
    "name": "Antonio",
    "last_name": "de Pádua",
    "intranet_login" : "antonio.junior",
    "department": "desenvolvimento",
	"roles_id" : 1
}
```

#### RESPONSE:

```json
Status: 201 Created

Body:

{
    "id": 1,
	"roles_id" : 1,
    "name": "Antonio",
    "last_name": "de Pádua",
    "intranet_login": "antonio.junior",
    "department": "desenvolvimento",
    "updated_at": "2020-03-09T19:39:17.000Z",
    "created_at": "2020-03-09T19:39:17.000Z"
}
```

### LISTAR DADOS SOMENTE DO RESPECTIVO USUÁRIO **<int:id>**

#### REQUEST:

`
GET /users/**<int:id>**
`

#### RESPONSE:

```json
Status: 200 OK

Body:

{
    "id": 1,
	"roles_id" : 1,
    "name": "Antonio",
    "last_name": "de Pádua",
    "intranet_login": "antonio.junior",
    "department": "desenvolvimento",
    "updated_at": "2020-03-09T19:39:17.000Z",
    "created_at": "2020-03-09T19:39:17.000Z"
}
```

### ADICIONAR UM NOVO REPORTE

#### REQUEST:

`
POST /users/**<int:id>**/reports
`

```json
Body:

{
    "post_url": "http://n1.kingwiki.kinghost.net/como-inserir-um-registro-de-dominio-internacional-em-uma-ficha/",
    "provider" : "wiki-interna",
	"helpful" : true,
    "description": "necessário corrigir conclusão do artigo"
}
```

#### RESPONSE:

```json
Status: 201 Created

Body:

{
    "id": 1,
    "users_id": 1,
    "post_url": "http://n1.kingwiki.kinghost.net/como-inserir-um-registro-de-dominio-internacional-em-uma-ficha/",
	"provider" : "wiki-interna",
    "helpful": 1,
    "description": "necessário corrigir conclusão do artigo",
    "approved": null,
    "updated_at": "2020-03-09T19:49:45.000Z",
    "created_at": "2020-03-09T19:49:45.000Z"
}
```

### LISTAR DADOS SOMENTE DO RESPECTIVO REPORTE **<int:id>**

#### REQUEST:

`
GET /reports/**<int:id>**
`

#### RESPONSE:

```json
Status: 200 OK

Body:

{
    "id": 1,
    "users_id": 1,
    "post_url": "http://n1.kingwiki.kinghost.net/como-inserir-um-registro-de-dominio-internacional-em-uma-ficha/",
	"provider" : "wiki-interna",
    "helpful": 1,
    "description": "necessário corrigir conclusão do artigo",
    "approved": null,
    "updated_at": "2020-03-09T19:49:45.000Z",
    "created_at": "2020-03-09T19:49:45.000Z"
}
```

### LISTAR TODOS REPORTES

#### REQUEST:

`
GET /reports
`

#### RESPONSE:

```json
Status: 200 OK

Body:

[
    {
        "id": 1,
        "users_id": 1,
        "post_url": "http://n1.kingwiki.kinghost.net/como-inserir-um-registro-de-dominio-internacional-em-uma-ficha/",
		"provider" : "wiki-interna",
        "helpful": 1,
        "description": "necessário corrigir conclusão do artigo",
        "approved": null,
        "updated_at": "2020-03-09T19:49:45.000Z",
        "created_at": "2020-03-09T19:49:45.000Z"
    },
    {
        "id": 2,
        "users_id": 1,
        "post_url": "https://king.host/wiki/artigo/comandos-uteis-para-ssh/",
		"provider" : "wiki-externa",
        "helpful": 0,
        "description": "comandos informados não funcionam",
        "approved": null,
        "updated_at": "2020-03-09T19:53:55.000Z",
        "created_at": "2020-03-09T19:53:55.000Z"
    }
]
```

### ALTERAR DADOS DE UM RESPECTIVO REPORTE **<int:id>**

#### REQUEST:

`
PUT /reports/**<int:id>**
`

```json
Body:

{
    "post_url": "https://kingwiki.kinghost.net/wiki/artigo/comandos-uteis-para-ssh/",
    "approved" : true
}
```

#### RESPONSE:

```json
Status: 204 No Content
```

### DELETAR O RESPECTIVO REPORTE **<int:id>**

#### REQUEST:

`
DELETE /reports/**<int:id>**
`

#### RESPONSE:

```json
Status: 204 No Content
```

### ADICIONAR PONTUAÇÃO REFERENTE AO REPORTE DE UM USUÁRIO

#### REQUEST:

`
POST /users/**<int:id>**/reports/**<int:id>**/score
`

```json
Body:

{
    "provider" : "wiki-interna",
    "approved" : true,
    "has_solution" : false
}
```

#### RESPONSE:

```json
Status: 201 Created

Body:

{
    "id": 2,
    "users_id": 1,
    "reports_id": 1,
    "value": 50,
    "updated_at": "2020-03-16T02:52:10.000Z",
    "created_at": "2020-03-16T02:52:10.000Z"
}
```

### LISTAR TOTAL DE PONTOS DE UM USUÁRIO

#### REQUEST:

`
GET /users/**<int:id>**/score
`

#### RESPONSE:

```json
Status: 200 OK

Body:

{
    "id": 1,
    "users_id": 1,
    "total_score": 3800,
    "updated_at": "2020-03-16T04:56:18.000Z",
    "created_at": "2020-03-16T04:56:18.000Z"
}
```

### LISTAR HISTÓRICO DE AÇÕES QUE UM USUÁRIO **<int:id>** TEVE NO SISTEMA

#### REQUEST:

`
GET /users/**<int:id>**/history
`

#### RESPONSE:

```json
Status: 200 OK

Body:

[
    {
        "id": 1,
        "users_id": 4,
        "type": "CREATE",
        "description": "Usuário de id: 4 ganhou 60 pontos pelo reporte de 8",
        "ip": "192.168.0.1:8841",
        "browser": "PostmanRuntime/7.19.0",
        "created_at": "2020-07-25T23:14:50.000Z"
    },
    {
        "id": 2,
        "users_id": 4,
        "type": "CREATE",
        "description": "Usuário de id: 4 cadastrado no sistema",
        "ip": "192.168.0.1:8841",
        "browser": "PostmanRuntime/7.19.0",
        "created_at": "2020-07-25T23:15:15.000Z"
    }
]
```
