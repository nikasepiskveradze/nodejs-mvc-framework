import Connection from './database/Connection';
import QueryBuilder from './database/QueryBuilder';
import config from '../config';

export default new QueryBuilder(Connection.make(config.database));
