# tom

## Install
```
$ yarn
```
or
```
$ npm i
```

## Run in development mode
```
$ yarn dev
```
or
```
$ npm run dev
```

## Run in production mode
```
$ yarn start
```
or 
```
$ npm start
```

### Build and run docker image
```
docker build -t tom .
docker run -p 3000:3000 -i -t tom
```