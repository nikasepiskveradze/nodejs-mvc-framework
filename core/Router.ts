class Router {
  private routes: any = {};

  public static load(routes: any) {
    const router = new Router();
    router.define(routes);

    return router;
  }

  public define(routes: any) {
    this.routes = routes;
  }

  public direct(uri: string) {
    if (this.routes[uri]) {
      return this.routes[uri];
    }

    throw new Error('No route defined for this URI');
  }
}

export default Router;
