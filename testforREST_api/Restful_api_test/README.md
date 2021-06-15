# install modules
npm install

# run the project
npm start

# Mongoose Pagination Example

# Environment variables
* `MONGODB_URI`, the mongodb uri for the api. By default the uri is `mongodb://localhost/database_name`

# Docker Compose
start the project
```
docker-compose up
```

## seed the database
create 50 products objects inside mongodb

```
docker exec -it api npm run seed
```