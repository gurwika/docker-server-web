import express from 'express';
import { ServerRouter } from './server-router';

export class ServerWorker {
	private app: any;

	constructor() {
		this.app = express();
	}

	createRouter() {
		return new ServerRouter(this.app);
	}

	start() {
		this.app.listen(process.env.PORT);
	}
}
