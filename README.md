# Nest Micro Demo

Este repositório implementa um demo da arquitetura de microserviços utilizando
NestJS e Kafka. Ele consiste de:

  - Um microserviço chamado http-gateway
    responsável por receber requisições HTTP e rotea-las para o microserviço
    adequado.
  - Um microserviço chamado math que implementa operações matemáticas de soma
    e multiplicação.

## Como Rodar

Verifique que seu ambiente possuí:

  - NodeJS v14.x.x
  - Yarn
  - Kafka na url `localhost:29092` (utilize o arquivo docker-compose).

Em seguida execute na raíz do repositório o comando:

```
yarn
```

Para instalar todas as dependências do projeto. Agora basta subir os dois
microserviços utilizando o comando:

```
yarn start:dev
```

Nas pastas `packages/http-gateway` e `packages/math` respectivamente. Você já
deve estar pronto para testar os endpoints na url `http://localhost:3000`.

## Endpoints

Endpoints desta aplicação:

  - `POST /add` Recebe um array de números em formato url encoded e retorna a
    soma de todos eles.
  - `POST /multiply` Recebe um array de números em formato url encoded e
    retorna a multiplicação de todos eles.
