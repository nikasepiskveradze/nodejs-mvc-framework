import http from 'http';
import Request from './Request';
import Factory from './Factory';

class Router {
  private routes: any = {
    GET: {},
    POST: {},
  };

  public get(uri: string, controller: any) {
    this.routes['GET'][uri] = controller;
  }

  public post(uri: string, controller: any) {
    this.routes['POST'][uri] = controller;
  }

  public listen(port: number, callback: any) {
    const handler = (req: any, res: any) => {
      const uri = Request.uri(req);
      const method = Request.method(req);
      if (uri.path === '/favicon.ico') return;

      const [controllerName, methodName] = this.direct(
        method,
        String(uri.path)
      );
      return Factory.callMethod(controllerName, methodName)(req, res);
    };

    return http.createServer(handler).listen({ port }, callback);
  }

  public direct(method: string, uri: string) {
    if (this.routes[method][uri]) {
      return this.routes[method][uri].split('@');
    }

    throw new Error('No route defined for this URI');
  }
}

export default new Router();
