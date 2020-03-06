import "reflect-metadata";
import {createConnection} from "typeorm";
import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
import * as cors from 'cors';
createConnection().then(async connection => {
   const app = express();
   app.use(cors());
   app.use(bodyParser.json());
   app.use('/', routes);

   const server = http.createServer(app);

   server.listen(process.env.PORT || 5000, () => {
    console.log("running on PORT 5000");
   })

    
}).catch(error => console.log(error));
