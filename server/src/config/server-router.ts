export class ServerRouter {
	constructor(private app: any) {}

	AddRouts() {
		this.app.get('/', (req: any, res: any) => {
			res.send('ok');
		});
	}
}
