import { Connection } from 'mysql2';
import util from 'util';

class QueryBuilder {
  protected connection: Connection;

  public constructor(connection: Connection) {
    this.connection = connection;
  }

  public async selectAll(table: string) {
    const query = util.promisify(this.connection.query).bind(this.connection);

    const rows = await query({ sql: `SELECT * FROM ${table}` });

    return rows;
  }
}

export default QueryBuilder;
