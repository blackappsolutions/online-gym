### Build
`mvn package && docker build --build-arg JAR_FILE=target/movement-fitness-backend-0.1.0.jar -t movement-fitness-backend`

### Run
`docker run --name fitness -p 8080:8080 movement-fitness-backend:latest`

### Attach
`docker exec -t -i b6295a9672d7 /bin/sh`
