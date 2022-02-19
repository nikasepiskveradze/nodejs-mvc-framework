import mysql2 from 'mysql2';

class Connection {
  public static make(config: any) {
    const connection = mysql2.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.name,
    });

    connection.connect((error) => {
      if (error) throw error;
      console.log('Connected');
    });

    return connection;
  }
}

export default Connection;
