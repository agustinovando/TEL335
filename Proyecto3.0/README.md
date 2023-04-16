# Proyecto de Diseno de Aplicaciones Web y Moviles

A continuación se encontrara el proyecto de aplicaciones web y móviles el cual consiste en una aplicación la cual entregara información acerca de los espacios libres de un estacionamiento. Por otro lado, también se podrá reservar un estacionamiento.

## Installation

Se debe contener Docker y git para el proyecto.
Clonar este repositorio en una carpeta
Entrar a la carpeta donde fue clonado el proyecto y correr el siguiente comando

```bash
docker-compose up --build
```

Para eliminar los contenedores
```bash
docker-compose down
```

## Usage

El proyecto se utiliza MERN, es decir, MongoDB como base de datos, Express para conectar la base de datos, React para el frontend y Node js.

Los puertos utilizados son:
mongoDB: 27017
React: 3000
node-api: 5000

```bash
Para entrar a mongoDB via terminal se debe correr:
docker exec -it mongo-db bash
mongosh
show dbs
```

## Integrantes
Agustin Ovando Saenz
Sebastian Jara Palomino
Juan de Dios Larrea
Gonzalo Soto Ulloa