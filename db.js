const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    database: "user",
    password: process.env.DB_PASS,
});

module.exports = connection.promise();