import http from 'http';
import Router from './core/Router';
import Request from './core/Request';
import routes from './routes';

const hostname = '127.0.0.1';
const port = 3001;

const router = Router.load(routes);

const server = http.createServer((req, res) => {
  const uri = Request.uri(req);
  if (uri.path === '/favicon.ico') return;

  console.log('controller', router.direct(String(uri.path)));

  res.statusCode = 200;
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
