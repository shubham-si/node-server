import express, { Application } from 'express';
import bodyParser from "body-parser";

import indexRouter from './routes/index.routes'                     // alias for indexRouter object in index.routes.ts
import providerRouter from './routes/provider.routes'
import adexchangeRouter from './routes/adexchange.routes'


export default class AppServer {
    public express: Application;

    constructor(private port?: number | string) {
        this.express = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.express.set('port',3000);
    }

    private middlewares() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true })); 
    }

    private routes() {
        this.express.all('/*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });

        this.express.use(indexRouter);                                       // by default '/' as path
        this.express.use('/provider',providerRouter);
        this.express.use('/adexchange',adexchangeRouter);

    }

    public async listen():Promise<any>{
        await  this.express.listen(+this.express.get('port'));
        console.log('Server on port', this.express.get('port'));
    }

}
