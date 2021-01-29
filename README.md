## ----- Postgres -----
docker run,
    --name postgres, 
    -e POSTGRES_USER=zcaiobs,
    -e POSTGRES_PASSWORD=1234, 
    -e POSTGRES_DB=herois, 
    -p 5432:5432, 
    -d, 
    postgres

## ----- Adminer -----
docker run,
    --name adminer,
    -p 8080:8080,
    --link postgres:postgres,
    -d,
    adminer

## ----- MongoDB -----
docker run,
    --name mongodb,
    -p 27017:27017,
    -e MONGO_INITDB_ROOT_USERNAME=admin,
    -e MONGO_INITDB_ROOT_PASSWORD=admin,
    -d,
    mongo:4

docker exec -it mongodb,
    mongo --host localhost -u admin -p admin --authenticationDatabase admin,
    --eval "db.getSiblingDB('herois').createUser({user: 'zcaiobs', pwd: '1234', roles: [{role: 'readWrite', db: 'herois'}]})"

## ----- MongoClient -----
docker run,
    --name mongoclient,
    -p 3000:3000,
    --link mongodb:mongodb,
    -d,
    mongoclient/mongoclient
    
    
    ### -----------MySql-------------
    docker run --name mysql -e MYSQL_ROOT_PASSWORD=admin -p 3306:3306 -d mysql:5.6.51
docker run, --name mysqladm, -p 9001:8080, --link mysql:mysqladm, -d, adminer
