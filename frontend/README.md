### Dev
```
ng generate component home
 
npm install bootstrap # and add to style.less
npm install ng2-file-upload

ng generate component video
ng generate service video/video
```
### Build App
`ng build --prod`

## [Your Angular apps as Docker containers](https://medium.com/@DenysVuika/your-angular-apps-as-docker-containers-471f570a7f2)

### Build Container Image
`docker image build -t movement-fitness-frontend .`

### Run Container Image
docker run -p 3000:80 --rm movement-fitness-frontend

