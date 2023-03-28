const appMongoDB = require('./appMongoDB');
const appMySQL = require('./appMySQL');
const connectToDatabase = require('./database/MongoDB/Connection');

connectToDatabase()
  .then(() => {
    appMongoDB.listen(3001, () => console.log('Running server mongo on port: 3001'));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });

  appMySQL.listen(3000, console.log('Server init MySQL port: 3000'));
