import { IncomingMessage, ServerResponse } from 'http';

class PagesController {
  public async home(req: IncomingMessage, res: ServerResponse) {
    // const result = await db.selectAll('todos');

    // res.statusCode = 200;
    // res.write(JSON.stringify(result));
    res.end();
  }

  public about(req: IncomingMessage, res: ServerResponse) {}

  public contact(req: IncomingMessage, res: ServerResponse) {}
}

export default PagesController;
