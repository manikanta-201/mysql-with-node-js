const mysql=require("mysql");
const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'M@ni3333',
  database:'mydb',
});


connection.connect(function(err){
  if(err){
    console.log("err connetion :"+err.stack)
    return;
  }
  console.log("connected as id"+connection.threadId)
});

connection.query("SELECT * FROM employes",function(error,result,fieds){
  if(error)throw error;
  result.forEach(result => {
    console.log(result)
    
  });
  
});