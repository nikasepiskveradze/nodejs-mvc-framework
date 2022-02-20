import { IncomingMessage } from 'http';
import url from 'url';

class Request {
  public static uri(req: IncomingMessage) {
    return url.parse(req.url ?? '/', true);
  }

  public static method(req: IncomingMessage) {
    return req.method ?? 'GET';
  }
}

export default Request;
