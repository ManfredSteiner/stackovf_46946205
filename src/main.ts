
import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {

    private _server: express.Express;

    constructor () {
        this._server = express();
        this._server.use(express.static('public'));
    }

    public start (port: number) {
        console.log(sprintf('Starting server on port %d', port));
        this._server.listen(port);
    }
}

const main = new Main();
main.start(8080);
