# Node Express Mongo Docker Template

* Download source code or clone the repository
* Default API port : 8080 set in Dockerfile
* Default MongoDB port : 27017 set in docker-compose.yml
* Default Mongo-Express port: 8081 set in docker-compose.yml

## Deploy services
```
docker-compose up -d
```

## API service
* Request
```
curl -X GET http://localhost:8080/ -H 'Content-Type: application/json' -H 'cache-control: no-cache'
```
* Response
```
{"message":"Hello Express"}
```

## Mongo-Express service
* Access Mongo-Express service in browser
```
http://localhost:8081
```

## Stop services
```
docker-compose down
```

## Documentation
* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [Docker-Node-JS-Image](https://hub.docker.com/_/node)
* [Mongo](https://hub.docker.com/_/mongo)
* [Mongo-Express](https://hub.docker.com/_/mongo-express)
* [Docker](https://docs.docker.com/)
* [Docker-up](https://docs.docker.com/compose/reference/up/)
* [Docker-Down](https://docs.docker.com/compose/reference/down/)