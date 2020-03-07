#### Node JS and TypeOrm Setup and Deployment Prerequisites
1.	Creating the Bolierplate code for TypeORM
a.  install typeorm on local npm install -g typeorm
b. execute the command to generate the typeorm basecode  
typeorm --name <projectname> --database <database>
c. after boilerplate codes have been generated, execute npm install to download all dependencies for node 
d. install express framework using the following command npm install express --save
e. install body-parder using the following command npm install body-parser --save
f. install nodemon for watching code changes npm install -g nodemon
g. add the following scripts on package.json
"snm": "nodemon src/index.ts"

2.	Connecting to MongoDB Atlas
a. Create a User in MongoDB Atlas
b. Build a New Cluster and after successful cluster creation, go to connect and copy the connection string provided.
ex string:  mongodb+srv://sa:<password>@cl0sh0uf.mongodb.net/test?retryWrites=true&w=majority
c. make sure you have a database user.
d. check network access  and eddit your whitelist entry to global ip 0.0.0.0/0
e. copy the connection string on your ormconfig.json
   "type": "mongodb",
   "url": "mongodb+srv://sa:sa@cluster0-sh0uf.mongodb.net/test?retryWrites=true&w=majority",
   "database": "test",
   "useUnifiedTopology": true,
   "synchronize": true,

3.	Deploying the NodeJS App
a. install pm2 to for node js deployment npm install -g pm2
b. install babel-cli for building the typeorm applications npm install -g babel-cli
c. add the following scripts on package.json
"build-ts": "tsc -p ."
"build": "npm run build-ts && npm run build-babel"
"build-babel": "babel -d ./dist ./src -s"
"pm2-start":  "pm2 start build/index.js --watch"
d. run npm run build-babel to produce a build file and run pm2-start to deploy the app

Repo for sample Typeorm code: https://github.com/SeijiV13/xurpas-typeorm

