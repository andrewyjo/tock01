//const dbconf = {
//    host: "localhost",
//    post: 5432,
//    database: "tock01",
//    user: "andy",
//    max: 30,
//};

const pgp = require("pg-promise")();
//console.log(process.env.DATABASE_URL);
//console.log(process.env);
const connection = pgp(process.env.DATABASE_URL);
// connection is made via dotenv .env file which paasses db url to pgp
//const connection = pgp(dbconf);

module.exports = connection;
