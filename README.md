#### Node JS and TypeOrm Setup and Deployment Prerequisites
1.	Creating the Bolierplate code for TypeORM
-  install typeorm on local ```npm install -g typeorm```
- execute the command to generate the typeorm basecode   
```typeorm --name <projectname> --database <database>```
- after boilerplate codes have been generated, execute ```npm install``` to download all dependencies for node 
- install express framework using the following command ```npm install express --save```
- install body-parder using the following ```command npm install body-parser --save```
- install nodemon for watching code changes ```npm install -g nodemon```
- add the following scripts on package.json
```"snm": "nodemon src/index.ts"```

2.	Connecting to MongoDB Atlas
- Create a User in MongoDB Atlas
- Build a New Cluster and after successful cluster creation, go to connect and copy the connection string provided.
```ex string:  mongodb+srv://sa:<password>@cl0sh0uf.mongodb.net/test?retryWrites=true&w=majority```
- make sure you have a database user.
- check network access  and eddit your whitelist entry to global ip 0.0.0.0/0
- copy the connection string on your ormconfig.json
   ```
   "type": "mongodb",
   "url": "mongodb+srv://sa:sa@cluster0-sh0uf.mongodb.net/test?retryWrites=true&w=majority",
   "database": "test",
   "useUnifiedTopology": true,
   "synchronize": true,
   ```

3.	Deploying the NodeJS App
- install pm2 to for node js deployment ```npm install -g pm2```
- install babel-cli for building the typeorm applications ```npm install -g babel-cli```
- add the following scripts on package.json
```
"build-ts": "tsc -p ."
"build": "npm run build-ts && npm run build-babel"
"build-babel": "babel -d ./dist ./src -s"
"pm2-start":  "pm2 start build/index.js --watch"
```
- run npm run build-babel to produce a build file and run pm2-start to deploy the app

Repo for sample Typeorm code: https://github.com/SeijiV13/xurpas-typeorm

