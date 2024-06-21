// const mysql=require("mysql");

// const connection =mysql.createConnection({
//     host:'localhost',
//     database:'mydb',
//     user:'root',
//     password:'M@ni3333'
// });

// connection.connect(function(err){
//     if(err){
//         console.err('err connecting :'+err.stack);
//         return;
//     }
//     console.log("connected as id" +connection.threadId );
// });

// connection.query('SELECT * FROM employes', function(err,result,fields){
//  if(err)
//     throw error;
// result.forEach(result => {
//   console.log(result);
// });

// });

// const { error } = require("console");
// const mysql = require("mysql");

// const connection= mysql.createConnection({
//     host:"localhost",
//     database:'mydb',
//     user:"root",
//     password:"M@ni3333",
// });

// connection.connect(function(err){
//     if(err){
//         console.err('error connecting:' + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// connection.query("SELECT * from employes", function(err,result,fields){
//     if(err)
//         throw err;
//     result.forEach(result => {
//        console.log(result);
//     });
// });

// const { error } = require("console");
// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "localhost",
//   database: "mydb",
//   user: "root",
//   password: "M@ni3333",
// });

// connection.connect(function (err) {
//   if (err) {
//     console.err("errr connecting :" + err.stack);
//     return;
//   }
//   console.log("connectd ad id " + connection.threadId);
//   ;
// });

// connection.query("select * from employes", function (error, result, fieds) {
//   if (error) throw error;
//   result.forEach((result) => {
//     console.log(result);
//   });
// });
