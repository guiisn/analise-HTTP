# Análise de Requisições HTTP

## Parte 01:

Esta parte do projeto tem como objetivo utilizar o Wireshark para filtrar os principais parâmetros da requisição e de resposta HTTP GET. Alguns exemplos desses parâmetros são o status, código de resposta, se usa ou não cookie e se usa HTTP GET CONDICIONAL, entre outros.

### Resultados da parte 01:

https://drive.google.com/file/d/1YhhgIN7tFT_diYNQYDfIi618lPAVR5tz/view?usp=sharing

## Parte 02:

Nesta parte do projeto, foram desenvolvidos endpoints GET, POST, PUT, DELETE, PATCH, OPTIONS e HEAD.

Para executar o projeto, siga as instruções abaixo:

Clone o repositório com o comando: 

```
git clone https://github.com/guiisn/analise-HTTP.git
```

URL do DockerHub:

```
https://hub.docker.com/r/guisnunex/analisehttp
```

Execute um pull no repositório do DockerHub: 

```
docker pull guisnunex/analisehttp
```

Execute o comando: 

``
docker build -t guisnunex/analisehttp .
``

Por fim, execute o comando: 

``
docker run -p 3000:3000 guisnunex/analisehttp
``

O servidor estará rodando na porta 3000.
