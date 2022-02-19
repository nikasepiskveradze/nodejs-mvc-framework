import { IncomingMessage } from 'http';
import url from 'url';

class Request {
  public static uri(req: IncomingMessage) {
    return url.parse(req.url ?? '/', true);
  }
}

export default Request;
