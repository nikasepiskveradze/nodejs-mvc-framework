import http from 'http';
import Router from './core/Router';
import Request from './core/Request';
import Factory from './core/Factory';

const hostname = '127.0.0.1';
const port = 3001;

Router.get('/', 'PagesController@home');
Router.get('/about', 'PagesController@about');
Router.get('/contact', 'PagesController@contact');

const server = http.createServer((req, res) => {
  const uri = Request.uri(req);
  const method = Request.method(req);
  if (uri.path === '/favicon.ico') return;

  const [controllerName, methodName] = Router.direct(method, String(uri.path));
  return Factory.callMethod(controllerName, methodName)(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
