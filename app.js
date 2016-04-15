var mysql = require("mysql");

/*making DB connection*/
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "girnar",
	database: "sitepoint",
	multipleStatements: true
});
/*checking connection*/
con.connect(function(err){
	if(err){
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
});

/*inserting data*/
var employee = { name: 'Rajneesh', location: 'Delhi' };
var query = con.query('INSERT INTO employees SET ?', employee, function(err,res){
	if(err) throw err;

	console.log('Last insert ID:', res.insertId);
});


/*updating data*/
var query = con.query('UPDATE employees SET location = ? WHERE id = ?', ['UP', 5], function(err,res){
	if(err) throw err;

	console.log('Changed ' + res.changedRows + ' rows');
});


/*Destroying data*/
var query = con.query('DELETE FROM employees WHERE id = ?', [5], function(err, res){
	if(err) throw err;

	console.log('Deleted ' + res.affectedRows + ' rows');
});


/*fetching single data*/
var userLandVariable = 6;
var query = con.query('SELECT * FROM employees WHERE id = ?', [mysql.escape(userLandVariable)], function(err,rows){
	if (err) throw err;
	
	console.log('Data received from Db:\n');
  	console.log(rows);  		
});


/*fetching*/
var query = con.query('SELECT * FROM employees',function(err,rows){
  	if(err) throw err;

  	for (var i = 0; i < rows.length; i++) {
	  console.log(rows[i].name+' - '+rows[i].location);
	};
});


//calling store procedure
//get employee using store procedure
var query = con.query('CALL sp_getall()',function(err,rows){
  if (err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

//get employee details using store procedure
var query = con.query('CALL sp_get_employee_detail(1)',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows[0]);
});

//indert employee details using store procedure
var query = con.query(
  'SET @employee_id = 0; CALL sp_insert_employee(@employee_id, "Rajneesh", "Delhi"); SELECT @employee_id',
  function(err,rows){
    if (err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
  }
);


//get raw query
console.log(query.sql);

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});