// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "tkvfqipcjip2ogjq",
  password: "vc2w8rs2q06mt56d",
  database: "y9aesi2i26khsfck"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
