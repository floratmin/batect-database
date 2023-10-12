const pgPromise = require('pg-promise')();

const dbConnection = pgPromise(process.env.POSTGRES_URI)

dbConnection.none(`CREATE TABLE test (id text)`)
    .then((res) => console.log('created table'))
    .catch((err) => console.log(err));
