import {
  createServer, IncomingMessage, Server, ServerResponse,
} from 'http';

export class App {
  private server: Server<typeof IncomingMessage, typeof ServerResponse>;

  constructor() {
    this.server = createServer((req, res) => {
      res.end('234');  
    });

    this.server.listen(3000);

    this.server.on('close', () => {
    });
  }

  async close() {
    this.server.close();
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 5000);
    });
    return 'data';
  }
}
