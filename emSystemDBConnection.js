
const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ilovewine",
    database: "employeeSystem_db"     
  });


//might be a good idea to put in a "wild card" if there is a WHERE statement

//will need inquirer.prompt to prompt the user for questions regarding employees


//will need id, firstName, lastName, title, department, salary, manager