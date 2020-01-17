import { ServerInitialize } from './config/server-initialize';
import { ServerWorker } from './config/server-worker';

const serverInitialize = new ServerInitialize();
const serverWorker = new ServerWorker();
const serverRouter = serverWorker.createRouter();

serverInitialize.init();
serverRouter.AddRouts();
serverWorker.start();
