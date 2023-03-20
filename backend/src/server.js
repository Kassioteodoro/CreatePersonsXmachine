const appMongoDB = require('./appMongoDB');
const connectToDatabase = require('./database/MongoDB/Connection');

connectToDatabase()
  .then(() => {
    appMongoDB.listen(3001, () => console.log('Running server on port: 3001'));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });