import PagesController from '../controllers/PagesController';

class Factory {
  private controllers: any = {};

  public constructor(controllers: any) {
    this.controllers = controllers;
  }

  private getController(controllerName: string) {
    if (this.controllers[controllerName]) {
      return this.controllers[controllerName];
    }
  }

  public callMethod(controllerName: any, methodName: any) {
    const controller = this.getController(controllerName);

    if (!controller) {
      throw new Error('No such Controller exists');
    }

    return (req: any, res: any) => {
      if (controller[methodName]) {
        return controller[methodName](req, res);
      }

      throw new Error('No such Controller method exists');
    };
  }
}

export default new Factory({
  PagesController: new PagesController(),
});
