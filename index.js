
const connection = require ("./db/connection");
const inquirer = require ("inquirer");
 require ("console.table");
 const logo = require('asciiart-logo');
 const config = require('./package.json');
 console.log(logo(config).render());



mainPrompt();

function mainPrompt() {

    inquirer
    .prompt ({
        name: "action",
        type: "list",
        message: "What would you like to do?", 
        choices: [
        {   name: "View All Employees", 
            value: "VIEW_EMPLOYEES"
        },
        {
            name: "View all employees by department", 
            value: "EMPLOYEES_BY_DEPARTMENT",
        },
        {
            name: "View all employees by manager", 
            value: "EMPLOYEES_BY_MANAGER"
        },
        {   name: "Add employee", 
            value: "ADD_EMPLOYEE"
        },
        {
            name:"Remove employee", 
            value: "REMOVE_EMPLOYEE"
        },
        {
            name:"Update employee role",
            value: "UPDATE_EMPLOYEE_ROLE"
        },
        { 
            name: "Update employee manager",
            value: "UPDATE_EMPLOYEE_MANAGER"
        },
      ]
    }).then (res => {
        console.log(res.action)
         switch(res.action) {

                case "VIEW_EMPLOYEES":
                    return viewEmployees();
                case "EMPLOYEES_BY_DEPARTMENT":
                    return employeesByDepartment();
                case "EMPLOYEES_BY_MANAGER":
                    return employeesByManager();
                case "ADD_EMPLOYEE":
                    return addEmployee();
                case "REMOVE_EMPLOYEE":
                    return removeEmployee();
                case "UPDATE_EMPLOYEE_ROLE":
                    return updateEmployeeRole();
                case "UPDATE_EMPLOYEE_MANAGER":
                    return updateEmployeeManager();
                case "VIEW_ROLES":
                    return viewRoles();
                case "ADD_ROLE":
                    return addRole();
                case "REMOVE_ROLE":
                    return removeRole();
                case "VIEW_DEPARTMENTS":
                    return viewDepartments();
                case "ADD_DEPARTMENT":
                    return addDepartment();
                case "REMOVE_DEPARTMENT":
                    return removeDepartment();
                        default: break;
            }
        });
    }

function viewEmployees () {
    connection.query("SELECT * FROM employee_db.employee", function(err, res){
        if (err) throw err;
        console.table(res)
        const employeeArr = [];
        res.forEach(employeeObj => employeeArr.push(employeeObj.name))

    });
}

function employeesByDepartment() {
  var query = "SELECT * FROM employee";
  connection.query(query, function (err, res){
      for (var i = 0; i < res.length; i ++) {
          console.log("Id: " + res[i].id + " || First Name: " + res[i].first_name + " || Last Name: " + res[i].last_name);
      }
      mainPrompt();
  });
}

function addEmployee () {
    connection.query("SELECT * FROM employee_db.employee", function (err, res){
            if (err) throw err;
            inquirer.prompt  ([
                {
                    name: "first_name",
                    message: "What is the employee's first name?"
                },
                {
                    name: "last_name",
                    message: "What is the employee's last name?"
                }
            ]);
                console.log(res);
    });
   
}


function viewRoles() {
    connection.query("SELECT * FROM employee_db.role", function(err ,res){
        if (err) throw err;
        console.table(res)
    });
}


 function viewDepartments () {
    connection.query("SELECT * FROM employee_db.department", function(err ,res){
        if (err) throw err;
        console.table(res)
    });
 }



 function addDepartment () {
    inquirer.prompt ([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ]).then(response => {
        connection.query('INSERT INTO department SET ?', response)
    });
        
    console.log(`Added ${department.name} to the database`);
    console.log(response)
 };
 

 function employeesByManager() {

}


function removeEmployee() {

}

function updateEmployeeRole() {
}


function updateEmployeeManager() {
}

function addRole() {
}

 function removeRole() {
}


function removeDepartment() {

}



 




