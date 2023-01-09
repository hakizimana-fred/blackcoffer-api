# Blackcoffer Visualizer Api
Nodejs Api with express and mongoose ORM
This api uses typescript

## How to use
To get started with this api follow the steps below

```shell
$ git clone https://github.com/hakizimana-fred/blackcoffer-api.git
$ cd blackcoffer-api
$ yarn install or npm install
```
## DATABASE
- This Api uses mongodb database.
  - [ ] Have mongodb installed in your system
## How to Seed Data into the database
- in the src directory navigate to helpers
  - [ ] You  have must have mongodb installed
  - [ ]run ts-node-esm seeder.ts



## START in Development Mode
```shell
$ yarn dev or npm run dev
```

## START in Production Mode
```shell
$ yarn build or npm run build
$ yarn start or npm start

```
## ENVIRONMENT VARIABLES

- Create **.env** file in the main directory and add the following

```shell
    MONGO_URI="Your MongoDB URI"
    PORT= "Put port number"
```