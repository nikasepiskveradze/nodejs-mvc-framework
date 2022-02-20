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

  public direct(method: string, uri: string) {
    if (this.routes[method][uri]) {
      return this.routes[method][uri].split('@');
    }

    throw new Error('No route defined for this URI');
  }
}

export default new Router();
